const SITE_ORIGIN = "https://skywatchsecurity.co.uk";

function withCanonical(metadata = {}, path = "/") {
  const canonicalPath = path === "/" ? "/" : `/${String(path).replace(/^\/+|\/+$/g, "")}`;
  const url = canonicalPath === "/" ? SITE_ORIGIN : `${SITE_ORIGIN}${canonicalPath}`;

  return {
    ...metadata,
    alternates: {
      ...(metadata.alternates || {}),
      canonical: url
    },
    openGraph: {
      ...(metadata.openGraph || {}),
      url,
      images: metadata.openGraph?.images ?? [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "SkyWatch Security Ltd. Commercial security across Luton, Bedfordshire and London."
        }
      ]
    }
  };
}

export { SITE_ORIGIN, withCanonical };
