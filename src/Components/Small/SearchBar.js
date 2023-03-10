import { Box } from "@mui/material";
import React, { useContext } from "react";
import SearchField from "react-search-field";
import { AuthContext } from "../../Context/Context";

const SearchBar = () => {
  const { setList, search } = useContext(AuthContext);

  return (
    <Box sx={{ ml: { sm: -5 } }}>
      <SearchField
        height={50}
        placeholder={search}
        onChange={(event) => {
          setList(event);
        }}
        classNames="test-class"
      />
    </Box>
  );
};

export default SearchBar;
