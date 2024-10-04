import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import OutlinedArrow from "../../assets/arrow-down-outlined.svg";
const Sorting = () => {
  const [sort, setSort] = useState("top-match");

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "flex-end", columnGap: "5px", alignItems: "center", marginBottom: "20px" }}
    >
      Sorting by:
      <Select
        value={sort}
        onChange={handleChange}
        variant="standard"
        sx={{
          color: "#48A74C",
          "&:before": {
            borderBottom: "none !important",
          },
          "&:after": {
            borderBottom: "none !important",
          },
        }}
        IconComponent={() => <img src={OutlinedArrow} alt="arrow" />}
      >
        <MenuItem value="top-match">Top match</MenuItem>
        <MenuItem value="newest">Newest</MenuItem>
        <MenuItem value="latest">Latest</MenuItem>
      </Select>
    </Box>
  );
};

export default Sorting;
