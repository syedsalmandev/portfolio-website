import { ImageResponse } from "next/og";

import { site } from "@/data/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#07090f",
        color: "#edf1f7",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: "#edf1f7",
            color: "#07090f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          SSA
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, fontWeight: 600 }}>{site.name}</div>
          <div style={{ fontSize: 18, color: "#8b95a8" }}>{site.role}</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            letterSpacing: -3,
            lineHeight: 1.02,
            maxWidth: 1000,
          }}
        >
          I build scalable websites, ecommerce platforms and custom digital
          experiences.
        </div>
        <div
          style={{
            display: "flex",
            gap: 14,
            fontSize: 18,
            color: "#8b95a8",
          }}
        >
          <span>Shopify</span>
          <span>·</span>
          <span>WordPress / WooCommerce</span>
          <span>·</span>
          <span>React / Next.js / TypeScript</span>
          <span>·</span>
          <span>Karachi, Pakistan</span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 420,
          height: 630,
          background:
            "radial-gradient(closest-side at 70% 30%, rgba(143,216,255,0.16), transparent)",
        }}
      />
    </div>,
    size,
  );
}
