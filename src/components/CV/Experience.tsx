import React from "react";

import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IoEllipse } from 'react-icons/io5';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


interface Experience {
  duration: string;
  projectName: string;
  rol: string;
  technologies: string[];
  activities: string[];
}

const styles = (theme: unknown) => ({
  listItemText: {
    fontFamily: "Poppins"
  }
});


const Experience: React.FC<Experience> = (props) => {
  const { duration, projectName, rol, technologies, activities } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Box sx={{width: "40%"}}>
        <Typography variant="h5">{duration}</Typography>
      </Box>
      <div
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Typography variant="h5">{projectName}</Typography>
        <div>
        <Typography
              component="span"
              sx={{ fontSize: "16px", fontFamily: "Poppins" }}
            >
              {rol} {" "} ({technologies.map((tech) => tech + ", ")})
            </Typography>
          <List sx={{fontSize: "16px"}}>
            {activities.map((activitie) => (
              <ListItem sx={{paddingLeft: "0"}}>
                <ListItemIcon sx={{color: "#FFF"}}>
                  <IoEllipse />
                </ListItemIcon>
                <ListItemText primary={`${activitie}.`} primaryTypographyProps={{fontSize: "16px", fontFamily: "Poppins"}} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};

export default Experience;
