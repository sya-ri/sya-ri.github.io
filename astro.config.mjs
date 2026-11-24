import { defineConfig } from "astro/config";
import icon from "./api/icon.js";

export default defineConfig({
  site: "https://s7a.dev",
  output: "static",
  devToolbar: { enabled: false },
  integrations: [
    {
      name: "local-icon-endpoint",
      hooks: {
        "astro:server:setup": ({ server }) => {
          server.middlewares.use((request, response, next) => {
            if (request.url?.startsWith("/icon-")) {
              icon(request, response).catch(next);
            } else {
              next();
            }
          });
        },
      },
    },
  ],
});
