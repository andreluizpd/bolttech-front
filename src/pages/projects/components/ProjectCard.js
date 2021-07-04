import React from 'react';
import { Card } from 'react-bootstrap';
import Tasks from '../../tasks';

const ProjectCard = ({ project }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Body>
        <Card.Title as='h4'>{project.title}</Card.Title>

        <Card.Text as='div'>
          <Tasks projectId={project._id} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
