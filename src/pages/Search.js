import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../components/StateProvider";
import { actionTypes } from "./reducer";


function Search({ hideButtons= false }) {
  const [{}, dispatch] = useStateValue()
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log("you hit search >>", input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input 
    })
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__input--icon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search Google or type a URL"
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__btns">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">Made by martcode123</Button>
        </div>
      ) : (
        <div className="search__btns">
          <Button className="search__btns--Hidden" type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button className="search__btns--Hidden" variant="outlined">Made by martcode123</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
