import React from 'react';

import { Typography } from '@mui/material';
import AboutModel from '../../models/AboutModel';



const About:React.FC<AboutModel> = (props) => {
  const { aboutMe, content } = props;
  return (
    <>
      <Typography variant='h3'sx={{ fontSize: "1.17em", fontWeight: "bold", margin: "1em 0" }}>
          {aboutMe}
      </Typography>
      <Typography sx={{ fontFamily: "Poppins"}}>
        {content}
      </Typography>
    </>
  );
};

export default About;