import React from "react";
import Switch from "@mui/material/Switch";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const label = { inputProps: { "aria-label": "Switch demo" } };

const darkTheme = createTheme({
  palette: {
    secondary: {
      // This is white as hex.
      main: "#ffffff",
    },
  },
});

const Navbar = ({ isActive, setIsActive, value, setValue }) => {
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="Navbar-div">
        <div className="Navbar-container">
          <div className="Navbar-wrapper">
            <div className="Navbar-left">
              <h1 className="Navbar-title">Image Gallery</h1>
            </div>
            <div className="Navbar-center">
              <div className="Navbar-input-container">
                <SearchIcon className="Navbar-search-icon" />
                <input
                  style={{color: isActive ? "white" : "black"}}
                  className="Navbar-input"
                  placeholder="Search images here"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="Navbar-right">
              <div className="Navbar-right-info">
                <div className="Navbar-extra">
                  <span>Explore</span>
                  <span>Connection</span>
                  <span>Community</span>
                </div>
                <div className="Navbar-dark-mode">
                  <div className="Navbar-dark-mode-title">Dark Mode</div>
                  <ThemeProvider className="Navbar-switch" theme={darkTheme}>
                    <Switch
                      {...label}
                      size="small"
                      color="secondary"
                      onClick={handleClick}
                    />
                  </ThemeProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
