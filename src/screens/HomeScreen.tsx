import React, {useEffect, useState} from 'react';

import {
  View,
  StyleSheet, Text, SafeAreaView,
} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import {WeatherData} from '../WeatherData.tsx';
import WeatherView from '../components/WeatherView.tsx';

const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const fetchWeatherData = async (latitude: number, longitude: number) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7b52ce875ce158f7babd4461f165cc79`;
      const res = await fetch(url);
      return await res.json();
    } catch (error) {
      return error;
    }
  };

  const extractWeatherData = (res: any): WeatherData | null => {
    if (!res || !res.main || !res.weather || !res.weather[0]) {
      return null;
    }

    const {
      main: { temp, feels_like, temp_min, temp_max, humidity },
      weather: [{ main, icon }],
      wind: { speed },
      sys: { country, sunrise, sunset },
      name,
    } = res;

    return {
      city: name,
      country: country,
      type: main,
      icon: icon,
      temperature: temp,
      minTemperature: temp_min,
      maxTemperature: temp_max,
      feelTemperature: feels_like,
      humidity: humidity,
      windSpeed: speed,
      sunrise: sunrise,
      sunset: sunset,
    };
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      fetchWeatherData(info.coords.latitude, info.coords.longitude)
        .then(r => {
          console.log(r);
          setWeatherData(extractWeatherData(r));
        })
        .catch(e => console.log(e));
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {weatherData ? (
          <WeatherView weather={weatherData} />
        ) : (
          <Text style={styles.text}>Loading..</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});

export default HomeScreen;
