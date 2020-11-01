import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import mainten from '../../images/maintenence.png'

const BlogPage = () => {
    return (
        <Container  style={{ marginTop: '10vh' }} className="d-flex justify-content-center">
            <Row className="justify-content-center">
                <Col className="text-center col-md-12 col-sm-12 col-12">
                    <h2>Page is under construction...</h2>
                    <h3 >Thank you for your patience!</h3>
                    <img width="100%" src={mainten} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default BlogPage;