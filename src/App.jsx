import "./App.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Image,
  Nav,
  NavDropdown,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
  Row,
} from "react-bootstrap";
import { Routes, Route, Router } from "react-router-dom";
import All from "./Guvi/all";
import FullStackDevelopment from "./Guvi/fullstackdevelopment";
import DataScience from "./Guvi/datascience";
import CyberSecurity from "./Guvi/cybersecurity";
import Career from "./Guvi/career";
import { SassColor } from "sass";
import BaseComponent from "bootstrap/js/dist/base-component";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/mocks/products.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error loading data", error));
  }, []);

  useLayoutEffect(() => {
    console.log("Layout Effect");
  }, []);

  // const App = () => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     // Load data from the JSON file when the component mounts
  //     fetch('/path-to-your-data.json')
  //       .then(response => response.json())
  //       .then(data => setData(data))
  //       .catch(error => console.error('Error loading data', error));
  //   }, []);

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="container-fluid">
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <Nav className="me-auto">
                    <div className="mb-2">
                      <Nav.Link href="https://www.guvi.in/courses/?current_tab=myCourses">
                        COURSES
                      </Nav.Link>
                    </div>
                    <NavDropdown title="LIVE CLASSES" id="basic-nav-dropdown">
                      <p>
                        Zen Class
                        <Badge bg="danger">Live Online Classes</Badge>
                        <div>
                          LIVE Online Intensive Program + 100% Placement Support
                        </div>
                      </p>
                      <NavDropdown.Item href="https://www.guvi.in/zen-class/full-stack-development-course/">
                        Full Stack Development Program (FSD)
                      </NavDropdown.Item>
                      <p>
                        Learn Javascript, HTML, CSS, Java, Data Structure,
                        MongoDB & more
                      </p>
                      <NavDropdown.Item href="https://www.guvi.in/zen-class/data-science-course/">
                        IIT-M Advanced Programming & Data Science Program
                      </NavDropdown.Item>
                      <p>
                        Learn Python, Machine Learning, NLP, Tableau, PowerBI &
                        more
                      </p>
                      <NavDropdown.Item href="https://www.guvi.in/zen-class/automation-testing-course/">
                        Automation & Testing Program
                      </NavDropdown.Item>
                      <p>
                        Learn Selenium, Python, Java, Jenkins, Jmeter, API
                        Testing & more
                      </p>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="https://www.guvi.in/zen-class/">
                        <div className="text-success">
                          Explore More Programs
                        </div>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="PRACTICE" id="basic-nav-dropdown">
                      <NavDropdown.Item href="https://www.guvi.in/code-kata/">
                        Codekata
                      </NavDropdown.Item>
                      <p>Sharpen your coding skills, prepare for interviews</p>
                      <NavDropdown.Item href="https://www.guvi.in/webkata/">
                        Webkata
                      </NavDropdown.Item>
                      <p>Build basic Frontend and Backend development skills</p>
                      <NavDropdown.Item href="https://www.guvi.in/webkata/">
                        IDE - Online Compiler
                      </NavDropdown.Item>
                      <p>Run & test your code in any programming language</p>
                      <NavDropdown.Divider />
                    </NavDropdown>
                    <div>
                      <NavDropdown title="RESOURCES" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://www.guvi.in/rewards/">
                          <h6>REWARDS</h6>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://www.guvi.in/referral/5/ai-for-india-2-0">
                          <h6>REFERRAL</h6>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://forum.guvi.in/?_gl=1%2aqgi2fk%2a_gcl_au%2aMjExMTcxMzUwMC4xNjkxNDc4NTM4">
                          <h6>FORUM SUPPORT</h6>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://www.guvi.in/blog/?_gl=1*1mhvoz6*_gcl_au*MjExMTcxMzUwMC4xNjkxNDc4NTM4">
                          <h6>BLOGS</h6>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                    <NavDropdown title="OUR PRODUCTS" id="basic-nav-dropdown">
                      <NavDropdown.Item href="https://www.hackerkid.org/">
                        Hacker Kid
                      </NavDropdown.Item>
                      <p>Coding classes platform for K-12 children</p>
                      <NavDropdown.Item href="https://www.guvi.in/mlp/GUVI-for-corporates">
                        GUVI for Corporates
                      </NavDropdown.Item>
                      <p>Meet your hiring needs at ease</p>
                    </NavDropdown>
                  </Nav>
                </Col>
              </Row>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="container-fluid">
              <Row className="justify-content-center">
                <Col>
                  <div className="container-fluid">
                    <div className="container">
                      <div className="col-12 mb-3 ">
                        <Image
                          src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png"
                          fluid
                        />
                        <Nav variant="underline" defaultActiveKey="/home">
                          <Nav.Item>
                            <Nav.Link href="/all">All</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link href="/fullstackdevelopment">
                              FullStackDevelopment
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link href="/datascience">DataScience</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link href="/cybersecurity">
                              CyberSecurity
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link href="/career">Career</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/all" Component={All} />
        <Route path="/fullstackdevelopment" Component={FullStackDevelopment} />
        <Route path="/datascience" Component={DataScience} />
        <Route path="/cybersecurity" Component={CyberSecurity} />
        <Route path="/career" Component={Career} />
      </Routes>
    </div>
  );
}
export default App;