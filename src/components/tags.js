import React from "react";
import { Link } from "gatsby";
import { Button } from "react-bootstrap";

import styles from "./tags.module.css";

const Tags = ({ tags }) => {
	const addTags = () => {
		return tags.map((tag) => (
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
		<div className={styles.tagsStyle}>
			Tags:
			{addTags()}
		</div>
	);
};

export default Tags;
