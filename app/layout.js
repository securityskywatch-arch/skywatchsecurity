import { jsx, jsxs } from "react/jsx-runtime";
import localFont from "next/font/local";
import { AppShell } from "@/components/shell/AppShell";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { siteContact } from "@/lib/siteContact";
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
  metadataBase: new URL("https://skywatchsecurity.co.uk"),
  title: {
    default: "SkyWatch Security Ltd | SIA Security Services in the UK",
    template: "%s | SkyWatch Security"
  },
  description: "SkyWatch Security Ltd provides SIA-aligned security guarding, CCTV monitoring, mobile patrols, key holding, K9 dog handling, and tailored protection for businesses across the UK.",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "SkyWatch Security Ltd | SIA Security Services in the UK",
    description: "Professional security services including guarding, mobile patrols, CCTV monitoring, key holding, and K9 support.",
    url: "https://skywatchsecurity.co.uk",
    siteName: "SkyWatch Security",
    locale: "en_GB",
    type: "website"
  }
};
function RootLayout({
  children
}) {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SkyWatch Security Ltd",
    url: "https://skywatchsecurity.co.uk",
    logo: "https://skywatchsecurity.co.uk/brand/logo.webp",
    email: siteContact.email,
    telephone: siteContact.phone.display,
    address: {
      "@type": "PostalAddress",
      streetAddress: "289 Park Street",
      addressLocality: "Luton",
      postalCode: "LU1 3HH",
      addressCountry: "GB"
    },
    areaServed: "United Kingdom"
  };
  return /* @__PURE__ */ jsx("html", { lang: "en", suppressHydrationWarning: true, children: /* @__PURE__ */ jsx(
    "body",
    {
      className: `${geistSans.variable} ${geistMono.variable} min-h-screen min-w-0 font-sans antialiased overflow-x-hidden`,
      children: /* @__PURE__ */ jsx(ThemeContextProvider, { children: /* @__PURE__ */ jsxs(AppShell, { children: [
        /* @__PURE__ */ jsx(
          "script",
          {
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: JSON.stringify(organizationLd) }
          }
        ),
        children
      ] }) })
    }
  ) });
}
export {
  RootLayout as default,
  metadata,
  viewport
};
