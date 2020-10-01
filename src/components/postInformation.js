import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { BsFillCalendarFill } from "react-icons/bs";

import styles from "./postInformation.module.css";

const PostInformation = ({
	date,
	timeToRead,
	authorInfo,
	defaultAuthorInfo
}) => {
	const intl = useIntl();

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
			<BsFillCalendarFill /> {intl.formatMessage({ id: "date" })}:{" "}
			{intl.formatDate(date)}. {intl.formatMessage({ id: "ttr" })}:{" "}
			{timeToRead}{" "}
			{timeToRead > 1
				? intl.formatMessage({ id: "minutes" })
				: intl.formatMessage({ id: "minute" })}
			. {intl.formatMessage({ id: "by" })}: {addAuthor()}
		</p>
	);
};

export default PostInformation;
