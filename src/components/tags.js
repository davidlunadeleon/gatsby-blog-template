import React from "react";
import { Link, useIntl } from "gatsby-plugin-intl";
import { Button } from "react-bootstrap";
import { BsTagFill } from "react-icons/bs";

import styles from "./tags.module.css";

const Tags = ({ tags }) => {
	const intl = useIntl();

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
			{intl.formatMessage({ id: "tags" })} <BsTagFill />:{addTags()}
		</div>
	);
};

export default Tags;
