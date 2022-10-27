import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";

function Search() {
  const [input, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();
  };
  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__input--icon" />
        <input value={input} onChange={e => setInput(e.target.value)}/>
        <MicIcon />
      </div>
      <div className="search__btns">
        <Button onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">Made by martcode123</Button>
      </div>
    </div>
  );
}

export default Search;
