const withDefaults = require("./utils/default-theme-options");

module.exports = (options) => {
  const { contentPath, useExternalMDX } = withDefaults(options);

  return {
    plugins: [
      `gatsby-transformer-json`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `gatsby-theme-mdxspace-core`,
          path: contentPath,
        },
      },
    ],
  };
};
