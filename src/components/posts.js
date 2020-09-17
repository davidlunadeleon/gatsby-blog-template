import React from "react";
import { Link } from "gatsby";

import Tags from "./tags";

import styles from "./posts.module.css";

const Post = ({ post }) => {
	const renderTags = () => {
		return post.frontmatter.tags ? (
			<Tags tags={post.frontmatter.tags} />
		) : (
			<div></div>
		);
	};

	return (
		<div key={post.id}>
			<hr />
			<Link to={post.fields.slug} className="text-info">
				<h3>{post.frontmatter.title}</h3>
			</Link>
			<hr />
			<p className={styles.articleInfo}>
				Date: {post.frontmatter.date}
				{". "}
				Time to read: {post.timeToRead}{" "}
				{post.timeToRead > 1 ? "minutes" : "minute"}
			</p>
			<p>{post.excerpt}</p>
			{renderTags()}
		</div>
	);
};

const Posts = ({ posts }) => {
	return (
		<div className={styles.articleInfo}>
			{posts.map((postNode) => (
				<Post post={postNode.node} />
			))}
		</div>
	);
};

export default Posts;
