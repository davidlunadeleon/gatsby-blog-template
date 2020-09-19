import React from "react";
import { graphql } from "gatsby";
import { BsFillCalendarFill } from "react-icons/bs";

import Layout from "../components/layout";
import Tags from "../components/tags";
import SEO from "../components/seo";

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
			<p>
				<BsFillCalendarFill /> Date: {post.frontmatter.date}
				{". "}
				Time to read: {post.timeToRead}{" "}
				{post.timeToRead > 1 ? "minutes" : "minute"}
			</p>
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
			}
			timeToRead
		}
	}
`;

export default BlogPost;
