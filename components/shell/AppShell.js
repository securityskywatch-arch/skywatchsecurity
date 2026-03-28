import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { SiteLoader } from "@/components/brand/SiteLoader";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { getBrandLogoSrc } from "@/lib/brand";
function AppShell({ children }) {
  const logoSrc = getBrandLogoSrc();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SiteLoader, { logoSrc }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("div", { className: "flex min-h-[calc(100dvh-4.75rem)] min-w-0 flex-col overflow-x-clip lg:min-h-[calc(100dvh-5.5rem)]", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  AppShell
};
