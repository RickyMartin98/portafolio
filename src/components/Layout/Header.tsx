import React from 'react';
import { IoPlanetSharp } from 'react-icons/io5';

const Header: React.FC = () => {
  return (
    <nav style={{
      display: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "60px"
    }}>
      <div>
        <IoPlanetSharp style={{
          width: "90px",
          height: "100px",
          color: "#F037A5"
        }}/>
      </div>
    </nav>
  );
};

export default Header;