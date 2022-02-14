import React from "react";

interface Experience {
  duration: string;
  projectName: string;
  rol: string;
  technologies: string[];
  activities: string[];
}

const Experience: React.FC<Experience> = (props) => {
  const { duration, projectName, rol, technologies, activities } = props;
  return <div style={{
    display: "flex",
    justifyContent: "space-evenly"
  }}>
    <div style ={{
      width: "40%"
    }}>
      {duration}
    </div>
    <div style={{
      width: "40%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      alignContent: "center"
    }}>
      <h3 style={{
        margin: 0
      }}>{projectName}</h3>
      <div>
        <span style={{
          fontSize: "17px"
        }}>
        <span>{rol}</span>
        <span> ({technologies.map(tech => tech + ", ")})</span>
        </span>
        <ul style={{
          textAlign: "justify",
          fontSize: "17px"
        }}>
          {activities.map(activitie => <li>{activitie}</li>)}
        </ul>
      </div>

    </div>
  </div>;
};

export default Experience;
