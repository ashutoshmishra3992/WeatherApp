import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen.tsx';
import HomeScreen from './screens/HomeScreen.tsx';
import SearchScreen from './screens/SearchScreen.tsx';

const Stack = createNativeStackNavigator();

const WeatherApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} initialParams={{city: 'Default'}}/>
        <Stack.Screen name="Search" component={SearchScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WeatherApp;
