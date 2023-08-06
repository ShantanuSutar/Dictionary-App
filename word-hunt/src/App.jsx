import { useEffect, useState } from "react";
import "./App.css";
import { Container, Switch } from "@mui/material";
import axios from "axios";
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [lightMode, setLightMode] = useState(false);

  const label = { inputProps: { "aria-label": "Color switch demo" } };

  const CustomSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: grey[600],
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: grey[600],
    },
  }));

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      console.log(data);
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: lightMode ? "#fff" : "#282c34",
        color: lightMode ? "black" : "white",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{lightMode ? "Dark" : "Light"}</span>
          <CustomSwitch
            {...label}
            checked={lightMode}
            onChange={() => setLightMode(!lightMode)}
          />
        </div>
        <Header
          word={word}
          setWord={setWord}
          category={category}
          setCategory={setCategory}
          lightMode={lightMode}
        />
        {meanings && (
          <Definitions
            word={word}
            meanings={meanings}
            category={category}
            lightMode={lightMode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
