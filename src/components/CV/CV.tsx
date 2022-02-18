import React from "react";

import cv from '../../asstes/cv.json';
import Header from "./Header";
import Experience from "./Experience";
import Skill from "./Skill";
import Footer from "./Footer";
import Education from './Education';
import About from "./About";
import Typography from '@mui/material/Typography';

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
          <About 
            content={cv.about.content}
            aboutMe={cv.about["about-me"]}
          />
        </div>
        <div
          className="education"
          style={{
            width: "45%",
          }}
        >
          <Education 
            title={cv.education.title}
            degree={cv.education.degree}
            generation={cv.education.generation}
          />
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
        <Typography variant="h3" sx={{fontSize: "1.17em"}}>{cv.skills.title}</Typography>
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
