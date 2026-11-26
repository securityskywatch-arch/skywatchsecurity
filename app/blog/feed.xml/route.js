import { blogPosts } from "@/lib/blog";
import { SITE_ORIGIN } from "@/lib/pageMetadata";

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822(dateString) {
  return new Date(`${dateString}T12:00:00Z`).toUTCString();
}

export function GET() {
  const channelTitle = "SkyWatch Security Ltd | Security Insights & Guidance";
  const channelDescription =
    "Operational guides on commercial guarding, logistics security, construction site protection, and procurement.";

  const items = blogPosts
    .map((post) => {
      const link = `${SITE_ORIGIN}/blog/${post.slug}`;
      return [
        "    <item>",
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${link}</link>`,
        `      <guid isPermaLink="true">${link}</guid>`,
        `      <pubDate>${toRfc822(post.date)}</pubDate>`,
        `      <description>${escapeXml(post.excerpt)}</description>`,
        "    </item>"
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(channelTitle)}</title>
    <link>${SITE_ORIGIN}/blog</link>
    <description>${escapeXml(channelDescription)}</description>
    <language>en-gb</language>
    <lastBuildDate>${toRfc822(blogPosts[0]?.date ?? "2026-01-01")}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}