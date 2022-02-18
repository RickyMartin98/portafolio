import React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import EducationModel from '../../models/EducationModel';

const Education: React.FC<EducationModel> = (props) => {
  const { degree, generation, title } = props;
  return (
    <>
      <Typography variant='h3' component="h3" sx={{ fontSize: "1.17em", fontWeight: "bold", margin: "1em 0" }}>
        {title}
      </Typography>
      <Typography sx={{fontFamily: "Poppins"}}>
        {generation} * {degree}
      </Typography>
    </>
  );
};

export default Education;