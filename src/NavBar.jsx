import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import logo from "./logo.svg";

export default function NavBar () {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
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
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#product">Product</Nav.Link>
                    <Nav.Link href="#team">Team</Nav.Link>
                    <Nav.Link href="#recognition">Recognition</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Button variant="outline-primary">Log in</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}