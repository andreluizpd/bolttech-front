import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      <h2>User LogIn</h2>
      <Form>
        <Form.Group controlId='formBasicEmail' className='my-3'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>

        <Form.Group controlId='formBasicPassword' className='my-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
