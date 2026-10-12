import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0d1220",
        color: "#edf1f7",
        fontSize: 60,
        fontWeight: 600,
        letterSpacing: 2,
        fontFamily: "sans-serif",
      }}
    >
      SSA
    </div>,
    size,
  );
}
