import React from "react";
import { Link } from "gatsby";
import { Button } from "react-bootstrap";
import { BsTagFill } from "react-icons/bs";

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
				key={tag}
			>
				{tag}
			</Button>
		));
	};

	return (
		<div className={styles.tagsStyle}>
			Tags <BsTagFill />:{addTags()}
		</div>
	);
};

export default Tags;
