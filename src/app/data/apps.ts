export type AppStatus = "active" | "stable" | "archived";

export type App = {
  name: string;
  status: AppStatus;
  kind: string;
  description: string;
  stack: string[];
  repo: string | null;
};

export const apps: App[] = [
  {
    name: "Orias",
    status: "active",
    kind: "tui",
    description:
      "Dev-first live dashboard for the terminal. Shows system stats, git repo status, services, ports, and directory sizes, all configured in one TOML file.",
    stack: ["ratatui", "sysinfo", "gix", "tokio"],
    repo: null,
  },
  {
    name: "Asag",
    status: "active",
    kind: "daemon",
    description:
      "Detects a wired connection on macOS and switches for you: ethernet in turns Wi-Fi off, ethernet out turns it back on. Posts a notification either way and runs as a launchd agent.",
    stack: ["launchd", "networksetup", "macOS"],
    repo: "https://github.com/R0tten0x/Asag",
  },
  {
    name: "Alloc",
    status: "stable",
    kind: "menubar",
    description:
      "Menu bar memory-pressure monitor. The chip icon turns green, yellow, or red as macOS memory pressure changes.",
    stack: ["tray-icon", "winit", "sysctl"],
    repo: "https://github.com/R0tten0x/Alloc",
  },
  {
    name: "KeepMeUp",
    status: "stable",
    kind: "menubar",
    description:
      "Coffee-cup menu bar toggle that keeps your Mac awake with one click.",
    stack: ["tray-icon", "tao", "objc2"],
    repo: "https://github.com/R0tten0x/KeepMeUp",
  },
  {
    name: "Asmodeus",
    status: "stable",
    kind: "daemon",
    description:
      "Background file mover. Watches Downloads and Desktop, sorts documents by extension, and files images by metadata trigger words and dimensions.",
    stack: ["notify", "png", "tray-icon"],
    repo: null,
  },
  {
    name: "Styx",
    status: "stable",
    kind: "daemon",
    description:
      "Size-triggered archiver. When a watched folder passes its threshold, Styx zips the older files, holds the archive until the backup drive is connected, and notifies you at each step.",
    stack: ["notify", "zip", "walkdir"],
    repo: null,
  },
  {
    name: "RotGrab",
    status: "archived",
    kind: "cli",
    description:
      "The first terminal stats viewer, covering disks, network, SSH, Time Machine, and shell aliases. It was the prototype for Orias.",
    stack: ["ratatui", "comfy-table", "sysinfo"],
    repo: null,
  },
];

export const earlierWork = [
  {
    name: "Ember",
    description: "Terminal developer dashboard for power users.",
    link: null,
  },
  {
    name: "Rust from Zero",
    description:
      "A constructivist Rust course for people who need the why before the what.",
    link: "https://github.com/R0tten0x/Rust-Course",
  },
];
