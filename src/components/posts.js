import React from "react";
import { Link } from "gatsby";

const Posts = ({ posts }) => {
	const makePostList = () => {
		return posts.map((postNode) => {
			const node = postNode.node;

			return (
				<div key={node.id}>
					<Link to={node.fields.slug}>
						<h3>{node.frontmatter.title}</h3>
					</Link>
					<p>
						Date: {node.frontmatter.date}
						{". "}
						Time to read: {node.timeToRead} minutes
					</p>
					<p>{node.excerpt}</p>
				</div>
			);
		});
	};

	return <div>{makePostList()}</div>;
};

export default Posts;
