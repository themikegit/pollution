(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{16:function(e,t,a){e.exports=a(43)},21:function(e,t,a){},22:function(e,t,a){},40:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),s=(a(21),a(15)),u=(a(22),a(13)),i=a.n(u),o=(a(40),a(14));function d(e){var t=e.city,a=e.aqius,n=e.tp,c=e.ts,l=e.hu,s="";switch(!0){case a<50:s="Good";break;case a<100:s="Moderate";break;case a<150:s="Unhealth for certain";break;case a<200:s="Unhealthy";break;case a<300:s="Very Unhealthy";break;case a<500:s="Hazardous"}var u=new Date(c).toLocaleDateString();return r.a.createElement("div",{className:"wrap"},r.a.createElement("p",null," ",u," "),r.a.createElement("h2",null,t," "),r.a.createElement(o.a,{stepsColors:["#4265D7","#4265D7","#4265D7","#4265D7","#4265D7","#4265D7"],value:a,maxValue:500,textStyle:{fontSize:"22px"},style:{backgroundColor:"white",boxShadow:"-8px 0px 15px 0px #d0d0d0",padding:"20px",borderRadius:"120px"}}),r.a.createElement("div",{className:"desc"},r.a.createElement("p",null," Air Polution "),r.a.createElement("h3",null,s," ")),r.a.createElement("div",{className:"indicators"},r.a.createElement("div",{className:"other"},r.a.createElement("p",null," Hum: "),r.a.createElement("h1",null," ",l,"% ")),r.a.createElement("div",{className:"temp"},r.a.createElement("p",null," temp: "),r.a.createElement("h1",null,n,"\xb0"))))}var p=function(){var e=Object(n.useState)({city:"",aqius:""}),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){i.a.get("https://api.airvisual.com/v2/city?city=Belgrade&state=Central-Serbia&country=Serbia&key=66945069-266e-4ac7-8756-56f354653a92").then((function(e){console.log("res",e);var t=e.data;c({city:t.data.city,aqius:t.data.current.pollution.aqius,tp:t.data.current.weather.tp,hu:t.data.current.weather.hu,ts:t.data.current.weather.ts})}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(d,{city:a.city,aqius:a.aqius,tp:a.tp,ts:a.ts,hu:a.hu})," ")};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1b031a26.chunk.js.map