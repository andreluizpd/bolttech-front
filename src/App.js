import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Projects from './pages/projects';
import Login from './pages/login';
import Register from './pages/register';
import Tasks from './pages/tasks';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={Projects} exact />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/tasks/:id' component={Tasks} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
