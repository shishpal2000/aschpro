import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
  }

  // Example of fetching dynamic routes. Replace with your own logic to get dynamic paths.
  const dynamicPaths = await fetchDynamicPaths();

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
  ];

  const dynamicRoutes = dynamicPaths.map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...dynamicRoutes];
}

// Placeholder function to simulate fetching dynamic paths
async function fetchDynamicPaths(): Promise<string[]> {
  // Replace with your actual logic to fetch dynamic paths
  return [
    "services",
    "contract-staffing",
    "permanent-staffing",
    "about",
    "blogs",
    "careers",
    "contact_us",
    "privacy",
    "terms",
  ];
}
