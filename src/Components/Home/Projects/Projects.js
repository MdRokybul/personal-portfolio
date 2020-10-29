import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import projectData from '../../../FakeData/FakeData';
import ProjectCards from '../ProjectCards/ProjectCards';



const Projects = () => {


    return (
        <Container style={{ marginTop: '150px' }} className="trails-main">
            <h2 className="text-center">Projects</h2>
            <Row>
                {
                    projectData.map(project => <ProjectCards project={project} ></ProjectCards>)
                }
            </Row>
        </Container>
    );
};

export default Projects;