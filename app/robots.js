function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://skywatchsecurity.co.uk/sitemap.xml"
  };
}

export {
  robots as default
};
