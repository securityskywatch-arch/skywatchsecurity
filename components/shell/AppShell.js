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
    /* @__PURE__ */ jsx("div", { className: "flex min-h-[calc(100dvh-var(--header-h))] min-w-0 flex-col overflow-x-hidden pt-[var(--header-h)]", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  AppShell
};
