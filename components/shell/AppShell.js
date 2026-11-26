import { MotionConfig } from "framer-motion";
import { SiteLoader } from "@/components/brand/SiteLoader";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { getBrandLogoSrc } from "@/lib/brand";

function AppShell({ children }) {
  const logoSrc = getBrandLogoSrc();
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:inline-flex focus:min-h-[44px] focus:items-center focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#141414] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary dark:focus:ring-offset-base"
      >
        Skip to main content
      </a>
      <SiteLoader logoSrc={logoSrc} />
      <Navbar />
      <div className="flex min-w-0 flex-1 flex-col overflow-x-clip">
        {children}
      </div>
      <WhatsAppButton />
      <Footer />
    </MotionConfig>
  );
}

export { AppShell };
