import { jsx } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { getBrandLogoSrc } from "@/lib/brand";
function BrandLogo({
  className = "",
  priority = false,
  href = "/",
  variant = "default"
}) {
  const src = getBrandLogoSrc();
  const sizeClass = variant === "footer" ? "h-[4.5rem] w-auto max-w-[min(100%,320px)] object-contain object-left sm:h-20 sm:max-w-[380px] lg:h-24 lg:max-w-[440px]" : "h-9 w-auto max-w-[160px] object-contain object-left sm:h-10 sm:max-w-[180px]";
  const img = /* @__PURE__ */ jsx(
    Image,
    {
      src,
      alt: "SkyWatch Security",
      width: variant === "footer" ? 560 : 200,
      height: variant === "footer" ? 160 : 56,
      className: `${sizeClass} ${className}`.trim(),
      priority,
      sizes: variant === "footer" ? "(max-width: 640px) 320px, (max-width: 1024px) 380px, 440px" : "(max-width: 640px) 160px, 180px"
    }
  );
  if (href) {
    return /* @__PURE__ */ jsx(Link, { href, className: "inline-flex shrink-0 items-center", children: img });
  }
  return /* @__PURE__ */ jsx("span", { className: "inline-flex shrink-0 items-center", children: img });
}
export {
  BrandLogo
};
