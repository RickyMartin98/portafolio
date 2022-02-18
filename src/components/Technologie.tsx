import React, { FunctionComponent } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as Icons from "react-icons/io5";
//import { makeStyles } from "@mui/styles";

import styles from './Technologie.module.css';

import TechnologieModel from "../models/TechnologieModel";
//import { ThemeProvider } from '@mui/private-theming';
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: 24,
  },
});

const Technologie: FunctionComponent<TechnologieModel> = (props) => {
  const { name, Icon } = props;

  return (
    <Box>
      <Stack>
      <Icon className={styles.icon} />
        <ThemeProvider theme={theme}>
          <Typography variant="body1" component="span">
            {name}
          </Typography>
        </ThemeProvider>
      </Stack>
    </Box>
  );
};

export default Technologie;
