import {API_KEY_LOCATION} from '../util/APIkey'

const baseURL = "http://api.openweathermap.org/geo/1.0/"
const APIkey = API_KEY_LOCATION

const getLocationByCity = async(city, state, country) =>
{
    var url;
    if(city !== null && state !== null && country !== null){
        url = baseURL + "direct?q=" + city +","+state+","+country+"&appid="+APIkey;
    }
    else{
        console.log("Please enter city, state and country");
        return false;
    }

    const data = {
        method: "GET",
    }

    try {
        let res = await fetch(url + "", data);
        const result = await res.json();

        return result;
    }catch(e){
        console.log(e);
        return false;
    }
}

const getLocationByPostal = async(postcode, country) =>
{
    var url;
    if(postcode !== null && country !== null){
        url = baseURL + "zip?zip=" + postcode +","+country+"&appid="+APIkey;
        console.log("url", url)
    }
    else{
        console.log("Please enter postcode and country");
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


const getLatLon = async (address) => {
    
    console.log(address)
    const url = "http://api.positionstack.com/v1/forward?access_key=" + API_KEY_LOCATION + "&query=" + address;

    const data = {
        method: "GET"
    }

    try {
        let res = await fetch(url, data);
        const result = await res.json();
        console.log(result)
        return result;
    }catch(e){
        console.log(e);
        return false;
    }
}

export {getLocationByCity, getLocationByPostal, getLatLon};