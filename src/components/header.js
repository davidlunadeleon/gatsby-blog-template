import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
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
      <Form inline className={styles.navbarInlineForm}>
        <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
