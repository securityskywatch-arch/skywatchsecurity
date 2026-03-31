import { jsx } from "react/jsx-runtime";
import { FaWhatsapp } from "react-icons/fa";
import { siteContact } from "@/lib/siteContact";

function WhatsAppButton() {
  const phone = siteContact.phone.tel.replace(/[^\d]/g, "");
  const href = `https://wa.me/${phone}?text=${encodeURIComponent("Hi SkyWatch Security, I would like to discuss your services.")}`;
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat with SkyWatch Security on WhatsApp",
      className: "fixed bottom-8 right-5 z-[95] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-secondary dark:focus-visible:ring-offset-base sm:bottom-8 sm:right-6",
      children: /* @__PURE__ */ jsx(FaWhatsapp, { className: "h-7 w-7", "aria-hidden": true })
    }
  );
}

export {
  WhatsAppButton
};
