import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectCard = ({ project }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Body>
        <Card.Title as='h4'>{project.title}</Card.Title>

        <Card.Text as='div'>
          <p>Tasks Go here</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
