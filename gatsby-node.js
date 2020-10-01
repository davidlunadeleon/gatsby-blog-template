/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

const { languages } = require("./config");

//Taken from:https://github.com/wiziple/gatsby-plugin-intl/issues/17#issuecomment-578427268

const flattenMessages = (nestedMessages, prefix = "") => {
	return Object.keys(nestedMessages).reduce((messages, key) => {
		let value = nestedMessages[key];
		let prefixedKey = prefix ? `${prefix}.${key}` : key;

		if (typeof value === "string") {
			messages[prefixedKey] = value;
		} else {
			Object.assign(messages, flattenMessages(value, prefixedKey));
		}

		return messages;
	}, {});
};

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === "MarkdownRemark") {
		let slug = createFilePath({
			node,
			getNode,
			basePath: "content/"
		});
		let path = slug;
		languages.forEach((lang) => {
			if (slug.includes(`/${lang}`)) {
				path = slug.substring(0, slug.indexOf(`/${lang}`));
				slug = `/${lang}${path}`;
			}
		});
		createNodeField({
			node,
			name: "slug",
			value: `${slug}`
		});
		createNodeField({
			node,
			name: "path",
			value: `${path}`
		});
	}
};

const pagesSet = new Set();

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	//Taken from: https://github.com/wiziple/gatsby-plugin-intl/issues/17#issuecomment-578427268
	const getMessages = (language) => {
		const messages = require(`./locales/${language}.json`);
		return flattenMessages(messages);
	};

	const result = await graphql(`
		query {
			allPosts: allMarkdownRemark {
				edges {
					node {
						fields {
							slug
							path
						}
						frontmatter {
							lang
							type
							title
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
							path
						}
						frontmatter {
							lang
						}
					}
				}
			}
		}
	`);

	result.data.allPosts.edges.forEach(({ node }) => {
		pagesSet.add(`/${node.frontmatter.lang}${node.fields.slug}`);
		createPage({
			path: node.fields.slug,
			component: path.resolve("./src/templates/blog-post.js"),
			context: {
				slug: node.fields.slug,
				type: node.frontmatter.type,
				intl: {
					language: node.frontmatter.lang,
					languages,
					messages: getMessages(node.frontmatter.lang),
					routed: true,
					originalPath: node.fields.path,
					redirect: false
				}
			}
		});
	});

	const postsPerPage = 5;

	languages.forEach((lang) => {
		const posts = [];
		result.data.blogPosts.edges.forEach(({ node }) => {
			if (node.frontmatter.lang === lang) {
				posts.push(node);
			}
		});
		const numPages = Math.ceil(posts.length / postsPerPage);
		Array.from({ length: numPages }).forEach((_, i) => {
			const pagePath = i === 0 ? `/posts` : `/posts/${i + 1}`;
			const slug = `/${lang}${pagePath}`;
			pagesSet.add(slug);
			createPage({
				path: slug,
				component: path.resolve("./src/templates/posts.js"),
				context: {
					limit: postsPerPage,
					skip: i * postsPerPage,
					numPages,
					currentPage: i + 1,
					lang,
					type: "static",
					intl: {
						language: lang,
						languages,
						messages: getMessages(lang),
						routed: true,
						originalPath: pagePath,
						redirect: false
					}
				}
			});
		});
	});

	for (lang of languages) {
		const tagsResult = await graphql(
			`
				query($lang: String!) {
					tags: allMarkdownRemark(
						filter: { frontmatter: { lang: { eq: $lang } } }
					) {
						group(field: frontmatter___tags) {
							fieldValue
							totalCount
						}
					}
				}
			`,
			{ lang }
		);
		const tags = tagsResult.data.tags.group;
		tags.forEach((tag) => {
			const pagesOfTag = Math.ceil(tag.totalCount / postsPerPage);
			Array.from({ length: pagesOfTag }).forEach((_, i) => {
				const urlOfTag = tag.fieldValue.replace(" ", "-");
				const pagePath =
					i === 0
						? `/tags/${urlOfTag}`
						: `/tags/${urlOfTag}/${i + 1}`;
				const slug = `/${lang}${pagePath}`;
				pagesSet.add(slug);
				createPage({
					path: slug,
					component: path.resolve("./src/templates/tags.js"),
					context: {
						limit: postsPerPage,
						skip: i * postsPerPage,
						numPages: pagesOfTag,
						currentPage: i + 1,
						tag: tag.fieldValue,
						lang,
						type: "static",
						intl: {
							language: lang,
							languages,
							messages: getMessages(lang),
							routed: true,
							originalPath: pagePath,
							redirect: false
						}
					}
				});
			});
		});
	}
};

exports.onCreatePage = async ({ page, actions }) => {
	const { deletePage } = actions;

	const isPage =
		page.context.type === "post" || page.context.type === "static";
	const isInvalidPath = !pagesSet.has(page.path);

	if (isPage && isInvalidPath) {
		deletePage(page);
	}
};
