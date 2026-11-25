import strataExample from "../examples/strata/PlayerRow.kt?raw";
import minecraftSkillsExample from "../examples/minecraft-skills/pack-format.console?raw";
import ktconfigExample from "../examples/ktconfig/ServerConfig.kt?raw";
import ktconfigOutput from "../examples/ktconfig/config.yml?raw";
import ktinventoryExample from "../examples/ktinventory/SimpleMenu.kt?raw";
import ktadvancementsExample from "../examples/ktadvancements/TestAdvancement.kt?raw";
import minecraftServerGradlePluginExample from "../examples/minecraft-server-gradle-plugin/build.gradle.kts?raw";
import kgitExample from "../examples/kgit/clone.kts?raw";
import halExtensionExample from "../examples/hal-extension/motor.cpp?raw";

export interface Work {
  name: string;
  slug: string;
  website?: string;
  github?: string;
  logo?: string;
}
export interface Project extends Work {
  summary: string;
  description: string;
  image: { src: string; alt: string; width: number; height: number };
}
export type Example =
  | { kind: "image"; src: string; alt: string; width: number; height: number }
  | {
      kind: "code";
      language: "kotlin" | "shell-json" | "cpp" | "yaml";
      code: string;
    };
export interface Library extends Work {
  description: string;
  layout?: "stacked";
  examples: Example[];
}

export const projects: Project[] = [
  {
    slug: "mineportal",
    name: "MinePortal",
    website: "https://mineportal.jp/servers",
    summary: "Looking for a Minecraft server to join?",
    description:
      "Browse survival worlds and minigame servers for Java or Bedrock. Each listing shows what you can play and how many people are online.",
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
    summary: "Which event fires when a player joins a server?",
    description:
      "Search for “join” to find the event your plugin needs. Check which servers and proxies support it, or switch versions to see when it was available.",
    image: {
      src: "/images/spigot-event-list.webp",
      alt: "A white faucet above the Spigot Event List wordmark.",
      width: 1100,
      height: 578,
    },
  },
  {
    slug: "minecraft-inventory",
    name: "Minecraft Inventory",
    website: "https://minecraft-inventory.s7a.dev/",
    github: "https://github.com/sya-ri/minecraft-inventory",
    summary: "Design a chest menu or share a crafting recipe without opening Minecraft.",
    description:
      "Pick a layout, drag the items into place, and save it as a PNG. Three iron ingots and two sticks make the pickaxe shown here.",
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
    summary: "Orvia gives you control over how your microphone sounds.",
    description:
      "Listen through headphones as you adjust the gain and filter out background noise. The mixer runs on Windows, macOS, and Linux.",
    image: {
      src: "/images/orvia.webp",
      alt: "Orvia’s mixer shows the mic signal before and after noise suppression.",
      width: 830,
      height: 640,
    },
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
    logo: "/images/strata-icon.webp",
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
    slug: "minecraft-skills",
    name: "minecraft-skills",
    github: "https://github.com/sya-ri/minecraft-skills",
    description:
      "Look up the pack format for a specific Minecraft release from your terminal. AI assistants can query the same versioned data over MCP.",
    examples: [
      {
        kind: "code",
        language: "shell-json",
        code: minecraftSkillsExample,
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
