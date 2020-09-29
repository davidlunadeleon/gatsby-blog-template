import { graphql, useStaticQuery } from "gatsby";
import { Link, useIntl } from "gatsby-plugin-intl";
import PropTypes from "prop-types";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import Search from "./search";

import styles from "./header.module.css";

const Header = ({ siteTitle }) => {
	const intl = useIntl();

	const data = useStaticQuery(graphql`
		query {
			siteSearchIndex {
				index
			}
		}
	`);

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
				</Nav>
				<Search searchIndex={data.siteSearchIndex.index} />
			</Navbar.Collapse>
		</Navbar>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
