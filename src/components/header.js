import { Link, graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import Search from "./search";

import styles from "./header.module.css";

const Header = ({ siteTitle }) => {
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
						Home
					</Link>
					<Link className="nav-link" to="/posts">
						Posts
					</Link>
					<Link className="nav-link" to="/about-me">
						About Me
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
