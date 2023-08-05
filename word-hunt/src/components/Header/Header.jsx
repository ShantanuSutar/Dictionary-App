import React from "react";
import "./Header.css";
import { MenuItem, TextField, ThemeProvider, createTheme } from "@mui/material";
import categories from "../../data/category";

const Header = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  return (
    <div className="header">
      <span className="title">Word Hunt</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField id="standard-basic" label="Standard" variant="standard" />

          <TextField
            id="standard-select-currency"
            select
            label="Select"
            helperText="Please select your currency"
            variant="standard"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
