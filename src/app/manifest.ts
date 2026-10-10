import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SetoraHome",
    short_name: "SetoraHome",
    description: "Doorstep home services in Varanasi",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f0f0f",
    icons: [
      { src: "/brand/emblem-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/emblem-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
