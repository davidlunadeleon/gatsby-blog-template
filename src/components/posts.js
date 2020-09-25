import React from "react";
import { Link } from "gatsby";
import { BsFillCalendarFill } from "react-icons/bs";

import Tags from "./tags";

import styles from "./posts.module.css";

const Post = ({ post, defaultAuthor }) => {
	const renderTags = () => {
		return post.frontmatter.tags ? (
			<Tags tags={post.frontmatter.tags} />
		) : (
			<div></div>
		);
	};

	const addAuthor = () => {
		console.log(defaultAuthor);
		if (post.frontmatter.author) {
			return (
				<a href={post.frontmatter.authorUrl}>
					{post.frontmatter.author}
				</a>
			);
		} else if (defaultAuthor) {
			return <a href={defaultAuthor.authorUrl}>{defaultAuthor.author}</a>;
		} else {
			return <a href="#">a</a>;
		}
	};

	return (
		<div>
			<hr />
			<Link to={post.fields.slug} className="text-info">
				<h3>{post.frontmatter.title}</h3>
			</Link>
			<hr />
			<p className={styles.articleInfo}>
				<BsFillCalendarFill /> Date: {post.frontmatter.date}
				{". "}
				Time to read: {post.timeToRead}{" "}
				{post.timeToRead > 1 ? "minutes" : "minute"}. By {addAuthor()}
			</p>
			<p>{post.excerpt}</p>
			{renderTags()}
		</div>
	);
};

const Posts = ({ posts, defaultAuthor }) => {
	return (
		<div className={styles.postsBlock}>
			{posts.map((postNode) => (
				<Post
					post={postNode.node}
					key={postNode.node.id}
					defaultAuthor={defaultAuthor}
				/>
			))}
		</div>
	);
};

export default Posts;
