import React, { useState } from "react";
import { Index } from "elasticlunr";
import { Form, FormControl, ListGroup, InputGroup } from "react-bootstrap";
import { useIntl, Link } from "gatsby-plugin-intl";
import { BsSearch } from "react-icons/bs";

import styles from "./search.module.css";

const Search = ({ searchIndex }) => {
	const intl = useIntl();

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
				<InputGroup className="w-100">
					<InputGroup.Prepend>
						<InputGroup.Text>
							<BsSearch />
						</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						type="text"
						placeholder={`${intl.formatMessage({
							id: "search"
						})}...`}
						onChange={search}
					/>
				</InputGroup>
			</Form>
			<ListGroup className={styles.resultsList}>
				{listResults()}
			</ListGroup>
		</div>
	);
};

export default Search;
