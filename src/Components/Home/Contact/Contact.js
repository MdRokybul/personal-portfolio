import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import contact from '../../../images/contact.gif';
import emailjs from 'emailjs-com';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('Rokybul40', 'template_igzynpv', e.target, 'user_ovJD6F5a5PtWVtncQAczx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <Container style={{ marginTop: '150px', marginBottom: '20px'}} id="contact">
            <Row>
                <Col className="col-md-6 col-sm-12 col-12">
                    <img style={{ width: '100%' }} src={contact} alt="" />
                </Col>
                <Col className="col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center">
                    <div className="col-md-12">
                        <Form onSubmit={sendEmail}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Your Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" name="from_name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" name="email" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} name="message" />
                            </Form.Group>

                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;