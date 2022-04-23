"use strict"

import {API_KEY} from '../util/APIkey'

const baseURL = "https://api.openweathermap.org/data/2.5/onecall?"

const getWeatherInfo = async(lat, lon) => {
    var url;
    if(lat !== null && lon !== null){
        url = baseURL + "lat=" + lat +"&lon="+lon+"&exclude=hourly,minutely,"+"&appid="+API_KEY+"&units=metric";
        console.log(url)
    }
    else{
        console.log("Invalid Location Error");
        return false;
    }

    const data = {
        method: "GET",
    }

    try {

        let res = await fetch(url, data);
        const result = await res.json();
        return result;

    }catch(e){
        console.log(e);
        return false;
    }
}

export {getWeatherInfo};