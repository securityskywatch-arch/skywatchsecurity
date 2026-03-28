import { jsx } from "react/jsx-runtime";
import { Star } from "lucide-react";
function StarRating({
  value = 5,
  className = ""
}) {
  const n = Math.min(5, Math.max(0, Math.round(value)));
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `flex gap-0.5 ${className}`,
      role: "img",
      "aria-label": `${n} out of 5 stars`,
      children: Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ jsx(
        Star,
        {
          className: i < n ? "h-4 w-4 fill-accent text-accent sm:h-[1.125rem] sm:w-[1.125rem]" : "h-4 w-4 text-sage/30 dark:text-sage/25 sm:h-[1.125rem] sm:w-[1.125rem]",
          strokeWidth: i < n ? 0 : 1.35,
          "aria-hidden": true
        },
        i
      ))
    }
  );
}
export {
  StarRating
};
