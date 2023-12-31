import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings, category, lightMode }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <div
          className={
            meanings[0].phonetics[0] && meanings[0].phonetics[0].audio
              ? "audio"
              : "audio hidden"
          }
        >
          <iframe
            title="audio"
            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          >
            Shantanu
          </iframe>
        </div>
      )}
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: lightMode ? "#3b5360" : "white",
                  color: lightMode ? "white" : "black",
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example: </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms: </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
