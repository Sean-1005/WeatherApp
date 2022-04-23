import React from "react";

import { StyleSheet, View, Image } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Button } from '@ui-kitten/components';

export default class DailyWeather extends React.Component{

  onSubmit = () => {
    this.props.navigation.navigate('FollowingWeather',{
      daily: this.props.state.daily,
      location: this.props.state.label
    });
  }

  render() {
    return (
      <View style={styles.weatherContainer}>
          <View style={styles.headerContainer}>
              <Image
                style={styles.tinyLogo}
                source={{uri: 'http://openweathermap.org/img/wn/'+this.props.state.icon+'@2x.png'}}
              />
              <Text style={styles.text} category={"h1"}>{this.props.state.current_temp}˚C</Text>
              <Text style={styles.text} category={"h3"} >{this.props.state.weather_desc}</Text>
              <Text category={"h5"} style={styles.text}>{this.props.state.label}</Text>
              <Text category={"h5"} style={styles.text}>{this.props.state.date}</Text>
          </View>
          <View style={styles.bodyContainer}>
              <View style={styles.row}>
                <FontAwesome5 name="temperature-high" size={24} color="black" />
                <Text style={styles.text} category={"h5"}>temperature: {this.props.state.min_temp}˚C-{this.props.state.max_temp}˚C</Text>
              </View>
              <View style={styles.row}>
                <FontAwesome5 name="wind" size={24} color="black" />
                <Text category={"h5"} style={styles.text}>wind speed: {this.props.state.wind_sp}</Text>
              </View>
              <View style={styles.row}>
                <MaterialCommunityIcons name="air-humidifier" size={24} color="black" />
                <Text category={"h5"} style={styles.text}>humidity: {this.props.state.humidity}</Text>
              </View>
          </View>
          {this.props.isShow &&
            <Button style={styles.button} onPress={this.onSubmit}>{evaProps => <Text {...evaProps} style={styles.button_text}>Next Seven Days</Text>}</Button>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    weatherContainer: {
      flex: 1,
      backgroundColor: "#D6EAF8"
    },
    headerContainer: {
      marginTop:10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    tempText: {
      fontSize: 48,
    },
    bodyContainer: {
      flex: 2,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      paddingLeft: 25,
      marginBottom: 50
    },
    tinyLogo: {
      width: 150,
      height: 150,
    },
    row: {
      flexDirection: 'row',
      alignItems:"center",
      margin: 5,
    },
    text: {
      marginLeft: 5,
      fontFamily: "sans-serif-medium",
      color: "#154360"
    },
    button:{
      backgroundColor:"#FADBD8",
      borderColor:"#FADBD8",
    },
    button_text:{
      color: "#EC7063"
    }
});