import React from "react";
import style from "./Nav.module.css";
import SearchBar from "./SearchBar";

export default function Nav(props) {
  return (
    <>
      <div className={style.mainNav}>
        <h1>Esteban Weather App</h1>
        <SearchBar className={style.Searchbar} onSearch={onSearch} />
      </div>
    </>
  );
}
