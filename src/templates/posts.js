import React from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import Posts from "../components/posts";
import Pagination from "../components/pagination";
import SEO from "../components/seo";

const PostsPage = ({ data, pageContext }) => {
	const intl = useIntl();

	return (
		<Layout>
			<SEO title={intl.formatMessage({ id: "posts" })} />
			<h1>{intl.formatMessage({ id: "posts" })}</h1>
			<Posts
				posts={data.allMarkdownRemark.edges}
				defaultAuthor={data.site.siteMetadata}
			/>
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
						date
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

export default PostsPage;
