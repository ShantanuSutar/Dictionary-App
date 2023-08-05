import React from "react";
import "./Header.css";
import { MenuItem, TextField, ThemeProvider, createTheme } from "@mui/material";
import categories from "../../data/category";

const Header = ({ word, setWord, category, setCategory }) => {
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
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a Word"
            id="standard-basic"
            variant="standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />

          <TextField
            className="select"
            select
            label="Language"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
