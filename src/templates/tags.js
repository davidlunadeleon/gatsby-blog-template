import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Posts from "../components/posts";
import Pagination from "../components/pagination";
import SEO from "../components/seo";

const TagsPage = ({ data, pageContext }) => {
	return (
		<Layout>
			<SEO title={`Tag: ${pageContext.tag}`} />
			<h1>Tag: {pageContext.tag}</h1>
			<Posts posts={data.allMarkdownRemark.edges} />
			<Pagination
				pagesUrl={`/tags/${pageContext.tag.replace(" ", "-")}`}
				numPages={pageContext.numPages}
				currPage={pageContext.currentPage}
			/>
		</Layout>
	);
};

export const query = graphql`
	query($skip: Int!, $limit: Int!, $tag: String) {
		allMarkdownRemark(
			limit: $limit
			skip: $skip
			sort: { fields: frontmatter___date, order: DESC }
			filter: {
				fields: { slug: { regex: "/posts/" } }
				frontmatter: { tags: { in: [$tag] } }
			}
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

export default TagsPage;
