import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: "center",
    width: "90%",
    borderTop: "1px solid",
    margin: "auto",
    }}>
      <p style={{
        fontSize: "16px"
      }}> &copy; Martin Fernandez  {new Date().getFullYear()} </p>
    </footer>
  );
};

export default Footer;