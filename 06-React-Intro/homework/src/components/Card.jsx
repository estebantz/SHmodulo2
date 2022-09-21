import React from "react";
import style from "./Card.module.css";

export default function Card(props) {
  // acá va tu código

  return (
    <div className={style.mainCard}>
      <button className={style.btn} onClick={props.onClose}>
        X
      </button>
      <h3>{props.name}</h3>
      <div>
        <p>Min</p>
        <p>{props.min}</p>
        <p>Max</p>
        <p>{props.max}</p>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="img clima"
      />
    </div>
  );
}
