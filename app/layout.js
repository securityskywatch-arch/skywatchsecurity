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
    default: "SkyWatch Security Ltd | Commercial Security",
    template: "%s | SkyWatch Security Ltd"
  },
  description:
    "Commercial security guarding, key holding, mobile patrols, and site protection across Luton, Bedfordshire, and London.",
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
    shortcut: "/favicon.ico"
  },
  openGraph: {
    title: "SkyWatch Security Ltd | Commercial Security Services",
    description:
      "Vigilance, Integrity, and Disciplined Site Protection. Static guarding, mobile patrols, and rapid alarm response.",
    url: "https://skywatchsecurity.co.uk",
    siteName: "SkyWatch Security Ltd",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyWatch Security Ltd | Commercial Security",
    description:
      "Commercial site security, mobile patrols, and key holding in Bedfordshire and London."
  }
};

function RootLayout({ children }) {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SecurityService"],
    name: "SkyWatch Security Ltd",
    url: "https://skywatchsecurity.co.uk",
    logo: "https://skywatchsecurity.co.uk/brand/logo.webp",
    email: siteContact.email,
    telephone: siteContact.phone.display,
    priceRange: "££",
    identifier: {
      "@type": "PropertyValue",
      name: "Companies House Registration",
      value: "16520149"
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "289 Park Street",
      addressLocality: "Luton",
      addressRegion: "Bedfordshire",
      postalCode: "LU1 3HH",
      addressCountry: "GB"
    },
    areaServed: [
      "Luton",
      "Dunstable",
      "Bedford",
      "Milton Keynes",
      "Watford",
      "St Albans",
      "Hemel Hempstead",
      "Stevenage",
      "Greater London"
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "00:00",
        closes: "23:59"
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-dvh min-w-0 flex-col font-sans antialiased overflow-x-clip`}
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
