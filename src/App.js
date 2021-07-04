import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Simple app for tasks and projects</h1>
        </Container>
      </main>
    </>
  );
}

export default App;
