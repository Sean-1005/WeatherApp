"use strict"
import React from "react";

import DailyWeather from "../Components/DailyWeather";

export default class WeatherScreen extends React.Component{
    state = {
        date: undefined,
        weather_desc: "",
        current_temp: undefined,
        min_temp: undefined,
        max_temp: undefined,
        wind_sp: undefined,
        prec: undefined,
        humidity: undefined,
        daily: [],
        error: undefined,
        isShow: false,
        label: undefined
    }

    async componentDidMount(){
      this.setState(this.props.route.params.state);
    }

    render() {
        return (
          <DailyWeather state={this.state} navigation={this.props.navigation} isShow={this.state.isShow}/>
        );
      }
}