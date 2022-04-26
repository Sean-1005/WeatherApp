'use strict'

import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    View,
    KeyboardAvoidingView } from "react-native";
import {getLatLon} from '../Api/Location';
import { getWeatherInfo } from "../Api/Weather";
import { Input, Text, Button, Divider } from '@ui-kitten/components';
import { ScrollView } from "react-native-gesture-handler";
import { Alert } from "react-native";

export default class Homepage extends React.Component {
    state = {
        city: "",
        state:"",
        country:"",
        country_city:undefined,
        country_zip: undefined,
        postcode: "",
        date: undefined,
        weather_desc: "",
        current_temp: undefined,
        min_temp: undefined,
        max_temp: undefined,
        wind_sp: undefined,
        prec: undefined,
        humidity: undefined,
        daily: [],
        isShow: true,
        icon:undefined,
        error: undefined,
        label: undefined,
    }

    onChangeText = (key, value) => {
        this.setState({
            [key]: value,
        })
    }

    displayNoConnectionAlert = (error, tip) => {
        Alert.alert(error, tip, [
          {
            text: "Close",
            style: "cancel",
          },
        ]);
      };

    onSubmit = async() => {
        const {postcode, country, city, state} = this.state;

        var address;

        if (country === ""){
            this.displayNoConnectionAlert("Invalid Input", "Country is required.");
            return
        }else if(postcode === "" && (city === "" && state === "")){
            this.displayNoConnectionAlert("Invalid Input", "City and State are required.");
            return
        }else if(postcode !== ""){
            address = postcode+", "+country;
        }else if(postcode === "" && (city === "" || state === "")){
            this.displayNoConnectionAlert("Invalid Input", "City and State are required.");
            return
        }

        if(postcode!==""){
            address = postcode+", "+country;
        }else{
            address = city + ", " + state + ", " + country
        }

        console.log(address)

        const result1 = await getLatLon(address);
        if (!result1){
            console.log("Error: Invalid Postal Code or Invalid Country")

            this.displayNoConnectionAlert("Invalid Input", "Please Check the input.");
        }
        else{
            const result2 = await getWeatherInfo(result1.data[0].latitude, result1.data[0].longitude);
            if (!result2){
                console.log("Error: Cannot get weather info");
            }else{
                let today = new Date()
                this.setState({
                    weather_desc: result2.current.weather[0].description,
                    current_temp: result2.current.temp,
                    wind_sp: result2.current.wind_speed,
                    humidity: result2.current.humidity,
                    min_temp: result2.daily[0].temp.min,
                    max_temp: result2.daily[0].temp.max,
                    prec: result2.pop,
                    date: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
                    daily: result2.daily,
                    icon: result2.current.weather[0].icon,
                    isShow: true,
                    label: result1.data[0].label
                });
                this.props.navigation.navigate('DailyWeather',{
                    lat: result1.lat,
                    lon: result1.lon,
                    state: this.state,
                });
            }
        }
    }

    render() {
        return(
            <SafeAreaView>
                <ScrollView>
                <View style={styles.row}>
                    <Text category={'h5'}> By City Name </Text>
                </View>
                <KeyboardAvoidingView style={styles.row} behavior={'padding'}>
                    <Input
                        label={evaProps => <Text {...evaProps} style={styles.text}>CITY</Text>}
                        style = {styles.input}
                        onChangeText = {(val) => this.onChangeText("city", val)}
                        placeholder="City"
                    />
                </KeyboardAvoidingView>

                <KeyboardAvoidingView style={styles.row} behavior={'padding'}>
                    <Input
                        label={evaProps => <Text {...evaProps} style={styles.text}>STATE/PROVINCE</Text>}
                        style = {styles.input}
                        onChangeText = {(val) => this.onChangeText("state", val)}
                        placeholder="State/Province"
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={styles.row} behavior={'padding'}>
                    <Input
                        label={evaProps => <Text {...evaProps} style={styles.text}>COUNTRY</Text>}
                        style = {styles.input}
                        onChangeText = {(val) => this.onChangeText("country", val)}
                        placeholder="Country"
                    />
                </KeyboardAvoidingView>

                <KeyboardAvoidingView style={styles.row} behavior={'padding'}>
                    <Button
                        style={styles.button}
                        status='success'
                        onPress={this.onSubmit}
                    >
                        Search
                    </Button>
                </KeyboardAvoidingView>

                <Divider style={styles.divider}/>

                <KeyboardAvoidingView 
                style={styles.row} 
                behavior={'padding'}
                keyboardVerticalOffset={100}>
                    <Text category={'h5'}> By Postal Code </Text>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView style={styles.row} behavior={'padding'} keyboardVerticalOffset={100}>
                    <Input
                        label={evaProps => <Text {...evaProps} style={styles.text}>COUNTRY</Text>}
                        style = {styles.input}
                        onChangeText = {(val) => this.onChangeText("country", val)}
                        placeholder="Country"
                    />
                </KeyboardAvoidingView>

                <KeyboardAvoidingView style={styles.row} behavior={'padding'} keyboardVerticalOffset={100}>
                    <Input
                    label={evaProps => <Text {...evaProps} style={styles.text}>POSTAL CODE</Text>}
                        style = {styles.input}
                        onChangeText = {(val) => this.onChangeText("postcode", val)}
                        placeholder="Postal Code"
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={styles.row} behavior={'padding'} keyboardVerticalOffset={100}>
                    <Button
                        style={styles.button}
                        status='success'
                        onPress={this.onSubmit}
                    >
                        Search
                    </Button>
                </KeyboardAvoidingView>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

    row: {
        margin: 5,
    },
    text: {
        fontFamily:'sans-serif-medium',
        margin: 0,
        color: "grey"
    },
    input: {
        height: 40,
        width: 350,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        borderWidth: 1,
        padding: 10,
        width: 330,
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 10,
    },
    divider:{
        margin:5,
        color: "black"
    }
})  