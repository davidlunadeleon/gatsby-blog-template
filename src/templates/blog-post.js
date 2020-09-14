import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const BlogPost = ({ data }) => {
	const post = data.markdownRemark;

	return (
		<Layout>
			<h1>{post.frontmatter.title}</h1>
			<p>
				Date: {post.frontmatter.date}
				{". "}
				Time to read: {post.timeToRead}{" "}
				{post.timeToRead > 1 ? "minutes" : "minute"}
			</p>
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
			}
			timeToRead
		}
	}
`;

export default BlogPost;
