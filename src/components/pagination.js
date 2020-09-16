import React from "react";
import { Link } from "gatsby";

const Pagination = ({ pagesUrl, numPages, currPage }) => {
	const elipsis = () => (
		<li className="page-item disabled">
			<div className="page-link">...</div>
		</li>
	);

	const makePageButtons = () => {
		let elementArray = [];
		let i = Math.max(1, currPage - 1);
		let upper = Math.min(numPages, currPage + 1);
		if (i >= 2) {
			elementArray.push(elipsis());
		}
		for (; i <= upper; i++) {
			const setClassName =
				i === currPage ? "page-item active" : "page-item";
			const url = i === 1 ? pagesUrl : `${pagesUrl}/${i}`;
			elementArray.push(
				<li className={setClassName} key={url}>
					<Link className="page-link" to={url}>
						{i}
					</Link>
				</li>
			);
		}
		if (i <= numPages) {
			elementArray.push(elipsis());
		}

		return elementArray;
	};

	const setClassNamePrevious =
		currPage === 1 ? "page-item disabled" : "page-item";
	const setClassNameNext =
		currPage === numPages ? "page-item disabled" : "page-item";

	return (
		<nav aria-label="Page navigation">
			<ul className="pagination justify-content-center">
				<li className={setClassNamePrevious}>
					<Link className="page-link" to={pagesUrl}>
						First
					</Link>
				</li>
				{makePageButtons()}
				<li className={setClassNameNext}>
					<Link className="page-link" to={`${pagesUrl}/${numPages}`}>
						Last
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
