import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Posts from "../components/posts";

const PostsPage = ({ data, pageContext }) => {
	return (
		<Layout>
			<h1>Posts</h1>
			<Posts posts={data.allMarkdownRemark.edges} />
		</Layout>
	);
};

export const query = graphql`
	query($skip: Int!, $limit: Int!) {
		allMarkdownRemark(
			limit: $limit
			skip: $skip
			sort: { fields: frontmatter___date, order: DESC }
			filter: { fields: { slug: { regex: "/posts/" } } }
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

export default PostsPage;
