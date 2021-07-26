import React from "react";

function Week(props){
    return <div className="week-weather">
            <div className="day">
                <div className="dayname">{(props.weather.forecast.forecastday[1].hour[0].time).split(" ")[1]}</div>
                <div className="day-img"><img src={props.weather.forecast.forecastday[1].hour[0].condition.icon} alt="weather-img"></img></div>
                <div className="day-temp">
                <span className="max-temp">{props.weather.forecast.forecastday[1].hour[0].temp_c}<sup><sup>.</sup>C</sup></span>
                </div>
            </div>

            <div className="day">
                <div className="dayname">{(props.weather.forecast.forecastday[1].hour[5].time).split(" ")[1]}</div>
                <div className="day-img"><img src={props.weather.forecast.forecastday[1].hour[5].condition.icon} alt="weather-img"></img></div>
                <div className="day-temp">
                <span className="max-temp">{props.weather.forecast.forecastday[1].hour[5].temp_c}<sup><sup>.</sup>C</sup></span>
                </div>
            </div>

            <div className="day">
                <div className="dayname">{props.weather.forecast.forecastday[1].hour[9].time.split(" ")[1]}</div>
                <div className="day-img"><img src={props.weather.forecast.forecastday[1].hour[9].condition.icon} alt="weather-img"></img></div>
                <div className="day-temp">
                <span className="max-temp">{props.weather.forecast.forecastday[1].hour[9].temp_c}<sup><sup>.</sup>C</sup></span>
                </div>
            </div>

            <div className="day">
                <div className="dayname">{props.weather.forecast.forecastday[1].hour[14].time.split(" ")[1]}</div>
                <div className="day-img"><img src={props.weather.forecast.forecastday[1].hour[14].condition.icon} alt="weather-img"></img></div>
                <div className="day-temp">
                <span className="max-temp">{props.weather.forecast.forecastday[1].hour[14].temp_c}<sup><sup>.</sup>C</sup></span>
                </div>
            </div>

            <div className="day">
                <div className="dayname">{props.weather.forecast.forecastday[1].hour[19].time.split(" ")[1]}</div>
                <div className="day-img"><img src={props.weather.forecast.forecastday[1].hour[19].condition.icon} alt="weather-img"></img></div>
                <div className="day-temp">
                <span className="max-temp">{props.weather.forecast.forecastday[1].hour[19].temp_c}<sup><sup>.</sup>C</sup></span>
                </div>
            </div>

            <div className="day">
                <div className="dayname">{props.weather.forecast.forecastday[1].hour[23].time.split(" ")[1]}</div>
                <div className="day-img"><img src={props.weather.forecast.forecastday[1].hour[23].condition.icon} alt="weather-img"></img></div>
                <div className="day-temp">
                    <span className="max-temp">{props.weather.forecast.forecastday[1].hour[23].temp_c}<sup><sup>.</sup>C</sup></span>
                </div>
            </div>
    </div>
}

export default Week;