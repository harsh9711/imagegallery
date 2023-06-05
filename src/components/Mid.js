import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Mid = ({ value, setValue }) => {
  return (
    <>
      <div className="Mid-container">
        <div className="Mid-info">
          <div className="Mid-title">
            <h1>Download High Quality Images by creators</h1>
          </div>
          <div className="Mid-desc">
            <p>Over 2.4 million+ stock Images by our talented community</p>
          </div>
          <div className="Mid-input-container">
            <SearchIcon className="Mid-search-icon" />
            <input
              className="Mid-input"
              placeholder="Search high resolution Images, categories, wallpapers"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mid;
