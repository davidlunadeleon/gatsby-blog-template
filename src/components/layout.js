/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

import "./layout.css";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./layout.module.css";

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					siteUrl
					socialMedia {
						name
						url
						description
					}
				}
			}
		}
	`);

	return (
		<>
			<Header siteTitle={data.site.siteMetadata.title} />
			<main className={styles.mainContent}>{children}</main>
			<Footer
				siteUrl={data.site.siteMetadata.siteUrl}
				socialMedia={data.site.siteMetadata.socialMedia}
			/>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
