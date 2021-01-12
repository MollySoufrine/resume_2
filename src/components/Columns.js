import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import resume from "../resume.json";
import "../css/column.css";

function Column() {
  return (
    <Container className="column">
      {/* Stack the columns on mobile by making one full-width and the other half-width */}

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row className="row-one">
        <Col className="skills" md={4}>
          <h3 className="title">Technical Skills</h3>
          {resume.skills.map((skills) => (
            <li>{skills}</li>
          ))}
        </Col>
        <Col className="experience" md={8}>
          <h3 className="title">Experience</h3>{" "}
          {resume.work.map((work) => (
            <p>
              <strong>{work.company}</strong> {work.position} {work.startDate}{" "}
              <br />
              {work.description} <br />
              {work.highlights}{" "}
            </p>
          ))}
        </Col>
      </Row>

      <Row>
        <Col className="education">
          <h3 className="title">Education</h3>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          {resume.education.map((educationInfo) => (
            <p className="education-ptag">
              {educationInfo.institution} {educationInfo.area}{" "}
              {educationInfo.studyType} {educationInfo.endDate}
            </p>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
export default Column;
