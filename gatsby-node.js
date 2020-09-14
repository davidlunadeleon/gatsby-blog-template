/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === "MarkdownRemark") {
		const slug = createFilePath({
			node,
			getNode,
			basePath: "posts/posts/"
		});
		createNodeField({
			node,
			name: "slug",
			value: `/posts${slug}`
		});
	}
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve("./src/templates/blog-post.js"),
			context: {
				slug: node.fields.slug
			}
		});
	});
};
