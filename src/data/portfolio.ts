import strataExample from "../examples/strata/PlayerRow.kt?raw";
import minecraftSkillsExample from "../examples/minecraft-skills/pack-format.console?raw";
import crafleetSetup from "../examples/crafleet/server-setup.console?raw";
import crafleetConfig from "../examples/crafleet/crafleet.yaml?raw";
import crafleetStart from "../examples/crafleet/server-start.console?raw";
import ktconfigExample from "../examples/ktconfig/ServerConfig.kt?raw";
import ktconfigOutput from "../examples/ktconfig/config.yml?raw";
import ktinventoryExample from "../examples/ktinventory/SimpleMenu.kt?raw";
import ktadvancementsExample from "../examples/ktadvancements/TestAdvancement.kt?raw";
import minecraftServerGradlePluginExample from "../examples/minecraft-server-gradle-plugin/build.gradle.kts?raw";
import kgitExample from "../examples/kgit/clone.kts?raw";
import fiktionExample from "../examples/fiktion/PaidOrder.kt?raw";
import fastTypedXmlExample from "../examples/fast-typed-xml/parse-book.ts?raw";
import sqldelightCheckExample from "../examples/sqldelight-check/format-query.diff?raw";
import halExtensionExample from "../examples/hal-extension/motor.cpp?raw";

export interface Work {
  name: string;
  slug: string;
  website?: string;
  github?: string;
  logo?: string;
}
interface WorkImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}
export interface Activity extends Work {
  description: string;
  image: WorkImage;
}
export type Project = Work & {
  description: string;
} & ({ image: WorkImage } | { examples: CodeExample[] });
export interface CodeExample {
  kind: "code";
  language: "kotlin" | "shell-json" | "cpp" | "yaml" | "typescript" | "diff";
  code: string;
}
export type Example = ({ kind: "image" } & WorkImage) | CodeExample;
export interface Library extends Work {
  description: string;
  layout?: "stacked";
  examples: Example[];
}

export const activities: Activity[] = [
  {
    slug: "wanko-zushi",
    name: "wanko-zushi",
    website: "https://wanko-zushi.com",
    description:
      "I’m one of the two people behind wanko-zushi. I build custom Minecraft plugins for videos and events.",
    image: {
      src: "/images/wanko-zushi.webp",
      alt: "The wanko-zushi banner with a Minecraft village behind its Japanese tagline.",
      width: 1200,
      height: 675,
    },
  },
  {
    slug: "try-swift-tokyo",
    name: "try! Swift Tokyo",
    website: "https://tryswift.jp/",
    github: "https://github.com/tryswift",
    description:
      "I’m an organizer for try! Swift Tokyo, an international conference for Swift developers.",
    image: {
      src: "/images/try-swift-tokyo.webp",
      alt: "The try! Swift mascot over a colorful Tokyo skyline.",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "love-kotlin",
    name: "#love_kotlin",
    website: "https://x.com/search?q=%23love_kotlin",
    github: "https://github.com/love-swift-kotlin",
    description:
      "As part of the #love_kotlin staff, I help run meetups where Kotlin developers share what they’re working on.",
    image: {
      src: "/images/love-kotlin.webp",
      alt: "The Kotlin Meetup logo.",
      width: 462,
      height: 294,
    },
  },
];

export const projects: Project[] = [
  {
    slug: "mineportal",
    name: "MinePortal",
    website: "https://mineportal.jp/servers",
    description:
      "Find Minecraft survival worlds and minigame servers for Java or Bedrock. See what you can play and how many people are online before you join.",
    image: {
      src: "/images/mineportal.webp",
      alt: "The MinePortal home page, with its purple cube above a Minecraft cherry grove.",
      width: 1884,
      height: 1023,
    },
  },
  {
    slug: "spigot-event-list",
    name: "Spigot Event List",
    website: "https://spigot-event-list.s7a.dev/",
    github: "https://github.com/sya-ri/spigot-event-list",
    description:
      "Find the event your Minecraft plugin needs. Search for a term like “join” and check which servers, proxies, and versions support the event.",
    image: {
      src: "/images/spigot-event-list.svg",
      alt: "The Spigot Event List logo with a white pulse line on a dark square.",
      width: 1100,
      height: 578,
    },
  },
  {
    slug: "minecraft-inventory",
    name: "Minecraft Inventory",
    website: "https://minecraft-inventory.s7a.dev/",
    github: "https://github.com/sya-ri/minecraft-inventory",
    description:
      "Design chest menus and crafting recipes in your browser. Pick a layout, drag items into place, and save it as a PNG like the iron pickaxe recipe shown here.",
    image: {
      src: "/images/minecraft-inventory.png",
      alt: "Three iron ingots across the top and two sticks down the middle make an iron pickaxe.",
      width: 512,
      height: 264,
    },
  },
  {
    slug: "orvia",
    name: "Orvia",
    website: "https://orvia.s7a.dev/",
    github: "https://github.com/orvia-audio/orvia",
    description:
      "Adjust your microphone gain and filter out background noise while monitoring through headphones. Orvia runs on Windows, macOS, and Linux.",
    image: {
      src: "/images/orvia.webp",
      alt: "Orvia’s mixer shows the mic signal before and after noise suppression.",
      width: 830,
      height: 640,
    },
  },
  {
    slug: "minecraft-skills",
    name: "minecraft-skills",
    github: "https://github.com/sya-ri/minecraft-skills",
    description:
      "Look up Minecraft data for a specific release, such as its pack format, from your terminal. AI assistants can query the same versioned data over MCP.",
    examples: [{ kind: "code", language: "shell-json", code: minecraftSkillsExample }],
  },
  {
    slug: "crafleet",
    name: "Crafleet",
    github: "https://github.com/sya-ri/crafleet",
    description:
      "Install a Minecraft server and its plugins, check its configuration, and manage backups from one CLI.",
    examples: [
      { kind: "code", language: "shell-json", code: crafleetSetup },
      { kind: "code", language: "yaml", code: crafleetConfig },
      { kind: "code", language: "shell-json", code: crafleetStart },
    ],
  },
];

export const libraries: Library[] = [
  {
    slug: "strata",
    name: "Strata",
    layout: "stacked",
    website: "https://gh.s7a.dev/strata/demos/",
    github: "https://github.com/sya-ri/strata",
    description:
      "Build Minecraft screens from reusable Kotlin components. You can test their layout and state without starting the game.",
    examples: [
      {
        kind: "code",
        language: "kotlin",
        code: strataExample,
      },
      {
        kind: "image",
        src: "/images/strata-screen.webp",
        width: 440,
        height: 72,
        alt: "Alex’s player head beside the name Alex, the role Builder, and an Invite button.",
      },
    ],
  },
  {
    slug: "ktconfig",
    name: "ktConfig",
    github: "https://github.com/sya-ri/ktConfig",
    description:
      "Define your settings once in a Kotlin data class. ktConfig reads and writes the matching YAML for Bukkit plugins and Fabric mods.",
    examples: [
      {
        kind: "code",
        language: "kotlin",
        code: ktconfigExample,
      },
      {
        kind: "code",
        language: "yaml",
        code: ktconfigOutput,
      },
    ],
  },
  {
    slug: "ktinventory",
    name: "ktInventory",
    layout: "stacked",
    website: "https://gh.s7a.dev/ktInventory",
    github: "https://github.com/sya-ri/ktInventory",
    description:
      "Turn a Minecraft inventory into a menu for your Spigot plugin. Each button pairs an item with the Kotlin code that runs when a player clicks it.",
    examples: [
      {
        kind: "code",
        language: "kotlin",
        code: ktinventoryExample,
      },
      {
        kind: "image",
        src: "/images/ktinventory-screen.webp",
        width: 512,
        height: 93,
        alt: "A nine-slot menu with a red bed in the fourth slot and a compass in the sixth.",
      },
    ],
  },
  {
    slug: "ktadvancements",
    name: "ktAdvancements",
    layout: "stacked",
    github: "https://github.com/sya-ri/ktAdvancements",
    description:
      "Give players custom advancements on Spigot or Paper. Define each goal in Kotlin and choose where to save players’ progress.",
    examples: [
      {
        kind: "code",
        language: "kotlin",
        code: ktadvancementsExample,
      },
      {
        kind: "image",
        src: "/images/ktadvancements-screen.png",
        width: 386,
        height: 74,
        alt: "A grass block leads to a stone advancement. Its tooltip shows three of ten steps complete.",
      },
    ],
  },
  {
    slug: "minecraft-server-gradle-plugin",
    name: "minecraft-server-gradle-plugin",
    github: "https://github.com/sya-ri/minecraft-server-gradle-plugin",
    description:
      "Test your plugin on a local Minecraft server with one Gradle task. This example copies the plugin JAR into place and starts Paper.",
    examples: [
      {
        kind: "code",
        language: "kotlin",
        code: minecraftServerGradlePluginExample,
      },
    ],
  },
  {
    slug: "kgit",
    name: "KGit",
    github: "https://github.com/sya-ri/KGit",
    description: "Use Git from Kotlin through JGit. Here’s how to clone KGit’s own repository.",
    examples: [
      {
        kind: "code",
        language: "kotlin",
        code: kgitExample,
      },
    ],
  },
  {
    slug: "fiktion",
    name: "Fiktion",
    website: "https://fiktion.s7a.dev/",
    github: "https://github.com/sya-ri/fiktion",
    description:
      "Generate test data from Kotlin types and set just the values your test cares about.",
    examples: [
      {
        kind: "code",
        language: "kotlin",
        code: fiktionExample,
      },
    ],
  },
  {
    slug: "fast-typed-xml",
    name: "fast-typed-xml",
    github: "https://github.com/sya-ri/fast-typed-xml",
    description: "Describe your XML once and get typed values when you parse it in TypeScript.",
    examples: [
      {
        kind: "code",
        language: "typescript",
        code: fastTypedXmlExample,
      },
    ],
  },
  {
    slug: "sqldelight-check",
    name: "sqldelight-check",
    website: "https://sqldelight-check.s7a.dev/",
    github: "https://github.com/sya-ri/sqldelight-check",
    description:
      "Keep SQLDelight queries consistent with formatting and lint checks that run in Gradle.",
    examples: [
      {
        kind: "code",
        language: "diff",
        code: sqldelightCheckExample,
      },
    ],
  },
  {
    slug: "hal-extension",
    name: "HAL_Extension",
    github: "https://github.com/sya-ri/HAL_Extension",
    description:
      "Control STM32 hardware from C++ using STM32Cube HAL. Here, two timer channels set the direction and speed of each motor.",
    examples: [
      {
        kind: "code",
        language: "cpp",
        code: halExtensionExample,
      },
    ],
  },
];
