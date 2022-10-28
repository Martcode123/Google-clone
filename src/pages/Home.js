import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import Search from "./Search";
import { Avatar } from "@mui/material";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header--left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__header--right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img className="google__img"
          src="https://trueinteractive.com/wp-content/uploads/2018/11/fixed-google-logo-font.png"
          alt=""
          />
          
        <div className="home__input--container">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
