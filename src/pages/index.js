import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Posts from "../components/posts";

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<SEO title="Home" />
			<h1>Recent posts</h1>
			<Posts
				posts={data.allMarkdownRemark.edges}
				defaultAuthor={data.site.siteMetadata}
			/>
		</Layout>
	);
};

export const query = graphql`
	query {
		allMarkdownRemark(
			limit: 3
			skip: 0
			sort: { fields: frontmatter___date, order: DESC }
			filter: { fields: { slug: { regex: "/posts/" } } }
		) {
			edges {
				node {
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
						tags
						author
						authorUrl
					}
					excerpt
					id
					timeToRead
					fields {
						slug
					}
				}
			}
		}
		site {
			siteMetadata {
				author
				authorUrl
			}
		}
	}
`;

export default IndexPage;
