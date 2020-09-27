import React from "react";
import { BsFillCalendarFill } from "react-icons/bs";

import styles from "./postInformation.module.css";

const PostInformation = ({
	date,
	timeToRead,
	authorInfo,
	defaultAuthorInfo
}) => {
	const addAuthor = () => {
		if (authorInfo.author) {
			return <a href={authorInfo.authorUrl}>{authorInfo.author}</a>;
		}
		return (
			<a href={defaultAuthorInfo.authorUrl}>{defaultAuthorInfo.author}</a>
		);
	};

	return (
		<p className={styles.postInfo}>
			<BsFillCalendarFill /> Date: {date}. Time to read: {timeToRead}{" "}
			{timeToRead > 1 ? "minutes" : "minute"}. By: {addAuthor()}
		</p>
	);
};

export default PostInformation;
