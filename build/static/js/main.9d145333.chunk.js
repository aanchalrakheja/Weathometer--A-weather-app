(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{13:function(e,s,c){"use strict";c.r(s);var a=c(1),t=c.n(a),i=c(5),r=c.n(i),n=c(4),d=c.n(n),j=c(6),l=c(2),h=c(0);var m=function(e){return Object(h.jsxs)("div",{className:"city-component",children:[Object(h.jsxs)("div",{className:"search-bar",children:[Object(h.jsx)("i",{className:"fas fa-times-circle"}),Object(h.jsx)("input",{type:"text",placeholder:"Search for places ...",onInput:e.handleInput,value:e.input}),Object(h.jsx)("i",{className:"fas fa-search-location",onClick:e.handleClick})]}),e.loading?Object(h.jsx)(h.Fragment,{children:" "}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"location",children:[Object(h.jsx)("i",{className:"fas fa-map-marker-alt"}),Object(h.jsxs)("span",{children:[e.weather.location.name,", "]}),Object(h.jsx)("span",{children:e.weather.location.country})]}),Object(h.jsx)("div",{className:"weather-img",children:Object(h.jsx)("img",{src:e.weather.current.condition.icon,alt:"weather-img"})}),Object(h.jsxs)("div",{className:"weather-info",children:[Object(h.jsxs)("div",{className:"temp",children:[e.weather.current.temp_c,Object(h.jsxs)("sup",{children:[Object(h.jsx)("sup",{children:"."}),"C"]})]}),Object(h.jsx)("div",{className:"date-time",children:Object(h.jsx)("span",{className:"day",children:e.weather.forecast.forecastday[0].date.split("-").reverse().join("/")})}),Object(h.jsxs)("div",{className:"min-temp",children:["MIN : ",e.weather.forecast.forecastday[0].day.mintemp_c," ",Object(h.jsxs)("sup",{children:[Object(h.jsx)("sup",{children:"."}),"C"]})," "]}),Object(h.jsxs)("div",{className:"max-temp",children:["MAX : ",e.weather.forecast.forecastday[0].day.maxtemp_c," ",Object(h.jsxs)("sup",{children:[Object(h.jsx)("sup",{children:"."}),"C"]})]})]})]})]})};var o=function(e){return Object(h.jsxs)("div",{className:"week-weather",children:[Object(h.jsxs)("div",{className:"day",children:[Object(h.jsx)("div",{className:"dayname",children:e.weather.forecast.forecastday[1].hour[0].time.split(" ")[1]}),Object(h.jsx)("div",{className:"day-img",children:Object(h.jsx)("img",{src:e.weather.forecast.forecastday[1].hour[0].condition.icon,alt:"weather-img"})}),Object(h.jsx)("div",{className:"day-temp",children:Object(h.jsxs)("span",{className:"max-temp",children:[e.weather.forecast.forecastday[1].hour[0].temp_c,Object(h.jsxs)("sup",{children:[Object(h.jsx)("sup",{children:"."}),"C"]})]})})]}),Object(h.jsxs)("div",{className:"day",children:[Object(h.jsx)("div",{className:"dayname",children:e.weather.forecast.forecastday[1].hour[5].time.split(" ")[1]}),Object(h.jsx)("div",{className:"day-img",children:Object(h.jsx)("img",{src:e.weather.forecast.forecastday[1].hour[5].condition.icon,alt:"weather-img"})}),Object(h.jsx)("div",{className:"day-temp",children:Object(h.jsxs)("span",{className:"max-temp",children:[e.weather.forecast.forecastday[1].hour[5].temp_c,Object(h.jsxs)("sup",{children:[Object(h.jsx)("sup",{children:"."}),"C"]})]})})]}),Object(h.jsxs)("div",{className:"day",children:[Object(h.jsx)("div",{className:"dayname",children:e.weather.forecast.forecastday[1].hour[9].time.split(" ")[1]}),Object(h.jsx)("div",{className:"day-img",children:Object(h.jsx)("img",{src:e.weather.forecast.forecastday[1].hour[9].condition.icon,alt:"weather-img"})}),Object(h.jsx)("div",{className:"day-temp",children:Object(h.jsxs)("span",{className:"max-temp",children:[e.weather.forecast.forecastday[1].hour[9].temp_c,Object(h.jsxs)("sup",{children:[Object(h.jsx)("sup",{children:"."}),"C"]})]})})]}),Object(h.jsxs)("div",{className:"day",children:[Object(h.jsx)("div",{className:"dayname",children:e.weather.forecast.forecastday[1].hour[14].time.split(" ")[1]}),Object(h.jsx)("div",{className:"day-img",children:Object(h.jsx)("img",{src:e.weather.forecast.forecastday[1].hour[14].condition.icon,alt:"weather-img"})}),Object(h.jsx)("div",{className:"day-temp",children:Object(h.jsxs)("span",{className:"max-temp",children:[e.weather.forecast.forecastday[1].hour[14].temp_c,Object(h.jsxs)("sup",{children:[Object(h.jsx)("sup",{children:"."}),"C"]})]})})]}),Object(h.jsxs)("div",{className:"day",children:[Object(h.jsx)("div",{className:"dayname",children:e.weather.forecast.forecastday[1].hour[19].time.split(" ")[1]}),Object(h.jsx)("div",{className:"day-img",children:Object(h.jsx)("img",{src:e.weather.forecast.forecastday[1].hour[19].condition.icon,alt:"weather-img"})}),Object(h.jsx)("div",{className:"day-temp",children:Object(h.jsxs)("span",{className:"max-temp",children:[e.weather.forecast.forecastday[1].hour[19].temp_c,Object(h.jsxs)("sup",{children:[Object(h.jsx)("sup",{children:"."}),"C"]})]})})]}),Object(h.jsxs)("div",{className:"day",children:[Object(h.jsx)("div",{className:"dayname",children:e.weather.forecast.forecastday[1].hour[23].time.split(" ")[1]}),Object(h.jsx)("div",{className:"day-img",children:Object(h.jsx)("img",{src:e.weather.forecast.forecastday[1].hour[23].condition.icon,alt:"weather-img"})}),Object(h.jsx)("div",{className:"day-temp",children:Object(h.jsxs)("span",{className:"max-temp",children:[e.weather.forecast.forecastday[1].hour[23].temp_c,Object(h.jsxs)("sup",{children:[Object(h.jsx)("sup",{children:"."}),"C"]})]})})]})]})};var x=function(e){return Object(h.jsxs)("div",{className:"details",children:[Object(h.jsxs)("div",{className:"today-weather",children:[Object(h.jsxs)("div",{className:"rain weather-box",children:[Object(h.jsxs)("div",{className:"img",children:[Object(h.jsx)("i",{className:"fas fa-cloud-showers-heavy"}),Object(h.jsx)("h3",{children:"RAIN"})]}),Object(h.jsx)("div",{className:"info",children:Object(h.jsxs)("h2",{children:[e.weather.current.precip_mm," mm"]})})]}),Object(h.jsxs)("div",{className:"Humidity weather-box",children:[Object(h.jsxs)("div",{className:"img",children:[Object(h.jsx)("i",{className:"fas fa-thermometer-three-quarters"}),Object(h.jsx)("h3",{children:"HUMIDITY"})]}),Object(h.jsx)("div",{className:"info",children:Object(h.jsxs)("h2",{children:[e.weather.current.humidity,"%"]})})]}),Object(h.jsxs)("div",{className:"air-quality weather-box",children:[Object(h.jsxs)("div",{className:"img",children:[Object(h.jsx)("i",{className:"fas fa-lungs"}),Object(h.jsx)("h3",{children:"AIR QUALITY"})]}),Object(h.jsx)("div",{className:"info",children:Object(h.jsx)("h2",{children:Math.floor(e.weather.current.air_quality.pm2_5)})})]})]}),Object(h.jsxs)("div",{className:"today-weather",children:[Object(h.jsxs)("div",{className:"visibility weather-box",children:[Object(h.jsxs)("div",{className:"img",children:[Object(h.jsx)("i",{className:"fas fa-smog"}),Object(h.jsx)("h3",{children:"VISIBILITY"})]}),Object(h.jsx)("div",{className:"info",children:Object(h.jsxs)("h2",{children:[e.weather.current.vis_km," km"]})})]}),Object(h.jsxs)("div",{className:"UV-rays weather-box",children:[Object(h.jsxs)("div",{className:"img",children:[Object(h.jsx)("i",{className:"fas fa-sun"}),Object(h.jsx)("h3",{children:"UV INDEX"})]}),Object(h.jsx)("div",{className:"info",children:Object(h.jsx)("h2",{children:e.weather.current.uv})})]}),Object(h.jsxs)("div",{className:"wind weather-box",children:[Object(h.jsxs)("div",{className:"img",children:[Object(h.jsx)("i",{className:"fas fa-wind"}),Object(h.jsx)("h3",{children:"WIND"})]}),Object(h.jsx)("div",{className:"info",children:Object(h.jsxs)("h2",{children:[e.weather.current.wind_kph," km/hr"]})})]})]})]})};var b=function(e){return Object(h.jsxs)("div",{className:"weather-component",children:[Object(h.jsx)(x,{weather:e.weather}),Object(h.jsx)(o,{weather:e.weather})]})},O={location:{name:"Delhi",country:"India"},current:{wind_kph:"70.9km/hr",humidity:"60",air_quality:{pm2_5:7.909},temp_c:12,condition:{icon:"https://bmcdn.nl/assets/weather-icons/v1.5/partly-cloudy-day-drizzle.svg",precip_mm:34,vis_km:3,uv:3}},forecast:{forecastday:[{day:{mintemp_x:15,maxtemp_c:35},date:"2021-07-25",hour:[{time:"26-07-2021 00:00",temp_c:25,condition:{icon:""}},{time:"26-07-2021 01:00"},{time:"26-07-2021 02:00"},{time:"26-07-2021 03:00"},{time:"26-07-2021 04:00"},{time:"26-07-2021 05:00",temp_c:25,condition:{icon:""}},{time:"26-07-2021 06:00"},{time:"26-07-2021 07:00"},{time:"26-07-2021 08:00"},{time:"26-07-2021 09:00",temp_c:25,condition:{icon:""}},{time:"26-07-2021 10:00"},{time:"26-07-2021 11:00"},{time:"26-07-2021 12:00"},{time:"26-07-2021 13:00"},{time:"26-07-2021 14:00",temp_c:25,condition:{icon:""}},{time:"26-07-2021 15:00"},{time:"26-07-2021 16:00"},{time:"26-07-2021 17:00"},{time:"26-07-2021 18:00"},{time:"26-07-2021 19:00",temp_c:25,condition:{icon:""}},{time:"26-07-2021 20:00"},{time:"26-07-2021 21:00"},{time:"26-07-2021 22:00"},{time:"26-07-2021 23:00",temp_c:25,condition:{icon:""}}]}]}};var p=function(){var e=t.a.useState(""),s=Object(l.a)(e,2),c=s[0],a=s[1],i=t.a.useState("Delhi"),r=Object(l.a)(i,2),n=r[0],o=r[1],x=t.a.useState(!0),p=Object(l.a)(x,2),u=p[0],f=p[1],v=t.a.useState(O),y=Object(l.a)(v,2),N=y[0],w=y[1];function g(){return _.apply(this,arguments)}function _(){return(_=Object(j.a)(d.a.mark((function e(){var s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://api.weatherapi.com/v1/forecast.json?key=3f00da87a6b54695be432033212407&q=".concat(n,"&days=10&aqi=yes&alerts=no"));case 3:return s=e.sent,e.next=6,s.json();case 6:c=e.sent,console.log(c),w(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),w(O);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return t.a.useEffect((function(){f(!0),setTimeout(g,5e3),setTimeout((function(){f(!1)}),5100)}),[n]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{city:n,handleClick:function(){o(c),a("")},handleInput:function(e){var s=e.target.value;a(s)},weather:N,input:c,loading:u}),u?Object(h.jsxs)("div",{className:"loader",children:[Object(h.jsx)("img",{src:"https://www.bing.com/th/id/OGC.57e40ad0fa59149692a6416414a77e5a?pid=1.7&rurl=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F9wRcDo14kZTRS%2Fgiphy.gif&ehk=DLqZwwLw75Rs0PEbD%2BQuNzx2lDyf5t4zr1aL31CrZBo%3D",alt:"Loading..."}),Object(h.jsx)("p",{children:"Loading..."})]}):Object(h.jsx)(b,{weather:N})]})};r.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.9d145333.chunk.js.map