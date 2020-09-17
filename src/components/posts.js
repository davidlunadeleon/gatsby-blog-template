import React from "react";
import { Link } from "gatsby";
import { Button } from "react-bootstrap";

import styles from "./posts.module.css";

const Post = ({ post }) => {
	const addTags = () => {
		return post.frontmatter.tags.map((tag) => (
			<Button
				variant="info"
				size="sm"
				as={Link}
				to={`/tags/${tag.replace(" ", "-")}`}
				className={styles.tagButton}
			>
				{tag}
			</Button>
		));
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
			<div className={styles.articleInfo}>
				Tags:
				{addTags()}
			</div>
		</div>
	);
};

const Posts = ({ posts }) => {
	return (
		<div className={styles.postsBlock}>
			{posts.map((postNode) => (
				<Post post={postNode.node} />
			))}
		</div>
	);
};

export default Posts;
