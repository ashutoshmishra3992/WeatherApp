import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WeatherView = ({weather}) => (
  <View style={styles.container}>
    <Text style={styles.locationText}>
      {weather.city}, {weather.country}
    </Text>
    <Text style={styles.currentTemperatureText}>{weather.temperature}°</Text>
    <Text style={styles.weatherTypeText}>{weather.type}</Text>
    <View style={styles.minMaxTemperatureContainer}>
      <View>
        <Text style={styles.minMaxTemperatureText}>{weather.maxTemperature}°</Text>
      </View>
      <View>
        <Text style={styles.minMaxTemperatureText}>{weather.maxTemperature}°</Text>
      </View>
    </View>
    <Text style={styles.feelTemperatureText}>Feels like {weather.feelTemperature}°</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 48,
  },
  locationText: {
    fontSize: 24,
  },
  currentTemperatureText: {
    fontSize: 48,
    margin: 8,
  },
  weatherTypeText: {
    fontSize: 24,
  },
  minMaxTemperatureContainer: {
    flexDirection: 'row',
  },
  minMaxTemperatureText: {
    fontSize: 18,
    margin: 8,
  },
  feelTemperatureText: {
    fontSize: 18,
  },
});

export default WeatherView;
