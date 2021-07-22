export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60f92e20852d1d8e6a4e0d64",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-owq2vnaa",
                  apiId: "75a402fd-b529-460c-b870-7f72e6463186",
                },
                {
                  buildHookId: "60f92e21391383911b5d9caf",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-fywm4dvd",
                  apiId: "d28a4c3b-b4c8-483f-b6f3-de802fa7007f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/gnomes94/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-fywm4dvd.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
