import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import profile from '../../../../images/profile.png';

const MainSection = () => {
    return (
        <Container style={{ marginTop: '5%' }} className=" d-flex justify-content-center text-center">
            <Row style={{marginTop: '40px'}}>
                <Col className="col-md-12 col-sm-12 col-12">
                    <h2 className="text-white" style={{fontSize: 'xxx-large'}}>Front-end Developer</h2>
                    <p className="text-white">I design and code beautifully simple things, and I love what I do.</p>
                    <img style={{width: '50%', borderRadius: '50%'}} src={profile} alt="" /><br />
                    <button className="btn btn-primary mt-4">Download Resume</button>
                </Col>
            </Row>
        </Container>
    );
};

export default MainSection;