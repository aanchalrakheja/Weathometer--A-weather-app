import React from "react";
import Week from "./week";
import Today from "./today";


function WeatherComponent(props){
    return (
        <div className="weather-component">
            <Today weather={props.weather}/>
            <Week weather={props.weather}/>
        </div>
    )
}

export default WeatherComponent;