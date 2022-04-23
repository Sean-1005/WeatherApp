import React from 'react';
import { StyleSheet } from 'react-native';
import Homepage from './Screens/Homepage';
import WeatherScreen from './Screens/WeatherScreen';
import SevenDaysWeatherList from './Screens/SevenDaysWeatherList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="DailyWeather" component={WeatherScreen} />
          <Stack.Screen name="FollowingWeather" component={SevenDaysWeatherList} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
