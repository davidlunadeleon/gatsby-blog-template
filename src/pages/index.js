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
			<Posts posts={data.allMarkdownRemark.edges} />
		</Layout>
	);
};

export const query = graphql`
	query {
		allMarkdownRemark(
			limit: 10
			sort: { fields: frontmatter___date, order: DESC }
		) {
			edges {
				node {
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
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
	}
`;

export default IndexPage;
