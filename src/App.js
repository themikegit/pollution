import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./Card";

function App() {
 const [poll, setPoll] = useState({ city: "", aqius: "" });
 useEffect(() => {
  axios
   .get(
    `https://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=66945069-266e-4ac7-8756-56f354653a92`
   )
   .then(res => {
    console.log("res", res);
    const results = res.data;
    setPoll({
     city: results.data.city,
     aqius: results.data.current.pollution.aqius
    });
   });
 }, []);
 console.log(poll);
 return (
  <div className="App">
   {" "}
   <Card city={poll.city} aqius={poll.aqius} />{" "}
  </div>
 );
}

export default App;

// Object
// data:
// city: "Los Angeles"
// country: "USA"
//current.pollution.aqius
// pollution:
// aqicn: 24
// aqius: 62
// maincn: "p2"
// mainus: "p2"
// ts: "2020-07-01T12:00:00.000Z"
// __proto__: Object
//weather:
// hu: 68
// ic: "04n"
// pr: 1012
// tp: 17
// ts: "2020-07-01T12:00:00.000Z"
// wd: 0
// ws: 1.5
// __proto__: Object
// __proto__: Object
// location: {type: "Point", coordinates: Array(2)}
// state: "California"
// __proto__: Object
// status: "success"
// __proto__: Object
