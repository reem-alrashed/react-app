import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form,FloatingLabel,Button,Breadcrumb  } from 'react-bootstrap';

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center">
        <Breadcrumb>
  <Breadcrumb.Item >Home</Breadcrumb.Item>

  <Breadcrumb.Item active>Login</Breadcrumb.Item>
</Breadcrumb>
          <div className="col-md-6">
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

  <Button variant="primary" type="submit">
    Submit
  </Button>
              </form>
              </div>
              </div>
      </div>
    </div>
  );
}
export default App;
