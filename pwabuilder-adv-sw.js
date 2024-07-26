import { precacheAndRoute } from "workbox-precaching/precacheAndRoute";
precacheAndRoute([
  { revision: "60b0d208d4536361f659f78fee5ff6ff", url: "app/globals.css" },
  { revision: "4d0b201a9f65432e3981063eb9d61d88", url: "next.config.js" },
  { revision: "854b38759e7a8b4b82306ae2d9a3a833", url: "postcss.config.js" },
  { revision: "7d82bc8ae15de19ebfeda42d66d6203b", url: "tailwind.config.js" },
]);
