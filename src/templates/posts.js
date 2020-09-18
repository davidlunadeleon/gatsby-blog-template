import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Posts from "../components/posts";
import Pagination from "../components/pagination";
import SEO from "../components/seo";

const PostsPage = ({ data, pageContext }) => {
	return (
		<Layout>
			<SEO title="Posts" />
			<h1>Posts</h1>
			<Posts posts={data.allMarkdownRemark.edges} />
			<Pagination
				pagesUrl="/posts"
				numPages={pageContext.numPages}
				currPage={pageContext.currentPage}
			/>
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
						tags
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
