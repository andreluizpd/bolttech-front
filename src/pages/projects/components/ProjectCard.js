import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const ProjectCard = ({ project }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/tasks/${project._id}`}>
        <Card.Body>
          <Card.Title as='h4'>{project.title}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ProjectCard;
