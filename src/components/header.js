import { graphql, useStaticQuery } from "gatsby";
import {
	Link,
	useIntl,
	IntlContextConsumer,
	changeLocale
} from "gatsby-plugin-intl";
import PropTypes from "prop-types";
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import Search from "./search";

import styles from "./header.module.css";

import { languageName } from "../../config";

const Header = ({ siteTitle }) => {
	const intl = useIntl();

	const data = useStaticQuery(graphql`
		query {
			siteSearchIndex {
				index
			}
		}
	`);

	const makeLanguageList = (languages) => {
		return languages.map((language) => (
			<NavDropdown.Item
				key={language}
				onClick={() => changeLocale(language)}
			>
				{languageName[language]}
			</NavDropdown.Item>
		));
	};

	return (
		<IntlContextConsumer>
			{({ languages, language: currentLocale }) => {
				return (
					<Navbar
						bg="dark"
						variant="dark"
						collapseOnSelect
						expand="lg"
						className={styles.navbarComplete}
					>
						<Navbar.Brand>
							<Link className="navbar-brand" to="/">
								{siteTitle}
							</Link>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<Link className="nav-link" to="/">
									{intl.formatMessage({ id: "home" })}
								</Link>
								<Link className="nav-link" to="/posts">
									{intl.formatMessage({ id: "posts" })}
								</Link>
								<Link className="nav-link" to="/about">
									{intl.formatMessage({ id: "about" })}
								</Link>
								<NavDropdown
									title={intl.formatMessage({
										id: "language"
									})}
								>
									{makeLanguageList(languages)}
								</NavDropdown>
							</Nav>
							<Search
								searchIndex={data.siteSearchIndex.index}
								currLang={currentLocale}
							/>
						</Navbar.Collapse>
					</Navbar>
				);
			}}
		</IntlContextConsumer>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
