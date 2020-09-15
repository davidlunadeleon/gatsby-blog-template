import React from "react";
import { Link } from "gatsby";

import styles from "./posts.module.css";

const Posts = ({ posts }) => {
	const makePostList = () => {
		return posts.map((postNode) => {
			const node = postNode.node;
			return (
				<div key={node.id}>
					<hr />
					<Link to={node.fields.slug} className="text-info">
						<h3>{node.frontmatter.title}</h3>
					</Link>
					<hr />
					<p className={styles.articleInfo}>
						Date: {node.frontmatter.date}
						{". "}
						Time to read: {node.timeToRead}{" "}
						{node.timeToRead > 1 ? "minutes" : "minute"}
					</p>
					<p>{node.excerpt}</p>
				</div>
			);
		});
	};

	return <div>{makePostList()}</div>;
};

export default Posts;
