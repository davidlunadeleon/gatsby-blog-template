const { languages, defaultLanguage, languageName } = require("./config");

const generateFeeds = () => {
	return languages.map((lang) => {
		return {
			serialize: ({ query: { site, allMarkdownRemark } }) => {
				return allMarkdownRemark.edges.map((edge) => {
					const author =
						edge.node.frontmatter.author ??
						site.siteMetadata.author;
					return Object.assign({}, edge.node.frontmatter, {
						description: edge.node.excerpt,
						date: edge.node.frontmatter.date,
						url: site.siteMetadata.siteUrl + edge.node.fields.slug,
						custom_elements: [
							{
								"content:encoded": edge.node.html
							}
						],
						categories: edge.node.frontmatter.tags,
						author
					});
				});
			},
			query: `
				{
				  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {type: {eq: "post"}, lang: {eq: "${lang}"}}}) {
				    edges {
				      node {
				        excerpt
				        fields {
				          slug
				        }
				        frontmatter {
				          title
				          date
				          tags
				          author
				        }
				      }
				    }
				  }
				}
						`,
			output: `/rss_${lang}.xml`,
			title: `gatsby-blog-template rss feed. ${languageName[lang]}`
		};
	});
};

module.exports = {
	siteMetadata: {
		title: `My Blog`,
		description: `Personal blog about all kinds of topics.`,
		author: `The Wonderful Me`,
		authorUrl: `https://github.com/davidlunadeleon`,
		siteUrl: `https://gatsbyjs-blog-template.netlify.app`,
		socialMedia: [
			{
				name: "Mastodon",
				url: "https://joinmastodon.org/",
				description: "@me@mastodon.social"
			},
			{
				name: "Pixelfed",
				url: "https://github.com/pixelfed",
				description: "@me@pixelfed.social"
			}
		]
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/content`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							showLineNumbers: true,
							inlineCodeMarker: "±"
						}
					}
				]
			}
		},
		{
			resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
			options: {
				fields: [`title`, `tags`],
				resolvers: {
					MarkdownRemark: {
						title: (node) => node.frontmatter.title,
						tags: (node) => node.frontmatter.tags,
						slug: (node) => node.fields.path,
						lang: (node) => node.frontmatter.lang,
						id: (node) => node.id
					}
				}
			}
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `				
					{
					  site {
					    siteMetadata {
					      title
					      description
					      siteUrl
						  site_url: siteUrl
						  author
					    }
					  }
					}
				`,
				feeds: generateFeeds()
			}
		},
		{
			resolve: `gatsby-plugin-intl`,
			options: {
				path: `${__dirname}/locales`,
				languages,
				defaultLanguage,
				redirect: true
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
