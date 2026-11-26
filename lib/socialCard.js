import { ImageResponse } from "next/og";

export const alt =
  "SkyWatch Security Ltd. Commercial security across Luton, Bedfordshire and London.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function SocialCard() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1A1A1A",
          padding: "72px 80px"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: "140px",
              height: "8px",
              backgroundColor: "#C48100"
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: "40px",
              fontSize: 68,
              fontWeight: 700,
              color: "#F9F1D1",
              lineHeight: 1.05
            }}
          >
            SkyWatch Security Ltd
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "28px",
              maxWidth: "940px",
              fontSize: 34,
              lineHeight: 1.35,
              color: "#FFCC00"
            }}
          >
            Commercial security across Luton, Bedfordshire and London
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#BDB28E",
            fontSize: 24
          }}
        >
          skywatchsecurity.co.uk
        </div>
      </div>
    ),
    { ...size }
  );
}
