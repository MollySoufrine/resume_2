import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import resume from "../resume.json";

import "../css/basics.css";
function Basics() {
  return (
    <Container className="basics-container">
      <Row className="basics">
        <Col className="name">
          {resume.basics.map((basic) => (
            <h1 className="basics-name">{basic.name}</h1>
          ))}
        </Col>
        <Col className="contact">
          {resume.basics.map((basic) => (
            <h3 className="basic-info">
              {basic.label} <br />
              {basic.email} <br />
              <a
                className="pure-button fab fa-linkedin"
                href="https://www.linkedin.com/in/molly-soufrine-449b811a6/"
              ></a>
              {"  "}
              <a
                className="pure-button fab fa-github"
                href="https://github.com/MollySoufrine?tab=repositories"
              >
                <br />
              </a>
            </h3>
          ))}
        </Col>
      </Row>
      <Row>
        <Col className="summary">
          {resume.summary.map((summary) => (
            <div className="summary-section">
              <li>{summary}</li>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
export default Basics;
