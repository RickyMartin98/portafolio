import React from "react";
import { Link } from 'react-router-dom';
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

const Main = () => {
  return (
    <div>
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
          }}
        >
          I'm <code style={{ color: "#F037A5" }}>Martin Fernandez</code> and I'm
          a<code style={{ color: "#F037A5" }}> Software Developer </code> from{" "}
          <code> México. </code>
        </p>
        <p>
          <Link
            to="/cv"
            style={{
              margin: "0 20px",
              width: "100px",
              height: "40px",
              backgroundColor: "transparent",
              color: "rgb(240, 55, 165)",
              border: "3px solid",
              borderRadius: "5px",
              fontSize: "17px",
              textDecoration: "none",
              lineHeight: "40px",
            }}
          >
            See CV
          </Link>
          <button
            style={{
              margin: "0 20px",
              width: "120px",
              height: "40px",
              backgroundColor: "transparent",
              color: "rgb(240, 55, 165)",
              border: "3px solid",
              borderRadius: "5px",
            }}
          >
            Download CV
          </button>
        </p>
      </div>
      <div
        className="tecnologies"
        style={{
          width: "60%",
          height: "120px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IoLogoReact
            style={{
              width: "90px",
              height: "100px",
              color: "#F037A5",
            }}
          />{" "}
          <span>React Js</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IoLogoNodejs
            style={{
              width: "90px",
              height: "100px",
              color: "#F037A5",
            }}
          />{" "}
          <span>Node Js</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IoLogoGithub
            style={{
              width: "90px",
              height: "100px",
              color: "#F037A5",
            }}
          />{" "}
          <span style={{}}>Github</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IoLogoJavascript
            style={{
              width: "90px",
              height: "100px",
              color: "#F037A5",
            }}
          />{" "}
          <span style={{}}>Javascript</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IoLogoSteam
            style={{
              width: "90px",
              height: "100px",
              color: "#F037A5",
            }}
          />{" "}
          <span style={{}}>Steam</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IoLogoLinkedin
            style={{
              width: "90px",
              height: "100px",
              color: "#F037A5",
            }}
          />{" "}
          <span style={{}}>LinkedIn</span>
        </div>
      </div>
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
};

export default Main;
