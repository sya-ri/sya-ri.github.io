const root = document.getElementById("portfolio");
const reader = root.querySelector(".reader"),
  player = root.querySelector(".player");
const vertical = matchMedia("(max-width: 768px), (max-width: 1024px) and (pointer: coarse)");
const header = root.querySelector(".signature");
const preference = matchMedia("(prefers-reduced-motion: reduce)");

const colors = [
  ["mint", "mint"],
  ["silver", "silver"],
  ["blue", "blue"],
  ["teal", "teal"],
  ["pink", "pink"],
  ["purple", "purple"],
];
const colorButtons = root.querySelectorAll("[data-color-switch]");
const announcement = root.querySelector(".swatch-announcement");
function selectCoat(key) {
  const color = colors.find((pair) => pair[0] === key) ?? colors[0];
  root.dataset.coat = color[0];
  colorButtons.forEach((button) =>
    button.setAttribute("aria-label", "Change sya-ri’s color. Current color: " + color[1]),
  );
}
selectCoat();
try {
  selectCoat(localStorage.getItem("shari-color"));
} catch {
  /* Storage is optional. */
}
function cycleCoat() {
  const index = colors.findIndex((pair) => pair[0] === root.dataset.coat);
  const [key, name] = colors[(index + 1) % colors.length];
  selectCoat(key);
  announcement.textContent = "sya-ri is " + name;
  try {
    localStorage.setItem("shari-color", key);
  } catch {
    /* The color still works for this visit. */
  }
}
colorButtons.forEach((button) => button.addEventListener("click", cycleCoat));

const unit = 3.125;
const px = (n) => n * unit + "px";
const make = (parent, cls) => {
  const el = document.createElement("div");
  el.className = cls;
  parent.append(el);
  return el;
};
// The skin has an opaque base and no outer layer.
function part(x, y, w, h, d, u, v) {
  const joint = make(player, "joint");
  Object.assign(joint.style, { left: px(x), top: px(y), width: px(w), height: px(h) });

  function face(fw, fh, tx, ty, rotation, depth, light) {
    const surface = make(joint, "face");
    Object.assign(surface.style, {
      width: px(fw),
      height: px(fh),
      left: px((w - fw) / 2),
      top: px((h - fh) / 2),
      // A small overlap keeps subpixel gaps from exposing the page between faces.
      transform: rotation + " translateZ(" + px(depth / 2) + ") scale(1.012)",
      backgroundSize: px(64) + " " + px(64),
      backgroundPosition: px(-tx) + " " + px(-ty),
      filter: "brightness(" + light + ")",
    });
  }
  face(w, h, u + d, v + d, "rotateY(0deg)", d, 1);
  face(d, h, u + d + w, v + d, "rotateY(90deg)", w, 0.82);
  face(d, h, u, v + d, "rotateY(-90deg)", w, 0.89);
  face(w, h, u + 2 * d + w, v + d, "rotateY(180deg)", d, 0.82);
  face(w, d, u + d, v, "rotateX(90deg)", h, 1.05);
  face(w, d, u + d + w, v, "rotateX(-90deg)", h, 0.76);
  return joint;
}
const head = part(4, 0, 8, 8, 8, 0, 0);
head.style.transformOrigin = "50% 100%";
part(4, 8, 8, 12, 4, 16, 16);
const rightArm = part(0, 8, 4, 12, 4, 40, 16);
const leftArm = part(12, 8, 4, 12, 4, 32, 48);
const rightLeg = part(4, 20, 4, 12, 4, 0, 16);
const leftLeg = part(8, 20, 4, 12, 4, 16, 48);
const wingLeft = make(player, "elytra wing-left"),
  wingRight = make(player, "elytra wing-right");
for (const wing of [wingLeft, wingRight]) make(wing, "wing-core");
const profileAngle = 48;
const headTurn = -25;
function scrollPosition() {
  return vertical.matches ? window.scrollY : reader.scrollLeft;
}
function scrollToPosition(value) {
  if (vertical.matches) window.scrollTo({ top: value, behavior: "instant" });
  else reader.scrollLeft = value;
}
let ground = scrollPosition(),
  power = 0,
  step = 0,
  yaw = profileAngle,
  direction = 1;
let wheelTarget = null,
  frame = 0,
  stamp = 0;
let alignTimer,
  correcting = false,
  touching = false;
let trip = null;
let idle = false,
  gaze = null;
const look = (turn = 0, up = 0, tilt = 0) =>
  "rotateY(" +
  turn * direction +
  "deg) rotateX(" +
  up +
  "deg) rotateZ(" +
  tilt * direction +
  "deg)";
function cancelGaze() {
  if (gaze) gaze.cancel();
  gaze = null;
}
function standStill() {
  cancelGaze();
  idle = true;
  head.style.transform = look(headTurn);
  if (preference.matches) return;
  // Holds between head movements leave plenty of quiet time for reading.
  const poses = [
    [0, headTurn, 0, 0],
    [0.09, headTurn, 0, 0],
    [0.16, -20, 23, -2],
    [0.24, -20, 23, -2],
    [0.31, headTurn, 0, 0],
    [0.45, headTurn, 0, 0],
    [0.52, -47, 4, 3],
    [0.6, -47, 4, 3],
    [0.68, -8, 2, 0],
    [0.74, -8, 2, 0],
    [0.82, headTurn, 0, 0],
    [1, headTurn, 0, 0],
  ];
  gaze = head.animate(
    poses.map(([offset, turn, up, tilt]) => ({
      offset,
      transform: look(turn, up, tilt),
      easing: "ease-in-out",
    })),
    { duration: 11400, iterations: Infinity },
  );
}
function beginWalk() {
  if (!idle) return;
  const from = getComputedStyle(head).transform;
  cancelGaze();
  idle = false;
  gaze = head.animate([{ transform: from }, {}], { duration: 180, easing: "ease-out" });
}
function pose() {
  const unfold = trip?.flying
    ? Math.max(0, Math.min(1, trip.progress / 0.22, (1 - trip.progress) / 0.24))
    : 0;
  const glide = unfold * unfold * (3 - 2 * unfold);
  const stride = Math.sin(step) * power * (1 - glide);
  const armSwing = Math.sin(step - 0.14) * power * 23 * (1 - glide);
  const passing = Math.cos(step);
  const hipAngle = (Math.abs(stride) * 34 * Math.PI) / 180;
  const footDrop = Math.max(0, 12 * (1 - Math.cos(hipAngle)) - 2 * Math.sin(hipAngle)) * unit;
  player.style.transformOrigin = "50% " + (96 - 44 * glide) + "%";
  player.style.transform =
    "translate(" +
    14 * glide +
    "px," +
    (footDrop - 15 * glide) +
    "px) rotateX(" +
    (-7 - 13 * glide) +
    "deg) rotateY(" +
    yaw +
    "deg) rotateX(" +
    (power * 3 * (1 - glide) - 86 * glide) +
    "deg)";
  if (trip?.flying) {
    const spread = 15 + 68 * glide,
      dihedral = 15 * glide;
    wingLeft.style.transform =
      "translateZ(-7px) rotateY(" + -dihedral + "deg) rotateZ(" + spread + "deg)";
    wingRight.style.transform =
      "translateZ(-7px) rotateY(" + dihedral + "deg) rotateZ(" + -spread + "deg)";
  }
  rightArm.style.transform = "rotateX(" + armSwing + "deg)";
  leftArm.style.transform = "rotateX(" + -armSwing + "deg)";
  // The foot moving forward lifts slightly; the supporting foot stays on the floor.
  const lift = 3.5 * power * passing * passing * (1 - glide);
  rightLeg.style.transform =
    "translateY(" + (passing < 0 ? -lift : 0) + "px) rotateX(" + -stride * 34 + "deg)";
  leftLeg.style.transform =
    "translateY(" + (passing > 0 ? -lift : 0) + "px) rotateX(" + stride * 34 + "deg)";
  const facing = yaw / profileAngle;
  if (!idle)
    head.style.transform = "rotateX(" + 84 * glide + "deg) rotateY(" + headTurn * facing + "deg)";
}
function tick(now) {
  frame = 0;
  const dt = Math.min(50, Math.max(1, now - (stamp || now - 16)));
  stamp = now;
  if (trip) {
    const t = Math.min(1, (now - trip.start) / trip.duration);
    trip.progress = Math.max(0, t);
    const eased = trip.progress * trip.progress * (3 - 2 * trip.progress);
    scrollToPosition(trip.from + (trip.to - trip.from) * eased);
    if (t === 1) endTrip();
  }
  if (wheelTarget !== null) {
    const gap = wheelTarget - reader.scrollLeft;
    if (Math.abs(gap) < 4) {
      reader.scrollLeft = wheelTarget;
      if (correcting)
        settledPage = clampPage(Math.round(reader.scrollLeft / Math.max(1, pageStep)));
      wheelTarget = null;
      correcting = false;
      scheduleAlignment();
    } else {
      const advance = Math.max(1, Math.abs(gap) * (1 - Math.exp(-dt / (correcting ? 100 : 65))));
      reader.scrollLeft += Math.sign(gap) * advance;
    }
  }
  const gap = scrollPosition() - ground;
  const distance = gap * (1 - Math.exp(-dt / 68));
  ground += distance;
  const speed = Math.abs(distance) / dt;
  const strength = 1 - Math.exp(-speed / 0.72);
  power += (strength - power) * (1 - Math.exp(-dt / 90));
  if (Math.abs(distance) > 0.06) direction = Math.sign(distance);
  if (!trip && wheelTarget === null && Math.abs(gap) < 0.35 && power < 0.07) direction = 1;
  const turning = direction * profileAngle;
  yaw += (turning - yaw) * (1 - Math.exp(-dt / 100));
  if (speed > 0.025) {
    step += dt * Math.min(0.015, speed / (25 + 52 * power));
  } else {
    const planted = Math.round(step / Math.PI) * Math.PI;
    step += (planted - step) * (1 - Math.exp(-dt / 90));
  }
  if (
    !trip &&
    wheelTarget === null &&
    Math.abs(gap) < 0.2 &&
    power < 0.008 &&
    Math.abs(yaw - turning) < 0.4
  ) {
    ground = scrollPosition();
    power = 0;
    yaw = turning;
    step = Math.round(step / Math.PI) * Math.PI;
    stamp = 0;
    pose();
    standStill();
    return;
  }
  pose();
  frame = requestAnimationFrame(tick);
}
function startMotion() {
  if (preference.matches || frame) return;
  beginWalk();
  frame = requestAnimationFrame(tick);
}
reader.addEventListener(
  "scroll",
  () => {
    clearTimeout(alignTimer);
    startMotion();
  },
  { passive: true },
);
window.addEventListener(
  "pointerdown",
  () => {
    const interrupted = trip !== null;
    endTrip();
    cancelAlignment();
    wheelTarget = null;
    if (interrupted && vertical.matches) syncPage();
  },
  { passive: true },
);
reader.addEventListener(
  "touchstart",
  () => {
    touching = true;
    cancelAlignment();
  },
  { passive: true },
);
function releaseTouch(event) {
  touching = event.touches.length > 0;
  if (!touching) scheduleAlignment();
}
reader.addEventListener("touchend", releaseTouch, { passive: true });
reader.addEventListener("touchcancel", releaseTouch, { passive: true });
function galleryWheel(event) {
  endTrip();
  cancelAlignment();
  if (event.ctrlKey || event.shiftKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {
    wheelTarget = null;
    return;
  }
  const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? reader.clientWidth : 1;
  const max = reader.scrollWidth - reader.clientWidth;
  const current = wheelTarget ?? reader.scrollLeft;
  const next = Math.max(0, Math.min(max, current + event.deltaY * unit));
  if (next === reader.scrollLeft && wheelTarget === null) return;
  event.preventDefault();
  if (preference.matches) reader.scrollLeft = next;
  else {
    wheelTarget = next;
    startMotion();
  }
}
reader.addEventListener("keydown", (event) => {
  if (
    vertical.matches ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    !["ArrowLeft", "ArrowRight"].includes(event.key)
  )
    return;
  const code = event.target.closest(".code-scroll");
  if (code && code.scrollWidth > code.clientWidth) return;
  event.preventDefault();
  moveCard(event.key === "ArrowRight" ? 1 : -1);
});
new ResizeObserver(() => {
  if (wheelTarget !== null)
    wheelTarget = Math.min(wheelTarget, reader.scrollWidth - reader.clientWidth);
}).observe(reader);
preference.addEventListener("change", () => {
  if (trip) {
    scrollToPosition(trip.to);
    endTrip();
  }
  cancelAnimationFrame(frame);
  frame = 0;
  stamp = 0;
  if (wheelTarget !== null) reader.scrollLeft = wheelTarget;
  cancelAlignment();
  wheelTarget = null;
  ground = scrollPosition();
  power = 0;
  step = 0;
  direction = 1;
  yaw = profileAngle;
  pose();
  standStill();
});
const cards = [...reader.querySelectorAll(".work-grid > .work")];
const track = root.querySelector(".work-grid");
const links = [...root.querySelectorAll('.signature a[href^="#"]')];
function applyLayout() {
  root.dataset.layout = vertical.matches ? "vertical" : "horizontal";
  reader.removeEventListener("wheel", galleryWheel);
  if (!vertical.matches) reader.addEventListener("wheel", galleryWheel, { passive: false });
}
applyLayout();
const offsetOf = (index) => cards[index].offsetLeft - cards[0].offsetLeft;
const clampPage = (index) => Math.max(0, Math.min(cards.length - 1, index));
let pageStep = offsetOf(1);
let settledPage = clampPage(Math.round(reader.scrollLeft / Math.max(1, pageStep)));
let activePage = settledPage;
function verticalOffset(index) {
  if (index === 0) return 0;
  return Math.max(
    0,
    Math.min(
      window.scrollY + cards[index].getBoundingClientRect().top - header.offsetHeight - 12,
      document.documentElement.scrollHeight - window.innerHeight,
    ),
  );
}
function visibleVerticalPage() {
  const marker = header.offsetHeight + Math.min(112, window.innerHeight * 0.14);
  return Math.max(
    0,
    cards.findLastIndex((card) => card.getBoundingClientRect().top <= marker),
  );
}
function landingPage() {
  const distance = (reader.scrollLeft - offsetOf(settledPage)) / Math.max(1, pageStep);
  // Use the last resting page as the origin throughout the gesture and the snap.
  const crossed = Math.floor(Math.abs(distance) + 0.85 + 1e-6);
  return clampPage(settledPage + Math.sign(distance) * crossed);
}
function endTrip() {
  if (trip && !vertical.matches)
    settledPage = clampPage(Math.round(reader.scrollLeft / Math.max(1, pageStep)));
  trip = null;
  delete root.dataset.trip;
}
function travelTo(index) {
  cancelAlignment();
  endTrip();
  wheelTarget = null;
  const from = scrollPosition();
  const to = vertical.matches
    ? verticalOffset(index)
    : Math.min(offsetOf(index), reader.scrollWidth - reader.clientWidth);
  const distance = Math.abs(to - from);
  if (distance < 1 || preference.matches) {
    settledPage = index;
    scrollToPosition(to);
    syncPage();
    return;
  }
  // Adjacent pages are within running distance, even across a section boundary.
  const flying = vertical.matches ? Math.abs(index - activePage) > 1 : distance > 1.5 * pageStep;
  trip = { from, to, flying, progress: 0, start: performance.now(), duration: flying ? 1050 : 360 };
  root.dataset.trip = flying ? "fly" : "run";
  startMotion();
}
for (const link of links) {
  link.addEventListener("click", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
    event.preventDefault();
    if (location.hash !== link.hash) {
      if (vertical.matches) {
        history.replaceState({ readingOffset: window.scrollY - verticalOffset(activePage) }, "");
      }
      history.pushState(null, "", link.hash);
    }
    travelTo(cards.indexOf(document.getElementById(link.hash.slice(1))));
  });
}
function cancelAlignment() {
  clearTimeout(alignTimer);
  if (correcting) wheelTarget = null;
  correcting = false;
}
function scheduleAlignment() {
  clearTimeout(alignTimer);
  if (vertical.matches || touching || trip || wheelTarget !== null) return;
  alignTimer = setTimeout(() => {
    if (window.getSelection()?.isCollapsed === false) return;
    const index = landingPage();
    const left = Math.min(offsetOf(index), reader.scrollWidth - reader.clientWidth);
    if (Math.abs(left - reader.scrollLeft) <= 1) {
      settledPage = index;
      return;
    }
    if (preference.matches) {
      settledPage = index;
      reader.scrollLeft = left;
    } else {
      correcting = true;
      wheelTarget = left;
      startMotion();
    }
  }, 360);
}
// Wait for native swipe momentum and scrollbar drags to finish.
reader.addEventListener("onscrollend" in reader ? "scrollend" : "scroll", scheduleAlignment, {
  passive: true,
});
function syncPage() {
  if (vertical.matches) {
    const index = visibleVerticalPage();
    if (index !== activePage || (!trip && location.hash !== "#" + cards[index].id)) {
      activePage = index;
      markCurrent();
    }
    return;
  }
  const step = offsetOf(1);
  if (step !== pageStep) {
    pageStep = step;
    endTrip();
    cancelAlignment();
    wheelTarget = null;
    settledPage = activePage;
    reader.scrollTo({ left: offsetOf(activePage), behavior: "instant" });
  }
  activePage = trip
    ? clampPage(Math.round(reader.scrollLeft / Math.max(1, pageStep)))
    : landingPage();
  markCurrent();
  // Keep the travel lane in view on short pages, including the introduction.
  if (!trip?.flying)
    track.style.setProperty("--active-height", cards[activePage].offsetHeight + 8 + "px");
}
function markCurrent() {
  const page = cards[activePage],
    section = page.dataset.section;
  for (const link of links) {
    if (link.dataset.section === section) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
  const hash = "#" + page.id;
  if (!trip && location.hash !== hash) history.replaceState(null, "", hash);
}
function moveCard(direction) {
  const target = clampPage(activePage + direction);
  travelTo(target);
}
reader.addEventListener("scroll", syncPage, { passive: true });
const sizeObserver = new ResizeObserver(syncPage);
sizeObserver.observe(reader);
cards.forEach((card) => sizeObserver.observe(card));
function restoreLocation() {
  const slug = location.hash.slice(1);
  const index = Math.max(
    0,
    cards.findIndex((card) => card.id === slug || card.dataset.section === slug),
  );
  cancelAlignment();
  endTrip();
  wheelTarget = null;
  settledPage = index;
  const offset = history.state?.readingOffset ?? 0;
  scrollToPosition(vertical.matches ? verticalOffset(index) + offset : offsetOf(index));
  syncPage();
}
// Ordinary swipes and wheel gestures on a phone belong to the document.
window.addEventListener(
  "scroll",
  () => {
    if (!vertical.matches) return;
    syncPage();
    startMotion();
  },
  { passive: true },
);
function interruptVerticalTrip() {
  if (vertical.matches && trip) {
    endTrip();
    syncPage();
  }
}
window.addEventListener("wheel", interruptVerticalTrip, { passive: true });
window.addEventListener("keydown", (event) => {
  if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key))
    interruptVerticalTrip();
});
history.scrollRestoration = "manual";
window.addEventListener("hashchange", restoreLocation);
window.addEventListener("popstate", restoreLocation);
restoreLocation();
ground = scrollPosition();

// A new project passing into view briefly catches sya-ri's eye.
let glance = null;
const tracked = new Set();
function glanceAtEntry(changes) {
  for (const entry of changes) {
    const returning = tracked.has(entry.target);
    tracked.add(entry.target);
    if (!returning || entry.intersectionRatio < 0.36 || preference.matches || trip?.flying)
      continue;
    const from = getComputedStyle(head).rotate;
    glance?.cancel();
    glance = head.animate(
      [
        { rotate: from },
        { rotate: "x 19deg", offset: 0.35 },
        { rotate: "x 19deg", offset: 0.62 },
        { rotate: "x 0deg" },
      ],
      { duration: 900, easing: "ease-in-out" },
    );
  }
}
function watchEntries() {
  const observer = new IntersectionObserver(glanceAtEntry, {
    root: vertical.matches ? null : reader,
    threshold: 0.36,
  });
  cards.forEach((card) => observer.observe(card));
  return observer;
}
let observer = watchEntries();
vertical.addEventListener("change", () => {
  const index = activePage;
  cancelAlignment();
  endTrip();
  wheelTarget = null;
  touching = false;
  cancelAnimationFrame(frame);
  frame = 0;
  stamp = 0;
  power = 0;
  step = 0;
  direction = 1;
  yaw = profileAngle;
  applyLayout();
  observer.disconnect();
  observer = watchEntries();
  pageStep = offsetOf(1);
  settledPage = index;
  if (!vertical.matches) window.scrollTo({ top: 0, behavior: "instant" });
  scrollToPosition(vertical.matches ? verticalOffset(index) : offsetOf(index));
  ground = scrollPosition();
  pose();
  standStill();
  syncPage();
});
preference.addEventListener("change", () => {
  if (preference.matches) glance?.cancel();
});
pose();
standStill();
