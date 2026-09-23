import { createElement as h } from "react";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const fontRegular = readFileSync(
  join(root, "node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff")
);
const fontBold = readFileSync(
  join(root, "node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-700-normal.woff")
);

const fonts = [
  { name: "JetBrains Mono", data: fontRegular, weight: 400, style: "normal" },
  { name: "JetBrains Mono", data: fontBold, weight: 700, style: "normal" },
];

const BG = "#0B0B0C";
const SURFACE = "#121214";
const BORDER = "#26262A";
const FG = "#E6E3DC";
const MUTED = "#8A877F";
const ACCENT = "#F74C00";

const appNames = ["orias", "asag", "alloc", "keepmeup", "asmodeus", "styx", "rotgrab"];

const svg = await satori(
  h("div", {
    style: {
      width: 1200,
      height: 630,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: BG,
      fontFamily: '"JetBrains Mono"',
    },
  },
    // Pane
    h("div", {
      style: {
        width: 1080,
        height: 510,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        background: SURFACE,
        border: `2px solid ${BORDER}`,
        borderRadius: 6,
        padding: "64px 64px 48px",
      },
    },
      // Pane title sitting on the top border
      h("div", {
        style: {
          position: "absolute",
          top: -14,
          left: 36,
          padding: "0 12px",
          background: SURFACE,
          fontSize: 20,
          color: MUTED,
          display: "flex",
        },
      }, "zsh — r0tten0x.dev"),

      h("div", { style: { display: "flex", fontSize: 24, color: MUTED, marginBottom: 28 } },
        h("span", { style: { color: ACCENT, marginRight: 14 } }, "$"),
        "whoami"
      ),

      h("div", {
        style: { fontSize: 60, fontWeight: 700, color: FG, lineHeight: 1.1, letterSpacing: "-0.02em" },
      }, "Rust tools for the machine"),
      h("div", {
        style: { fontSize: 60, fontWeight: 700, color: ACCENT, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 44 },
      }, "you actually use."),

      h("div", { style: { display: "flex", fontSize: 22, color: MUTED, marginBottom: 12 } },
        h("span", { style: { color: ACCENT, marginRight: 14 } }, ">"),
        "ls --apps"
      ),
      h("div", { style: { display: "flex", flexWrap: "wrap", fontSize: 22, color: FG } },
        ...appNames.map((name) => h("span", { key: name, style: { marginRight: 30 } }, name))
      ),

      // Footer
      h("div", {
        style: {
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 18,
          color: MUTED,
        },
      },
        h("span", null, "systems & rust developer · macOS · 27 years in IT"),
        h("span", { style: { color: ACCENT } }, "r0tten0x.dev")
      )
    )
  ),
  { width: 1200, height: 630, fonts }
);

const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } });
const png = resvg.render().asPng();
writeFileSync(join(root, "public/og-image.png"), png);
console.log("✓ OG image generated → public/og-image.png");

// --- Apple touch icon (180×180) ---
const iconSvg = await satori(
  h("div", {
    style: {
      width: 180,
      height: 180,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: BG,
      fontFamily: '"JetBrains Mono"',
    },
  },
    h("div", { style: { display: "flex", alignItems: "baseline" } },
      h("span", { style: { fontSize: 64, fontWeight: 700, color: ACCENT, marginRight: 6 } }, ">"),
      h("span", { style: { fontSize: 64, fontWeight: 700, color: FG, letterSpacing: "-0.04em" } }, "R0")
    )
  ),
  { width: 180, height: 180, fonts }
);

const iconPng = new Resvg(iconSvg, { fitTo: { mode: "width", value: 180 } }).render().asPng();
writeFileSync(join(root, "public/apple-touch-icon.png"), iconPng);
console.log("✓ Apple touch icon generated → public/apple-touch-icon.png");
