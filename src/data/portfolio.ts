import strataExample from "../examples/strata/playerRow.kt?raw";
import minecraftSkillsExample from "../examples/minecraft-skills/pack-format.sh?raw";
import minecraftSkillsOutput from "../examples/minecraft-skills/output.json?raw";
import ktconfigExample from "../examples/ktconfig/ServerConfig.kt?raw";
import ktconfigOutput from "../examples/ktconfig/config.yml?raw";
import ktinventoryExample from "../examples/ktinventory/SimpleMenu.kt?raw";
import ktadvancementsExample from "../examples/ktadvancements/TestAdvancement.kt?raw";
import minecraftServerGradlePluginExample from "../examples/minecraft-server-gradle-plugin/build.gradle.kts?raw";
import kgitExample from "../examples/kgit/clone.kt?raw";
import kgitOutput from "../examples/kgit/clone.sh?raw";
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
  | { kind: "image"; src: string; alt: string }
  | {
      kind: "code";
      label: string;
      language: "kotlin" | "bash" | "cpp" | "json" | "yaml";
      code: string;
      source?: string;
      scroll?: boolean;
    };
export interface Library extends Work {
  description: string;
  examples: Example[];
}

export const projects: Project[] = [
  {
    slug: "mineportal",
    name: "MinePortal",
    website: "https://mineportal.jp/servers",
    summary: "A server list for anyone who plays Minecraft.",
    description:
      "Browse by game mode and see how many players are online. Open a server’s listing to decide where to play next.",
    image: {
      src: "/images/mineportal.webp",
      alt: "Purple MinePortal wordmark and cube on a pale background.",
      width: 1100,
      height: 578,
    },
  },
  {
    slug: "spigot-event-list",
    name: "Spigot Event List",
    website: "https://spigot-event-list.s7a.dev/en",
    github: "https://github.com/sya-ri/spigot-event-list",
    summary:
      "A searchable guide to Minecraft plugin events for Bukkit, Spigot, Paper, Purpur, BungeeCord, and Velocity.",
    description:
      "Search for “join” to see which event fires when a player connects and which platforms support it.",
    image: {
      src: "/images/spigot-event-list.webp",
      alt: "A white tap above the name Spigot Event List on a dark background.",
      width: 1100,
      height: 578,
    },
  },
  {
    slug: "minecraft-inventory",
    name: "Minecraft Inventory",
    website: "https://minecraft-inventory.s7a.dev/",
    github: "https://github.com/sya-ri/minecraft-inventory",
    summary: "A browser editor for Minecraft inventories.",
    description:
      "Choose a chest or a crafting table, click a slot to add an item, and drag items into place. Download the finished layout as an image.",
    image: {
      src: "/images/minecraft-inventory.png",
      alt: "Iron pickaxe recipe with three iron ingots across the top and two sticks down the middle.",
      width: 512,
      height: 264,
    },
  },
  {
    slug: "orvia",
    name: "Orvia",
    website: "https://orvia.s7a.dev/#listen",
    github: "https://github.com/orvia-audio/orvia",
    summary: "A real-time microphone mixer for Windows, macOS, and Linux.",
    description:
      "Turn down keyboard noise, adjust your mic volume, and choose which apps receive the mix.",
    image: {
      src: "/images/orvia.webp",
      alt: "Orvia’s orange rings and wordmark above the words ‘Real-time microphone mixer’.",
      width: 1100,
      height: 578,
    },
  },
];

export const libraries: Library[] = [
  {
    slug: "strata",
    name: "Strata",
    website: "https://gh.s7a.dev/strata/demos/",
    github: "https://github.com/sya-ri/strata",
    description:
      "Declarative Minecraft UI with reusable component trees, version-independent layout and state, and headless testing without launching Minecraft.",
    logo: "/images/strata-icon.webp",
    examples: [
      {
        kind: "code",
        label: "playerRow",
        language: "kotlin",
        code: strataExample,
        source:
          "https://github.com/sya-ri/strata/blob/5788595ce021441595abc5fcb8beff21e6d83fd9/integration/docs/src/readmeExamples/kotlin/dev/s7a/strata/integration/docs/example/ScrollPlayersExample.kt#L95-L114",
      },
      {
        kind: "image",
        src: "/images/strata-screen.webp",
        alt: "Player rows with a head, name, role, and Invite button.",
      },
    ],
  },
  {
    slug: "minecraft-skills",
    name: "minecraft-skills",
    github: "https://github.com/sya-ri/minecraft-skills",
    description:
      "Versioned AI skills, canonical data, CLI, and MCP tooling for Minecraft authors and their AI agents.",
    examples: [
      {
        kind: "code",
        label: "Terminal",
        language: "bash",
        code: minecraftSkillsExample,
        source: "https://github.com/sya-ri/minecraft-skills/blob/main/packages/cli/README.md",
      },
      {
        kind: "code",
        label: "Output",
        language: "json",
        code: minecraftSkillsOutput,
      },
    ],
  },
  {
    slug: "ktconfig",
    name: "ktConfig",
    github: "https://github.com/sya-ri/ktConfig",
    description: "Bukkit and Fabric YAML configuration library for Kotlin using class annotations.",
    examples: [
      {
        kind: "code",
        label: "ServerConfig.kt",
        language: "kotlin",
        code: ktconfigExample,
        source:
          "https://github.com/sya-ri/ktConfig/blob/c5aa8661a20da4751463ee29033d6e34660b3664/docs/usage.md#default-values",
      },
      {
        kind: "code",
        label: "config.yml",
        language: "yaml",
        code: ktconfigOutput,
      },
    ],
  },
  {
    slug: "ktinventory",
    name: "ktInventory",
    website: "https://gh.s7a.dev/ktInventory",
    github: "https://github.com/sya-ri/ktInventory",
    description: "Spigot library with Kotlin for easy inventory creation and event handling",
    examples: [
      {
        kind: "code",
        label: "SimpleMenu.kt",
        language: "kotlin",
        code: ktinventoryExample,
        source:
          "https://github.com/sya-ri/ktInventory/blob/9aef084fe2cb1af00123cdee690a3945d143631e/example/src/main/kotlin/dev/s7a/ktinventory/example/menu/SimpleMenu.kt#L10-L34",
        scroll: true,
      },
      {
        kind: "image",
        src: "/images/ktinventory-screen.webp",
        alt: "The teleport menu with a red bed in slot four and a compass in slot six.",
      },
    ],
  },
  {
    slug: "ktadvancements",
    name: "ktAdvancements",
    github: "https://github.com/sya-ri/ktAdvancements",
    description:
      "A lightweight, packet-based Minecraft advancements library for Spigot/Paper plugins with customizable runtime and data storage.",
    examples: [
      {
        kind: "code",
        label: "TestAdvancement.kt",
        language: "kotlin",
        code: ktadvancementsExample,
        source:
          "https://github.com/sya-ri/ktAdvancements/blob/master/game-test/src/main/kotlin/dev/s7a/ktAdvancements/gametest/TestAdvancement.kt",
        scroll: true,
      },
      {
        kind: "image",
        src: "/images/ktadvancements-screen.webp",
        alt: "In-game advancement screen showing Progress at 3/10, linked to the root grass block.",
      },
    ],
  },
  {
    slug: "minecraft-server-gradle-plugin",
    name: "minecraft-server-gradle-plugin",
    github: "https://github.com/sya-ri/minecraft-server-gradle-plugin",
    description: "Launch Minecraft servers using Gradle task. For Bukkit, Spigot, Paper, etc..",
    examples: [
      {
        kind: "code",
        label: "build.gradle.kts",
        language: "kotlin",
        code: minecraftServerGradlePluginExample,
        source:
          "https://github.com/sya-ri/minecraft-server-gradle-plugin/blob/daee0cc2b88f1570fc2dae6a864548e0ef129332/README.md#for-testing-a-plugin",
      },
    ],
  },
  {
    slug: "kgit",
    name: "KGit",
    github: "https://github.com/sya-ri/KGit",
    description: "Kotlin Wrapper Library of JGit",
    examples: [
      {
        kind: "code",
        label: "Kotlin",
        language: "kotlin",
        code: kgitExample,
        source: "https://github.com/sya-ri/KGit/blob/master/README.md#clone-repository",
      },
      {
        kind: "code",
        label: "Terminal",
        language: "bash",
        code: kgitOutput,
      },
    ],
  },
  {
    slug: "hal-extension",
    name: "HAL_Extension",
    github: "https://github.com/sya-ri/HAL_Extension",
    description: "STM32Cube HAL C++ Library",
    examples: [
      {
        kind: "code",
        label: "C++",
        language: "cpp",
        code: halExtensionExample,
        source:
          "https://github.com/sya-ri/HAL_Extension/blob/c6603bd52dd668674f6551aedefa238909b6258c/tim/class/Motor.md",
      },
    ],
  },
];
