import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://justin-napolitano.github.io",
  base: "/calisthenics-research",
  integrations: [
    starlight({
      title: "Living Health Journal",
      description:
        "A research journal for cardio, calisthenics, mobility, evidence, and movement systems.",
      customCss: ["./src/styles/starlight.css"],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      sidebar: [
        {
          label: "Start Here",
          items: ["index", "routine", "logbook", "evidence"],
        },
        {
          label: "Active Projects",
          items: [
            "projects",
            "projects/cardio-heart-health",
            "projects/calisthenics-stability-bone-health",
            "projects/morning-floor",
            "projects/hot-yoga-integration",
          ],
        },
        {
          label: "Research",
          items: [
            "research",
            "research/calisthenics",
            "research/cardio",
            "research/research-maps",
          ],
        },
      ],
    }),
  ],
});
