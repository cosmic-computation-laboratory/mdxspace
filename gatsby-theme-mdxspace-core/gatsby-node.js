const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");
const withDefaults = require("./utils/default-theme-options");

exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState();
  const { contentPath } = withDefaults(options);
  const dir = path.join(program.directory, contentPath);
  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir);
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = /* graphql */ `
    type Profile implements Node @dontInfer {
      id: ID!
      slug: String!
      lastUpdate: Date! @dateformat
      info: ProfileInfo!
      interests: ProfileInterests!
      details: ProfileDetails!
      # TODO: posts
      # TODO: friends
      # TODO: comments
    }

    type ProfileInfo {
      name: String!
      tagline: String
      pronouns: String
      age: Int
      location: String
      country: String
    }

    type ProfileInterests {
      general: String
      music: String
      movies: String
      television: String
      books: String
      heroes: String
    }

    type ProfileDetails {
      status: String
      hereFor: [String!]
      orientation: String
      height: String
      bodyType: String
      ethnicity: String
      religion: String
      zodiacSign: String
      children: String
      smoke: Boolean
      drink: Boolean
      education: String
      occupation: String
    }
  `;

  createTypes(typeDefs);
};

exports.onCreateNode = ({ node, actions, getNode, createNodeId }, options) => {
  const { basePath } = withDefaults(options);
  const parent = getNode(node.parent);

  if (
    node.internal.type !== "ContentJson" ||
    parent.sourceInstanceName !== `gatsby-theme-mdxspace-core`
  ) {
    return;
  }

  actions.createNode({
    id: createNodeId(`Profile-${node.id}`),
    slug: node.slug,
    lastUpdate: node.lastUpdate,
    info: node.info,
    interests: node.interests,
    details: node.details,
    // path: null,
    parent: node.id,
    internal: {
      type: "Profile",
      contentDigest: node.internal.contentDigest,
    },
  });
};

const ProfileTemplate = require.resolve(`./src/templates/profile-query.js`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allProfile {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("error loading profiles", result.errors);
  }

  const profiles = result.data.allProfile.nodes;

  profiles.forEach((profile) => {
    actions.createPage({
      path: profile.slug,
      component: ProfileTemplate,
      context: {
        profileID: profile.id,
      },
    });
  });
};
