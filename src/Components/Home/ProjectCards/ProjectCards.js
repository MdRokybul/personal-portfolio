import React from 'react';
import { Card, CardDeck, Col } from 'react-bootstrap';

const ProjectCards = ({ project }) => {
    return (
        <Col className="col-md-4 col-sm-6 col-12">
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Footer>
                        <p> {project.title} </p>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </Col>
    );
};

export default ProjectCards;