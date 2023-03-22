import { Box, TextField } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      height: "26px", // change the height to your desired value
      borderRadius: 0,
    },
  },
});

const SearchBar = () => {
  const { setList, search } = useContext(AuthContext);

  const classes = useStyles();
  return (
    <Box sx={{ ml: { sm: -5 } }}>
      <TextField
        variant="outlined"
        className={classes.root}
        placeholder={search}
        onChange={(event) => {
          setList(event.target.value);
        }}
      />
    </Box>
  );
};

export default SearchBar;
