import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import ProjectCard from './components/ProjectCard';
import { listProjects } from '../../actions/projectActions';

const Projects = () => {
  const dispatch = useDispatch();

  const projectList = useSelector(state => state.projectList);
  const { loading, error, projects } = projectList;

  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  return (
    <>
      <h1>Projects</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3 style={{ color: 'red' }}>{error}</h3>
      ) : (
        <Row>
          {projects.map(project => (
            <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Projects;
