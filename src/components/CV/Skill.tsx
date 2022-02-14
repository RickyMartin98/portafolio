import React from 'react';

interface Props {
  skill: string
};

const Skill: React.FC<Props> =  (props) => {
  return (
    <li>{props.skill}</li>
  );
};

export default Skill;