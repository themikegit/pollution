import React from "react";
import "./styling.css";
import ReactStoreIndicator from "react-score-indicator";

export default function Card({ city, aqius, tp }) {
 let des = "";
 switch (true) {
  case aqius < 50:
   des = "Good";
   break;
  case aqius < 100:
   des = "Moderate";
   break;
  case aqius < 150:
   des = "Unhealth for certain";
   break;
  case aqius < 200:
   des = "Unhealthy";
   break;
  case aqius < 300:
   des = "Very Unhealthy";
   break;
  case aqius < 500:
   des = "Hazardous";
   break;
 }

 return (
  <div className="wrap">
   <ReactStoreIndicator
    stepsColors={[
     "#3da940",
     "#3da940",
     "#3da940",
     "#53b83a",
     "#ed8d00",
     "#d12000"
    ]}
    value={aqius}
    maxValue={500}
   />
   <h3> {des} </h3>
   <h2> {city} </h2>
   <p> temp: {tp} </p>
   <div className="indicator"></div>
  </div>
 );
}
