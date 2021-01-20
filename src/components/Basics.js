import React from "react";

import resume from "../resume.json";

function Basics() {
  return (
    <div className="basics">
      <div className="name">
        {resume.basics.map((basic) => (
          <h1 className="basics-name">{basic.name}</h1>
        ))}
      </div>
      <div className="contact">
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
      </div>

      <div className="summary">
        {resume.summary.map((summary) => (
          <div className="summary-section">
            <li>{summary}</li>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Basics;
