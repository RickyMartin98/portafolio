import React from 'react';

interface Props {
  phone: string,
  mail: string
};

const Footer: React.FC<Props> = (props) => {
  const { phone, mail } = props;
  return (
    <div style={{
      borderTop: "3px solid grey"
    }}>
      <ul style={{
        display: "flex",
        justifyContent: "space-evenly"
      }}>
        <li>{phone}</li>
        <li>{mail}</li>
      </ul>
    </div>
  );
};

export default Footer;