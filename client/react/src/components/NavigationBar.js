import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default class NavigationBar extends Component {
  render() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Report of the Pour</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/beers">Beers</Nav.Link>
            <Nav.Link href="/reviews">Reviews</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
