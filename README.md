# WeatherApp

This is a weather application.

## Introduction to the app

There are three pages for this weather app, homepage (searching page), current weather page, and next 7-day weather page. 

### Homepage

<img src = "https://github.com/Sean-1005/WeatherApp/blob/main/Screenshots/1_Homepage.png" alt="drawing" width="250">

User can search the weather info by city or zip code. 

Requirements:
- City Name:
  - Enter city, state, and country. All three are required. (i.e. Toronto, Ontario, Canada)
  - Click `search` button, the app will navigate to the realted current weather page
- Zip Code:
  - Enter the country name and zip code. Both of the coutry name and zip code are required. (i.e. M1S 7j9, Canada)
  - Click `search` button, the app will navigate to the realted current weather page
If there are any neccessary fields missing, an alert will show.

### Current Weather

<img src = "https://github.com/Sean-1005/WeatherApp/blob/main/Screenshots/2_CurrentWeather.png" alt="drawing" width="250">

This page shows current weather data, (there is no `Precipitation` data for current weather)
- Weather description (ex. rain, snow)
- Current temperature
- Minimum temperature
- Maximum temperature
- Wind speed
- Humidity

By clicking the `Next 7 days` button, users are able to see the weather for the next 7 days.

### Next 7-day weather

<img src = "https://github.com/Sean-1005/WeatherApp/blob/main/Screenshots/3_Next7Days.png" alt="drawing" width="250">

This is an example page for the weather of the next 7 days. 

## Run the app on Andriod Simulator

1. Download and install Andriod Studio (https://developer.android.com/studio)
2. Open Andriod Studio, click the `AVD Manager` on the top right of the tool bar, create a virtual device or start an existed one
3. Clone this repo to your local (`git clone https://github.com/Sean-1005/WeatherApp.git`)
4. Navigate into the WeatherApp directory `cd ./WeatherApp`
5. Go to the `./WeatherApp/util/APIkey.js`, replace the two API key with your own API keys
6. Run `npm install` to install all neccessary packages
7. Run `expo start` to start the app 
8. Connect to your Andriod device/ simulator

# Referrence

- OpenWeather API: https://openweathermap.org/api/one-call-api
- Position Stack API: https://positionstack.com/

 
