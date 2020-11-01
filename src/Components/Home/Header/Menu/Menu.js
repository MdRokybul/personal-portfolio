import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menu.css';

const Menu = () => {

    

    return (
        <Container >
            <Navbar fixed="top" className="menu" expand="lg">
                <Navbar.Brand href="/" className="text-white">Md Rokybul Hasan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="text-white" href="/projects">Projects</Nav.Link>
                        <Nav.Link className="text-white" href="/blogs">Blogs</Nav.Link>
                        <Nav.Link className="text-white" href="/resume">Resume</Nav.Link>
                        <Nav.Link className="text-white" href="#contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Menu;