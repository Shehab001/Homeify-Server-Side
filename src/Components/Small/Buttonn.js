import { Button } from "@mui/material";
import React from "react";

const Buttonn = (props) => {
  //props && console.log("hi", props);
  return (
    <>
      <Button
        sx={{
          backgroundColor: "#222222",
          color: "white",
          borderRadius: 0,
          float: "left",
          py: { sm: "2px", md: "12px" },
          px: { sm: "20px", md: "40px" },
          mt: "20px",
          "&:hover": {
            background: "#6e3e37",
          },
        }}
      >
        {props.name}
      </Button>
    </>
  );
};

export default Buttonn;
