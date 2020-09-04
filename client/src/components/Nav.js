import React from "react";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import NavStyle from "../pages/assets/nav.css"

function NavBar () {
    return (
        <div className="NavBar">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/Customer">Customer Forms</Nav.Link>
                    <Nav.Link href="/About">About ECI</Nav.Link>
                    <NavDropdown title="Insurance" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Auto</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Home</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Life</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="/Login">Login</Nav.Link>
                    <Nav.Link eventKey={2} href="/Profile">
                        Profile
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;