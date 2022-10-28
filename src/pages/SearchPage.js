import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../components/StateProvider";
import useGoogleSearch from "../components/useGoogleSearch";
import Response from "../components/Response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term)



  // https://developers.google.com/custom-search/v1/using_rest

  console.log(data);
  return (
    <div className="search__page">
      <div className="search__page--header">
        <Link to="/">
          <img
            className="search__page--logo"
            src="https://trueinteractive.com/wp-content/uploads/2018/11/fixed-google-logo-font.png"
            alt=""
          />
        </Link>
        <div className="search__page--headerBody">
          <Search hideButtons />
          <div className="search__page--options">
            <div className="search__page--options__left">
              <div className="search__page--option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="search__page--option">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="search__page--option">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>
              <div className="search__page--option">
                <LocalOfferIcon />
                <Link to="/all">Shopping</Link>
              </div>
              <div className="search__page--option">
                <RoomIcon />
                <Link to="/all">Maps</Link>
              </div>
              <div className="search__page--option">
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="search__page--options__right">
              <div className="search__page--option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="search__page--option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="search__page--results">
          <p className="search__page--result__count">
            About {data?.searchInformation.formattedTotalResults} results from
            martcode123 ({data?.searchInformation.formattedSearchTime} seconds)
            for {term}
          </p>
          {data?.items.map((item) => (
            <div className="search__page--result">
              <a className="search__page--result" href={item.link}>
                {item.pagemap?.cse_image?.
                length > 0 && 
                item.pagemap?.cse_image
                [0]?.src && (
                  <img 
                      className="search__page--result__image"
                      src={
                        item.pagemap?.
                        cse_image?.length
                        > 0 &&
                        item.pagemap?.
                        cse_image[0]?.src
                      }
                      alt=""
                  />
                )}

                {item.displayLink}
              </a>
              <a className="search__page--result__title" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="search__page--result__snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
