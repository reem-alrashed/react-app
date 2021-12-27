import React from 'react';
import {Container,Navbar} from 'react-bootstrap';
import Login from './login';
import { Routes, Route, Link } from "react-router-dom";

 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <header className="App-header">
        <div>
          <div className="header">
          <br />
     <Navbar bg="light" variant="light" fixed="top" >
    <Container>
    <Navbar.Brand href="#home">MyApp!</Navbar.Brand>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
    </Container>
  </Navbar>
          </div>

        </div>
      </header>
    </div>
  );
}
 
export default App;