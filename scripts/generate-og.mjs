import { createElement as h } from "react";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const fontSemiBold = readFileSync(
  join(root, "node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-600-normal.woff")
);
const fontBold = readFileSync(
  join(root, "node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-700-normal.woff")
);

const svg = await satori(
  h("div", {
    style: {
      width: 1200,
      height: 630,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "radial-gradient(ellipse at 18% 55%, rgba(79,126,255,0.14) 0%, transparent 55%), #0D0D0F",
      fontFamily: '"Plus Jakarta Sans"',
    },
  },
    h("div", {
      style: {
        width: 1040,
        padding: "60px 70px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 24,
        display: "flex",
        flexDirection: "column",
      },
    },
      // Badge row
      h("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 36,
        },
      },
        h("div", {
          style: {
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#4F7EFF",
          },
        }),
        h("span", {
          style: {
            fontSize: 13,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(79,126,255,0.75)",
            fontWeight: 600,
          },
        }, "r0tten0x.dev")
      ),

      // Headline
      h("div", {
        style: {
          fontSize: 58,
          fontWeight: 700,
          color: "#F0F0F5",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          marginBottom: 14,
        },
      }, "Independent Software Engineer"),

      // Sub-headline
      h("div", {
        style: {
          fontSize: 40,
          fontWeight: 600,
          color: "#4F7EFF",
          lineHeight: 1.15,
          letterSpacing: "-0.01em",
          marginBottom: 48,
        },
      }, "Building SaaS, Web & Mobile Products"),

      // Divider
      h("div", {
        style: {
          width: "100%",
          height: 1,
          background: "rgba(255,255,255,0.07)",
          marginBottom: 32,
        },
      }),

      // Footer row
      h("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
      },
        h("span", {
          style: {
            fontSize: 16,
            fontWeight: 600,
            color: "rgba(240,240,245,0.30)",
            letterSpacing: "0.02em",
          },
        }, "Full-stack · 27 years in IT · Ships solo"),
        h("span", {
          style: {
            fontSize: 16,
            fontWeight: 600,
            color: "rgba(79,126,255,0.50)",
            letterSpacing: "0.08em",
          },
        }, "→")
      )
    )
  ),
  {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Plus Jakarta Sans", data: fontSemiBold, weight: 600, style: "normal" },
      { name: "Plus Jakarta Sans", data: fontBold, weight: 700, style: "normal" },
    ],
  }
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
      background:
        "radial-gradient(ellipse at 40% 40%, rgba(79,126,255,0.22) 0%, transparent 65%), #0D0D0F",
      fontFamily: '"Plus Jakarta Sans"',
    },
  },
    h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
      },
    },
      h("span", {
        style: {
          fontSize: 72,
          fontWeight: 700,
          color: "#F0F0F5",
          letterSpacing: "-0.04em",
          lineHeight: 1,
        },
      }, "R0"),
      h("span", {
        style: {
          fontSize: 13,
          fontWeight: 600,
          color: "#4F7EFF",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginTop: 4,
        },
      }, "dev")
    )
  ),
  {
    width: 180,
    height: 180,
    fonts: [
      { name: "Plus Jakarta Sans", data: fontSemiBold, weight: 600, style: "normal" },
      { name: "Plus Jakarta Sans", data: fontBold, weight: 700, style: "normal" },
    ],
  }
);

const iconPng = new Resvg(iconSvg, { fitTo: { mode: "width", value: 180 } }).render().asPng();
writeFileSync(join(root, "public/apple-touch-icon.png"), iconPng);
console.log("✓ Apple touch icon generated → public/apple-touch-icon.png");
