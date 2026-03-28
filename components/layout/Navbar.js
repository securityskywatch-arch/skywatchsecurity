import { jsx } from "react/jsx-runtime";
import { getBrandLogoSrc } from "@/lib/brand";
import { NavbarInner } from "@/components/layout/NavbarInner";
function Navbar() {
  const logoSrc = getBrandLogoSrc();
  return /* @__PURE__ */ jsx(NavbarInner, { logoSrc });
}
export {
  Navbar
};
