import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menu.css';

const Menu = () => {

    

    return (
        <Container >
            <Navbar fixed="top" className="menu" expand="lg">
                <Navbar.Brand href="#home">Md Rokybul Hasan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Projects</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Resume</Nav.Link>
                        <Nav.Link href="#link">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Menu;