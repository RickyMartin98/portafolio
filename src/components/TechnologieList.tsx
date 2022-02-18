import React from 'react';
import Box from '@mui/material/Box';

import Technologie from './Technologie';
import TechnologieModel from '../models/TechnologieModel';

interface Props {
  skills: TechnologieModel[]
};

const TechnologieList: React.FC<Props> = (props) => {
  const { skills } = props;
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly"
    }}>
      {
        skills?.map(skill => (
          <Technologie
            name={skill.name}
            Icon={skill.Icon}
          />
        ))
      }
    </Box>
  );
}

export default TechnologieList;