import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menu.css';

const Menu = () => {

    

    return (
        <Container >
            <Navbar fixed="top" className="menu" expand="lg">
                <Navbar.Brand href="#home" className="text-white">Md Rokybul Hasan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="text-white" href="#home">Home</Nav.Link>
                        <Nav.Link className="text-white" href="#link">Projects</Nav.Link>
                        <Nav.Link className="text-white" href="#link">Blog</Nav.Link>
                        <Nav.Link className="text-white" href="#link">Resume</Nav.Link>
                        <Nav.Link className="text-white" href="#link">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Menu;