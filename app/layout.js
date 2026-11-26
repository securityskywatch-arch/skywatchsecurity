import { jsx, jsxs } from "react/jsx-runtime";
import localFont from "next/font/local";
import { AppShell } from "@/components/shell/AppShell";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { rootGraph } from "@/lib/schema";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
  adjustFontFallback: true
});

const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

const metadata = {
  metadataBase: new URL("https://skywatchsecurity.co.uk"),
  title: {
    absolute: "SkyWatch Security Ltd | Commercial Security",
    template: "%s | SkyWatch Security Ltd"
  },
  description:
    "Commercial security guarding, key holding, mobile patrols, and site protection across Luton, Bedfordshire, Hertfordshire, and Greater London.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico"
  },
  openGraph: {
    title: "SkyWatch Security Ltd | Commercial Security",
    description:
      "Vigilance, integrity, and disciplined site protection. Static guarding, mobile patrols, and rapid alarm response.",
    url: "https://skywatchsecurity.co.uk",
    siteName: "SkyWatch Security Ltd",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyWatch Security Ltd | Commercial Security",
    description:
      "Commercial site security, mobile patrols, and key holding in Luton, Bedfordshire, and London."
  }
};

function RootLayout({ children }) {
  const organizationLd = rootGraph();

  return (
    <html lang="en-GB" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} flex min-h-dvh min-w-0 flex-col font-sans antialiased overflow-x-clip`}
      >
        <ThemeContextProvider>
          <AppShell>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            {children}
          </AppShell>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

export { RootLayout as default, metadata, viewport };