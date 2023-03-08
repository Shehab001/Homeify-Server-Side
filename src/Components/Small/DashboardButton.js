import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Tilt from "react-tilt";

const DashboardButton = (props) => {
  return (
    <Box>
      <Tilt className="Tilt" options={{ max: 15, scale: 1, speed: 100 }}>
        <Box p={1}>
          <Typography
            sx={{
              fontFamily: "jest",
              py: 2,
              letterSpacing: "2px",
              color: "black",
              backgroundColor: "#f6f6f4",
              cursor: "pointer",
            }}
          >
            {props.name}
          </Typography>
        </Box>
      </Tilt>
    </Box>
  );
};

export default DashboardButton;
