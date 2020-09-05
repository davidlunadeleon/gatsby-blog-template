import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar } from "react-bootstrap"

import "./header.module.css"

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>
      <Link className="navbar-brand" to="/">
        {siteTitle}
      </Link>
    </Navbar.Brand>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
