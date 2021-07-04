import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  return (
    <>
      <h2>User Registration</h2>
      <Form>
        <Form.Group controlId='formName' className='my-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter your name' />
        </Form.Group>

        <Form.Group controlId='formEmail' className='my-3'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter your email' />
        </Form.Group>

        <Form.Group controlId='formPassword' className='my-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>

        <Form.Group controlId='formConfirmPassword' className='my-3'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' placeholder='Confirm Password' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Register;
