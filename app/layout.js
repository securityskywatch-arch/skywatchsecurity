import { jsx } from "react/jsx-runtime";
import localFont from "next/font/local";
import { AppShell } from "@/components/shell/AppShell";
import { ThemeContextProvider } from "@/context/ThemeContext";
import "./globals.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});
const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};
const metadata = {
  title: {
    default: "SkyWatch Security | Professional Security Services",
    template: "%s | SkyWatch Security"
  },
  description: "SIA-aligned security guarding, CCTV monitoring, mobile patrols, key holding, and tailored protection for corporate, retail, and industrial clients across the UK.",
  icons: {
    icon: [{ url: "/brand/logo.webp", type: "image/webp" }],
    apple: [{ url: "/brand/logo.webp", type: "image/webp", sizes: "180x180" }],
    shortcut: "/brand/logo.webp",
  },
};
function RootLayout({
  children
}) {
  return /* @__PURE__ */ jsx("html", { lang: "en", suppressHydrationWarning: true, children: /* @__PURE__ */ jsx(
    "body",
    {
      className: `${geistSans.variable} ${geistMono.variable} min-h-screen min-w-0 font-sans antialiased overflow-x-hidden`,
      children: /* @__PURE__ */ jsx(ThemeContextProvider, { children: /* @__PURE__ */ jsx(AppShell, { children }) })
    }
  ) });
}
export {
  RootLayout as default,
  metadata,
  viewport
};
