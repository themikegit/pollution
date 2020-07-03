import React, { Suspense, lazy } from "react";
import "./App.css";
const Card = React.lazy(() => import("./Card"));

function App() {
 return (
  <div className="App">
   <Suspense fallback={<div>loading...</div>}>
    <Card />
   </Suspense>
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
