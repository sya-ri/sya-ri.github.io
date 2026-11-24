import { readFileSync } from "node:fs";
import sharp from "sharp";

const artwork = readFileSync("src/assets/sya-ri.svg", "utf8");
const rgb = "[0-9a-f]{3}(?:[0-9a-f]{3})?";
const variantPattern = new RegExp(`^(${rgb})-(${rgb})(?:-(${rgb}))?\\.(svg|png)$`, "i");

export default async function icon(request, response) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }

  const url = new URL(request.url, "http://localhost");
  const variant = url.pathname.startsWith("/icon-")
    ? url.pathname.slice("/icon-".length)
    : url.searchParams.get("variant");
  const match = variantPattern.exec(variant ?? "");
  if (!match) {
    response
      .writeHead(400, { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" })
      .end("Use /icon-BODY-EYE[-BACKGROUND].svg or .png with three- or six-digit hex colors.");
    return;
  }

  const [, body, eye, background, extension] = match;
  const png = extension.toLowerCase() === "png";
  const svg = artwork
    .replace(/var\(--body,#[\da-f]{6}\)/gi, `#${body}`)
    .replace(/var\(--outline,#[\da-f]{6}\)/gi, `#${eye}`)
    .replace("var(--icon-bg,none)", background ? `#${background}` : "none");

  response.setHeader("Content-Type", png ? "image/png" : "image/svg+xml; charset=utf-8");
  response.setHeader("Cache-Control", "public, max-age=86400, s-maxage=604800");
  if (request.method === "HEAD") {
    response.end();
  } else if (png) {
    const size = background ? 1600 : 750;
    response.end(await sharp(Buffer.from(svg)).resize(size, size).png().toBuffer());
  } else {
    response.end(svg);
  }
}
