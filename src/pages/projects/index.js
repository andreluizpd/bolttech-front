import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

import ProjectCard from './components/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const { data } = await axios.get('/api/projects', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGUwOTcyZjFmMjMyMjEyYWVkM2M5OTQiLCJlbWFpbCI6ImFuZHJlbHVpenBkQGdtYWlsLmNvbSIsIm5hbWUiOiJBbmRyZSBsdWl6IHBhc3RvcmUgZGFtYnJvcyIsImNyZWF0ZWRBdCI6IjIwMjEtMDctMDNUMTY6NTg6MjMuNTY4WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDctMDNUMTY6NTg6MjMuNTY4WiIsIl9fdiI6MCwic2Vzc2lvbiI6IjYwZTFlZDcxNDEzY2Y2MGI2Zjk5NDJlMiIsImlhdCI6MTYyNTQxOTEyMSwiZXhwIjoxNjI1NDIwMDIxfQ.38hMCUeY6QZHNnE9ENS_MfX3OTQjpwnWk2IuacJ-6z4',
          'x-refresh':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWxpZCI6dHJ1ZSwiX2lkIjoiNjBlMWVkNzE0MTNjZjYwYjZmOTk0MmUyIiwidXNlciI6IjYwZTA5NzJmMWYyMzIyMTJhZWQzYzk5NCIsInVzZXJBZ2VudCI6IlBvc3RtYW5SdW50aW1lLzcuMjguMSIsImNyZWF0ZWRBdCI6IjIwMjEtMDctMDRUMTc6MTg6NDEuMzE4WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDctMDRUMTc6MTg6NDEuMzE4WiIsIl9fdiI6MCwiaWF0IjoxNjI1NDE5MTIxLCJleHAiOjE2NTY5NzY3MjF9.JZYHGxPBSlV4hnwmhmCPaT4cczWD8VmYvtupPBaI_hc',
        },
      });

      console.log(data);

      setProjects(data);
    };

    getProjects();
  }, []);

  return (
    <>
      <h1>Projects</h1>
      <Row>
        {projects.map(project => (
          <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Projects;
