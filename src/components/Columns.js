import React from "react";

import resume from "../resume.json";

function Column() {
  return (
    <div className="column">
      <h3 className="title">Education</h3>
      <div className="education">
        {resume.education.map((educationInfo) => (
          <p>
            {educationInfo.institution} {educationInfo.area}{" "}
            {educationInfo.studyType} {educationInfo.endDate}
          </p>
        ))}
      </div>

      {/* Stack the columns on mobile by making one full-width and the other half-width */}

      {/* Columns are always 50% wide, on mobile and desktop */}
      <div className="second-portion">
        <div className="skills">
          <h3 className="title">Technical Skills</h3>
          {resume.skills.map((skills) => (
            <li>{skills}</li>
          ))}
        </div>
        <div className="experience">
          <h3 className="title">Experience</h3>{" "}
          {resume.work.map((work) => (
            <p>
              <p className="work-company">Company: {work.company}</p>
              <br /> <p className="position">Position: {work.position}</p> Start
              Date: {work.startDate} <br />
              {work.description} <br />
              <br />
              Highlights: <li className="highlights">{work.highlights}</li>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Column;
