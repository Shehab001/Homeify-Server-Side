import { Box } from "@mui/material";
import React from "react";
import SearchField from "react-search-field";

const SearchBar = () => {
  const onChange = () => {};
  return (
    <Box>
      <SearchField
        height={50}
        placeholder="Search..."
        onChange={onChange}
        classNames="test-class"
      />
    </Box>
  );
};

export default SearchBar;
