import type { NextConfig } from "next";

// Old live-site URLs → new URLs (301), so existing links and indexed pages
// keep working after migration. Services that are not part of the current
// offer point to the services hub rather than a page that no longer exists.
const legacyRedirects: Array<[string, string]> = [
  ["/packages", "/pricing"],
  ["/reviews", "/about"],
  ["/planner", "/contact"],
  ["/careers", "/contact"],
  ["/services/home-shifting", "/services/home-shifting-relocation"],
  ["/services/packing-unpacking", "/services/home-shifting-relocation"],
  ["/services/home-cleaning", "/services/cleaning-home-maintenance"],
  ["/services/home-organization", "/services/home-organisation"],
  ["/services/electrical", "/services/repair-maintenance"],
  ["/services/plumbing", "/services/repair-maintenance"],
  ["/services/carpentry", "/services/repair-maintenance"],
  ["/services/car-vehicle-care", "/services/doorstep-car-washing"],
  ["/services/plants-garden-care", "/services/gardening-plant-care"],
  ["/services/garden-landscape", "/services/gardening-plant-care"],
  ["/services/patient-assistance", "/services/patient-hospital-assistance"],
  ["/services/interior-decoration", "/services"],
  ["/services/interior-design", "/services"],
  ["/services/painting-home-makeover", "/services"],
  ["/services/construction-property", "/services"],
  ["/services/event-management", "/services"],
  ["/services/custom-home-services", "/services"],
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 80],
  },
  turbopack: {
    // Pin the root: a stray lockfile in a parent directory would otherwise be picked up.
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
