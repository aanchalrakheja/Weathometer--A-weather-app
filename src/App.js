import React from "react";
import CityComponent from "./Components/CityComponent";
import WeatherComponent from "./Components/WeatherComponent";

const defaultWeather={
    location:{name:"Delhi",country:"India"},
    current:{wind_kph:"70.9km/hr",humidity:"60",air_quality:{pm2_5:7.9090},temp_c:12,condition:{icon:"https://bmcdn.nl/assets/weather-icons/v1.5/partly-cloudy-day-drizzle.svg",precip_mm:34,vis_km:3,uv:3}},
    forecast:{forecastday:[{day:{mintemp_x:15,maxtemp_c:35},date:"2021-07-25",
        hour:[{time:"26-07-2021 00:00",temp_c:25,condition:{icon:""}},{time:"26-07-2021 01:00"},{time:"26-07-2021 02:00"},{time:"26-07-2021 03:00"},{time:"26-07-2021 04:00"},{time:"26-07-2021 05:00",temp_c:25,condition:{icon:""}},{time:"26-07-2021 06:00"},{time:"26-07-2021 07:00"},{time:"26-07-2021 08:00"},{time:"26-07-2021 09:00",temp_c:25,condition:{icon:""}},{time:"26-07-2021 10:00"},{time:"26-07-2021 11:00"},{time:"26-07-2021 12:00"},{time:"26-07-2021 13:00"},{time:"26-07-2021 14:00",temp_c:25,condition:{icon:""}},{time:"26-07-2021 15:00"},{time:"26-07-2021 16:00"},{time:"26-07-2021 17:00"},{time:"26-07-2021 18:00"},{time:"26-07-2021 19:00",temp_c:25,condition:{icon:""}},{time:"26-07-2021 20:00"},{time:"26-07-2021 21:00"},{time:"26-07-2021 22:00"},{time:"26-07-2021 23:00",temp_c:25,condition:{icon:""}}]}]}
};


function App(){
    const[input,setInput]=React.useState("");
    const[city,setCity]=React.useState("Delhi");
    const[loading,setLoading]=React.useState(true);
    const[weather,setWeather]=React.useState(defaultWeather);
    async function getWeather(){
        try{
            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=3f00da87a6b54695be432033212407&q=${city}&days=10&aqi=yes&alerts=no`);
            const data=await response.json();
            console.log(data);
            setWeather(data);
        }
        catch(error)
        {
            setWeather(defaultWeather);
        }
    }
    function handleInput(event){
        var value=event.target.value;
        setInput(value);
    }
    function handleClick(){
        setCity(input);
        setInput("");
    }

    React.useEffect(()=>{
        setLoading(true);
        setTimeout(getWeather,5000);
        setTimeout(()=>{setLoading(false)},5100);
    },[city])

    return(
        <>
             <CityComponent city={city} handleClick={handleClick} handleInput={handleInput} weather={weather} input={input} loading={loading}/>
             {loading ? <div className="loader"><img src="https://www.bing.com/th/id/OGC.57e40ad0fa59149692a6416414a77e5a?pid=1.7&rurl=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F9wRcDo14kZTRS%2Fgiphy.gif&ehk=DLqZwwLw75Rs0PEbD%2BQuNzx2lDyf5t4zr1aL31CrZBo%3D" alt="Loading..."/><p>Loading...</p></div> :<WeatherComponent weather={weather}/> }
        </>
    );
}

export default App;

