import React, {
  useEffect,
} from 'react';

import {
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/img/weather.png')} />
      <Text style={styles.text}>Weather Now</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    margin: 8,
  },
});

export default SplashScreen;

