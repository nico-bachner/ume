import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from "../logo.svg";

export default function NavBar () {
    return(
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="#">
            <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="ume logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#team">Team</Nav.Link>
                    <Nav.Link href="#recognition">Recognition</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="https://www.ume.solutions/">Link to old site</Nav.Link>
                </Nav>
                <Button variant="outline-primary" href="https://app.ume.solutions/auth">Log in</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}