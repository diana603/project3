import React from "react";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import NavStyle from "../pages/assets/nav.css"

function NavBar () {
    return (
        <div className="NavBar">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">East Coast Insurance</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/Customer">Update Forms</Nav.Link>
                    <Nav.Link href="/Quote">Get a Quote</Nav.Link>
                    <NavDropdown title="Insurance" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Auto</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Home</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Life</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Boat</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Motorcycle</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="/Login">Login</Nav.Link>
                    <Nav.Link eventKey={2} href="/About">
                        About the Team
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;