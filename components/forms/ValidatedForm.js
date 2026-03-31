"use client";

import { jsx } from "react/jsx-runtime";
import { useState } from "react";

function ValidatedForm({ className = "", children, ...props }) {
  const [showErrors, setShowErrors] = useState(false);

  return /* @__PURE__ */ jsx("form", {
    ...props,
    noValidate: true,
    className: `${className} ${showErrors ? "form-validated" : ""}`.trim(),
    onSubmit: (event) => {
      const form = event.currentTarget;
      if (!form.checkValidity()) {
        event.preventDefault();
        setShowErrors(true);
        return;
      }
      setShowErrors(false);
      props.onSubmit?.(event);
    },
    onInput: (event) => {
      if (showErrors) {
        setShowErrors(true);
      }
      props.onInput?.(event);
    },
    children
  });
}

export {
  ValidatedForm
};
