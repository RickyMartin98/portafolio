import React from "react";

interface Heading {
  name: string,
  profession: string
};

interface Props {
  heading: Heading
}

const Header: React.FC<Props> = (props) => {
  const { name, profession } = props.heading;
  return (
    <div>
      <h1> {name} </h1>
      <h3> {profession} </h3>
    </div>
  );
};

export default Header;