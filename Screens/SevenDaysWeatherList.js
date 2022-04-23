"use strict"

import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar, Image} from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import { 
  FontAwesome5,
  AntDesign,
  MaterialCommunityIcons
 } from '@expo/vector-icons'; 

export default class SevenDaysWeatherList extends React.Component{

    location = this.props.route.params.location

    renderItem = ({ item }) => {
        let date = new Date(item.dt * 1000)
        let formattedDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
        const renderItemHeader = (headerProps) => (
          <View {...headerProps} style={styles.row}>
            <AntDesign name="calendar" size={24} color="black" />
            <Text category='h5' style={styles.text}>
              {formattedDate}
            </Text>
          </View>
        );
        return(
            <View>
                <Card
                  style={styles.item}
                  status='basic'
                  header={headerProps => renderItemHeader(headerProps)}>
                  <View style={styles.row_weather}>
                    <Image
                      style={styles.tinyLogo}
                      source={{uri: 'http://openweathermap.org/img/wn/'+item.weather[0].icon+'@2x.png'}}
                    />
                    <Text category={"h4"} style={styles.text}>{item.weather[0].description}</Text>
                    <Text category={"h6"} style={styles.text}>{this.location}</Text>
                  </View>
                  <View style={styles.row}>
                    <FontAwesome5 name="temperature-high" size={24} color="black" />
                    <Text style={styles.text} category={"h6"}>temperature: {item.temp.min}˚C-{item.temp.max}˚C</Text>
                  </View>
                  <View style={styles.row}>
                    <FontAwesome5 name="wind" size={24} color="black" />
                    <Text category={"h6"} style={styles.text}>wind speed: {item.wind_speed}</Text>
                  </View>
                  <View style={styles.row}>
                    <MaterialCommunityIcons name="air-humidifier" size={24} color="black" />
                    <Text category={"h6"} style={styles.text}>humidity: {item.humidity}</Text>
                  </View>
                  <View style={styles.row}>
                    <FontAwesome5 name="cloud-rain" size={24} color="black" />
                    <Text category={"h6"} style={styles.text}>precipitation: {item.pop}</Text>
                  </View>
                </Card>
            </View>
        );
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
              <FlatList
                data={this.props.route.params.daily}
                renderItem={this.renderItem}
                keyExtractor={item => item.dt}
              />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      backgroundColor: "#D6EAF8"
    },
    text: {
      marginLeft: 5,
      fontFamily: "sans-serif-medium",
      color: "#154360"
    },
    row: {
      flexDirection: 'row',
      alignItems:"center",
      margin: 5,
    },
    row_weather:{
      textAlign: 'center',
      alignItems:"center",
      margin: 10,
    },
    tinyLogo: {
      width: 80,
      height: 80,
    },
  });