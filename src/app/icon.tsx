import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
        borderRadius: 16,
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: 1,
        fontFamily: "sans-serif",
      }}
    >
      SSA
    </div>,
    size,
  );
}
