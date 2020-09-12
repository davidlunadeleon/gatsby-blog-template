import React from "react";

const Posts = ({ posts }) => {
	const makePostList = () => {
		return posts.map((postNode) => {
			return (
				<div key={postNode.node.id}>
					<h3>{postNode.node.frontmatter.title}</h3>
					<p>
						Date: {postNode.node.frontmatter.date}
						{". "}
						Time to read: {postNode.node.timeToRead} minutes
					</p>
					<p>{postNode.node.excerpt}</p>
				</div>
			);
		});
	};

	return <div>{makePostList()}</div>;
};

export default Posts;
