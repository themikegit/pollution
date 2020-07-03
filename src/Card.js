import React, { useState, useEffect } from "react";
import "./styling.css";
import axios from "axios";
import ReactStoreIndicator from "react-score-indicator";

export default function Card() {
 const [poll, setPoll] = useState({ city: "", aqius: "" });
 useEffect(() => {
  axios
   .get(
    `https://api.airvisual.com/v2/city?city=Belgrade&state=Central-Serbia&country=Serbia&key=66945069-266e-4ac7-8756-56f354653a92`
   )
   .then(res => {
    console.log("res", res);
    const results = res.data;
    setPoll({
     city: results.data.city,
     aqius: results.data.current.pollution.aqius,
     tp: results.data.current.weather.tp,
     hu: results.data.current.weather.hu,
     ts: results.data.current.weather.ts,
     ic: ` https://airvisual.com/images/${results.data.current.weather.ic}.png`
    });
   });
 }, []);
 let des = "";
 if (poll.aqius <= 50) {
  des = "Good";
 } else if (poll.aqius <= 100 && poll.aqius <= 150) {
  des = "Moderate";
 } else if (poll.aqius <= 150 && poll.aqius <= 200) {
  des = "Unhealth for certain";
 } else if (poll.aqius <= 200 && poll.aqius <= 300) {
  des = "Unhealth";
 } else if (poll.aqius <= 300 && poll.aqius <= 500) {
  des = "Hazardous";
 }
 let dt = new Date(poll.ts).toLocaleDateString();

 return (
  <div className="wrap">
   <p> {dt} </p>
   <h2>{poll.city} </h2>
   <ReactStoreIndicator
    stepsColors={[
     "#4265D7",
     "#4265D7",
     "#4265D7",
     "#4265D7",
     "#4265D7",
     "#4265D7"
    ]}
    value={poll.aqius}
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
     <img src="https://img.icons8.com/fluent/48/000000/water.png" />
     <p> Hum: </p>
     <h1> {poll.hu}% </h1>
    </div>
    <div className="temp">
     {<img style={{ width: "50px", height: "50px" }} src={poll.ic} />}

     <p> temp: </p>
     <h1>{poll.tp}&deg;</h1>
    </div>
   </div>
  </div>
 );
}
