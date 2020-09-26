import React from "react";
import { Link } from "gatsby";

import Tags from "./tags";
import PostInformation from "./postInformation";

import styles from "./posts.module.css";

const Post = ({ post, defaultAuthor }) => {
	const renderTags = () => {
		return post.frontmatter.tags ? (
			<Tags tags={post.frontmatter.tags} />
		) : (
			<div></div>
		);
	};

	return (
		<div>
			<hr />
			<Link to={post.fields.slug} className="text-info">
				<h3>{post.frontmatter.title}</h3>
			</Link>
			<hr />
			<PostInformation
				date={post.frontmatter.date}
				timeToRead={post.frontmatter.timeToRead}
				authorInfo={post.frontmatter}
				defaultAuthorInfo={defaultAuthor}
			/>
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
