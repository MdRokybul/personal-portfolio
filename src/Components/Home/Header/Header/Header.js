import React from 'react';
import { Container } from 'react-bootstrap';
import MainSection from '../MainSection/MainSection';
import Menu from '../Menu/Menu';
import './Header.css';


const Header = () => {
    return (
        <Container fluid className="header-container" style={{ paddingBottom: '100px' }} >
            <div className="wave-container">
                <Menu />
                <MainSection />
            </div>
        </Container>
    );
};

export default Header;