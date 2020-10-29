import React from 'react';
import { Container } from 'react-bootstrap';
import MainSection from '../MainSection/MainSection';
import Menu from '../Menu/Menu';
import './Header.css';


const Header = () => {
    return (
        <Container fluid className="header-container" style={{paddingBottom: '100px'}} >
            <Menu/>
            <MainSection/>
        </Container>
    );
};

export default Header;