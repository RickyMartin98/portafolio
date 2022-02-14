import React from "react";

import cv from '../../asstes/cv.json';
import Header from "./Header";
import Experience from "./Experience";
import Skill from "./Skill";
import Footer from "./Footer";

const CV: React.FC = () => {
  console.log(cv);
  return (
    <div style={{
      width: "90%"
    }}>
      <Header heading={cv.heading} />
      <div
        className="about-education"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div
          className="about"
          style={{
            width: "45%",
          }}
        >
          <h3>{cv.about["about-me"]}</h3>
          <p>{cv.about.content}</p>
        </div>
        <div
          className="education"
          style={{
            width: "45%",
          }}
        >
          <h3>{cv.education.title}</h3>
          <div>
            {cv.education.generation} * {cv.education.degree}
          </div>
        </div>
      </div>
      <div className="experience-container">
        <div className="experience">
          <h3>{cv.experience.title}</h3>
          {cv.experience?.works?.map((exp) => (
            <Experience
              duration={exp.duration}
              projectName={exp["project-name"]}
              rol={exp.rol}
              technologies={exp.technologies}
              activities={exp.activities}
            />
          ))}
        </div>
      </div>
      <div className="skills">
        <h3>{cv.skills.title}</h3>
        <ul style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "wrap",
              height: "150px",
              alignContent: "stretch"
        }}>
          {cv.skills?.technologies?.map((skill) => (
            <Skill skill={skill} />
          ))}
        </ul>
      </div>
      <Footer
        phone={cv.contact.phone}
        mail={cv.contact.mail}
      />
    </div>
  );
};

export default CV;
