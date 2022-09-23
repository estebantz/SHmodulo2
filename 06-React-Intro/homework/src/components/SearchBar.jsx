import React from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  // acá va tu código

  return (
    <div>
      <input type="text" placeholder="Ciudad..." />
      <button onClick={() => props.onSearch("Buscando ciudad")}>Buscar</button>
    </div>
  );
}
