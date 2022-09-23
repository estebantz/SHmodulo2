import React, { Fragment } from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <Fragment>
      <img src={Logo} alt="asd" />
      <span>Esteban weather app</span>
      <SearchBar onSearch={onSearch} />
    </Fragment>
  );
}

export default Nav;
