import { Fragment, jsx } from "react/jsx-runtime";
import Link from "next/link";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

function splitBlogParagraph(text) {
  const nodes = [];
  let last = 0;
  let match = LINK_PATTERN.exec(text);
  while (match !== null) {
    if (match.index > last) {
      nodes.push({ kind: "text", value: text.slice(last, match.index) });
    }
    nodes.push({ kind: "link", label: match[1], href: match[2] });
    last = match.index + match[0].length;
    match = LINK_PATTERN.exec(text);
  }
  LINK_PATTERN.lastIndex = 0;
  if (last < text.length) {
    nodes.push({ kind: "text", value: text.slice(last) });
  }
  return nodes.length ? nodes : [{ kind: "text", value: text }];
}

function formatBlogDate(iso) {
  if (!iso) return "";
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  });
}

function BlogParagraph({ text }) {
  const parts = splitBlogParagraph(text);
  return (
    <p className="leading-relaxed text-base/85 dark:text-sage">
      {parts.map((part, i) => {
        if (part.kind === "text") {
          return <Fragment key={i}>{part.value}</Fragment>;
        }
        const external = part.href.startsWith("http");
        return (
          <Link
            key={i}
            href={part.href}
            className="font-medium text-primary-text underline underline-offset-4 hover:text-[#5c3d06] dark:text-accent"
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            {part.label}
          </Link>
        );
      })}
    </p>
  );
}

export { BlogParagraph, formatBlogDate, splitBlogParagraph };