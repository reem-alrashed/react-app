import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Form,FloatingLabel,Button,Breadcrumb  } from 'react-bootstrap';

function App() {

  return (
    <div className="App">
      <div className="container" >
      <Card>
        <div className="row d-flex justify-content-center m-4" style={{'text-align': 'center'}}>
        <Breadcrumb className="mt-2 mr-4">
  <Breadcrumb.Item >Home</Breadcrumb.Item>
  <Breadcrumb.Item active>Login</Breadcrumb.Item>
</Breadcrumb>
          <div className="col-md-5">
            <form id="loginform" >
            <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password"  className="mb-3">
    <Form.Control type="password" placeholder="Password" />
  </FloatingLabel>

  <Button variant="primary" type="submit" className="mb-3">
    Login
  </Button>
              </form>
              </div>
              </div>
</Card>
      </div>
    </div>
  );
}
export default App;
