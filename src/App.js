import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import CreatePowerbank from "./components/create-powerbank.component";
import EditPowerbank from "./components/edit-powerbank.component";
import PowerbankList from "./components/powerbank-list.component";
import Index from "./components/index.component";
function App() {
  return (
    
    <div className="App">
     
      <Router>
      
        <header className="App-header">
          <Navbar id="navbar" bg="dark" expand="lg" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"}  className="nav-link">
                  POWER UP!
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-powerbank"} className="nav-link">
                    Crear Cliente
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/powerbank-list"} className="nav-link">
                    Listar CLientes
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={6}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <Index {...props} />}
                  />
                  <Route
                    exact
                    path="/create-powerbank"
                    component={(props) => <CreatePowerbank {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-clientes/:id"
                    // eslint-disable-next-line react/jsx-no-undef
                    component={(props) => <EditPowerbank {...props} />}
                  />
                  <Route
                    exact
                    path="/powerbank-list"
                    component={(props) => <PowerbankList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
        
      </Router>
      {/* <div>
      <Container>
      <BootstrapCarousel /> 
      </Container>
      </div> */}
     
      
    </div>
    
  );
}

export default App;

