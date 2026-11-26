const BASE_URL = "https://skywatchsecurity.co.uk";

const TRAINING_BOTS = [
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "Applebot-Extended"
];

const SEARCH_AND_CITATION_BOTS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Claude-User"
];

function robots() {
  return {
    rules: [
      ...TRAINING_BOTS.map((userAgent) => ({
        userAgent,
        disallow: "/"
      })),
      ...SEARCH_AND_CITATION_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: "/api/"
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/"
      }
    ],
    sitemap: `${BASE_URL}/sitemap.xml`
  };
}

export { robots as default };