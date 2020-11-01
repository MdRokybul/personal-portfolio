import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import projectData from '../../../FakeData/FakeData';
import ProjectCards from '../ProjectCards/ProjectCards';
import './Projects.css'


const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const homeProjects = projectData.slice(0, 2);
        setProjects(homeProjects);
    }, [])

    return (
        <Container style={{ marginTop: '50px' }}>
            <h2 className="text-center fade-up">Projects</h2>
            <Row>
                {
                    projects.map(project => <ProjectCards project={project} ></ProjectCards>)
                }
            </Row>
        </Container>
    );
};

export default Projects;