import React from "react";
import "./styling.css";
export default function Card({ city, aqius }) {
 return (
  <div className="wrap">
   <h2> {city} </h2>
   <div className="indicator">
    <h1> {aqius} </h1>
   </div>
  </div>
 );
}
