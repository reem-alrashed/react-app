
import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import {Container,Navbar,Nav} from 'react-bootstrap';
import Login from './login';

 
function App() {
  return (
    <div className="App">

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <BrowserRouter>
        <div>
          <div className="header">
          <br />
  <Navbar bg="light" variant="light" fixed="top" >
    <Container>
    <Navbar.Brand href="#home">MyApp!</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link exact activeClassName="active" to="/">Home</Nav.Link>
      <Nav.Link activeClassName="active" to="/login">Login</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Nav className="me-auto">
            {/* <NavLink exact activeClassName="active" to="/">Home</NavLink> */}
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            {/* <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small> */}
        </Nav>
          </div>
          <div className="content">
            <Switch>
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
      </header>
    </div>
  );
}
 
export default App;