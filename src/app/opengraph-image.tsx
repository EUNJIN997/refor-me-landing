import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Re:ForMe — 마음을 꺼내는 순간, 나를 다시 만나요";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const font = await readFile(join(process.cwd(), "src/fonts/noto-sans-kr-bold.ttf"));

  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", background: "#f8f9fe", color: "#32325d", padding: 72, fontFamily: "Noto Sans KR" }}>
      <div style={{ display: "flex", flexDirection: "column", width: 760, justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30, color: "#5e72e4" }}>
          <div style={{ display: "flex", width: 38, height: 38, borderRadius: 12, background: "#5e72e4" }} />
          Re:ForMe
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 50, fontSize: 67, lineHeight: 1.32, letterSpacing: -3 }}>
          <span>마음을 꺼내는 순간,</span>
          <span style={{ color: "#5e72e4" }}>나를 다시 만나요.</span>
        </div>
        <div style={{ marginTop: 38, fontSize: 25, color: "#647086" }}>나를 위한 감각의 전환</div>
      </div>
      <div style={{ display: "flex", width: 290, height: 430, alignItems: "center", justifyContent: "center", borderRadius: 48, background: "#e8ebff", transform: "rotate(8deg)" }}>
        <div style={{ display: "flex", width: 230, height: 360, alignItems: "center", justifyContent: "center", borderRadius: 36, background: "white", boxShadow: "0 20px 50px #32325d22" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, fontSize: 23 }}>
            <div style={{ display: "flex", width: 86, height: 86, borderRadius: 28, background: "#5e72e4" }} />
            내 마음을 위한 자리
          </div>
        </div>
      </div>
    </div>,
    { ...size, fonts: [{ name: "Noto Sans KR", data: font, weight: 700, style: "normal" }] },
  );
}
