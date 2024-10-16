import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

const SearchScreen = ({navigation}) => {
  const [cityName, setCityName] = useState<string>('');
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={cityName}
          onChangeText={setCityName}
          placeholder={'City Name'}
          keyboardType={'default'}
        />
        <Button title={'Done'} onPress={() => { navigation.navigate('Home', { city: cityName }); }}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    borderWidth: 1,
  },
});

export default SearchScreen;
