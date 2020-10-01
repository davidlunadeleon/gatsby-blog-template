import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => {
	const intl = useIntl();
	return (
		<Layout>
			<SEO title={intl.formatMessage({ id: "error_404" })} />
			<h1>{intl.formatMessage({ id: "error_404" })}</h1>
		</Layout>
	);
};

export default NotFoundPage;
