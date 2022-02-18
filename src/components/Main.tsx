import React from "react";
import Container from "@mui/material/Container";
import {
  IoLogoReact,
  IoLogoNodejs,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoSteam,
  IoLogoJavascript,
} from "react-icons/io5";

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import TechnologieList from "./TechnologieList";
import CustomLink from "./ui/Link";

const techArr2 = [
  { name: "React Js", Icon: IoLogoReact },
  { name: "Node Js", Icon: IoLogoNodejs },
  { name: "Github", Icon: IoLogoGithub },
  { name: "LindedIn", Icon: IoLogoLinkedin },
  { name: "Javascript", Icon: IoLogoJavascript },
];

const Main:React.FC = () => {
  return (
    <Container>
      <Header />
      <h1>Hi There!</h1>
      <h2>Thank you for being here :)</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          alignContent: "center",
          justifyContent: "space-around",
        }}
      >
        <p
          style={{
            width: "50%",
            padding: "20px",
            border: "7px solid #F037A5",
            borderRadius: "10px",
            fontFamily: "Poppins"
          }}
        >
          I'm <code style={{ color: "#F037A5" }}>Martin Fernandez</code> and I'm
          a<code style={{ color: "#F037A5" }}> Software Developer </code> from{" "}
          <code> México. </code>
        </p>
        <p
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-evenly"
          }}
        >
          <CustomLink to="/cv">See CV</CustomLink>
          <CustomLink to="/cv" size="30%">Download CV</CustomLink>
        </p>
      </div>
      <TechnologieList skills={techArr2} />
      {/* <Outlet /> */}
      <Footer />
    </Container>
  );
};

export default Main;
