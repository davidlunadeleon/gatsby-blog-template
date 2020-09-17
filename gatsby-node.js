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
			basePath: "content/"
		});
		createNodeField({
			node,
			name: "slug",
			value: `${slug}`
		});
	}
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		query {
			allPosts: allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
			blogPosts: allMarkdownRemark(
				filter: { fields: { slug: { regex: "/post/" } } }
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
			tags: allMarkdownRemark {
				group(field: frontmatter___tags) {
					fieldValue
					totalCount
				}
			}
		}
	`);

	result.data.allPosts.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve("./src/templates/blog-post.js"),
			context: {
				slug: node.fields.slug
			}
		});
	});

	const postsPerPage = 5;

	const posts = result.data.blogPosts.edges;
	const numPages = Math.ceil(posts.length / postsPerPage);
	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/posts` : `/posts/${i + 1}`,
			component: path.resolve("./src/templates/posts.js"),
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1
			}
		});
	});

	const tags = result.data.tags.group;
	tags.forEach((tag) => {
		const pagesOfTag = Math.ceil(tag.totalCount / postsPerPage);
		Array.from({ length: pagesOfTag }).forEach((_, i) => {
			const urlOfTag = tag.fieldValue.replace(" ", "-");
			createPage({
				path:
					i === 0
						? `/tags/${urlOfTag}`
						: `/tags/${urlOfTag}/${i + 1}`,
				component: path.resolve("./src/templates/tags.js"),
				context: {
					limit: postsPerPage,
					skip: i * postsPerPage,
					numPages: pagesOfTag,
					currentPage: i + 1,
					tag: tag.fieldValue
				}
			});
		});
	});
};
