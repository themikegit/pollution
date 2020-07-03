import React from "react";
import "./styling.css";
import ReactStoreIndicator from "react-score-indicator";

export default function Card({ city, aqius, tp, ts, hu }) {
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
 let dt = new Date(ts).toLocaleDateString();

 return (
  <div className="wrap">
   <p> {dt} </p>
   <h2>{city} </h2>
   <ReactStoreIndicator
    stepsColors={[
     "#4265D7",
     "#4265D7",
     "#4265D7",
     "#4265D7",
     "#4265D7",
     "#4265D7"
    ]}
    value={aqius}
    maxValue={500}
    textStyle={{ fontSize: "22px" }}
    style={{
     backgroundColor: "white",
     boxShadow: "-8px 0px 15px 0px #d0d0d0",
     padding: "20px",
     borderRadius: "120px"
    }}
   />
   <div className="desc">
    <p> Air Polution </p>
    <h3>{des} </h3>
   </div>

   <div className="indicators">
    <div className="other">
     <p> Hum: </p>
     <h1> {hu}% </h1>
    </div>
    <div className="temp">
     <p> temp: </p>
     <h1>{tp}&deg;</h1>
    </div>
   </div>
  </div>
 );
}
