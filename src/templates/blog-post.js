import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Tags from "../components/tags";
import SEO from "../components/seo";
import PostInformation from "../components/postInformation";

const BlogPost = ({ data }) => {
	const post = data.markdownRemark;

	const renderTags = () => {
		return post.frontmatter.tags ? (
			<Tags tags={post.frontmatter.tags} />
		) : (
			<div></div>
		);
	};

	return (
		<Layout>
			<SEO title={post.frontmatter.title} />
			<h1>{post.frontmatter.title}</h1>
			<PostInformation
				date={post.frontmatter.date}
				timeToRead={post.timeToRead}
				authorInfo={post.frontmatter}
				defaultAuthorInfo={data.site.siteMetadata}
			/>
			{renderTags()}
			<hr />
			<div dangerouslySetInnerHTML={{ __html: post.html }} />
		</Layout>
	);
};

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				date(formatString: "DD MMMM, YYYY")
				tags
				author
				authorUrl
			}
			timeToRead
		}
		site {
			siteMetadata {
				author
				authorUrl
			}
		}
	}
`;

export default BlogPost;
