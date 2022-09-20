import React from "react";

export default function Card(props) {
  // acá va tu código

  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h3>{props.name}</h3>
      <h5>max: {props.max}</h5>
      <h5>min: {props.min}</h5>
      <img
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="img clima"
      />
    </div>
  );
}
