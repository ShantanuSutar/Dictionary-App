import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [meanings, setMeanings] = useState([]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );

      // console.log(data);
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, []);

  return (
    <div>
      <h1>Shantanu</h1>
    </div>
  );
}

export default App;
