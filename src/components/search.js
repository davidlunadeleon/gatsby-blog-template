import React, { useState } from "react";
import { Index } from "elasticlunr";
import { Link } from "gatsby";
import { Form, FormControl, ListGroup } from "react-bootstrap";

import styles from "./search.module.css";

const Search = ({ searchIndex }) => {
	const [results, setResults] = useState([]);
	const index = Index.load(searchIndex);

	const search = (event) => {
		setResults(
			index
				.search(event.target.value, { expand: true })
				.map(({ ref }) => index.documentStore.getDoc(ref))
				.slice(0, 6)
		);
	};

	const listResults = () => {
		return results.map((page) => (
			<ListGroup.Item key={page.title}>
				<Link to={page.slug}>{page.title}</Link>
			</ListGroup.Item>
		));
	};

	return (
		<div className={styles.searchBarDiv}>
			<Form inline className={styles.searchBar}>
				<FormControl
					type="text"
					placeholder="Search..."
					className="w-100"
					onChange={search}
				/>
			</Form>
			<ListGroup className={styles.resultsList}>
				{listResults()}
			</ListGroup>
		</div>
	);
};

export default Search;
