import React from 'react';
import {View} from 'react-native';
import {Circle} from 'react-native-progress';

const Progress = () => {
  return (
    <View>
      <Circle size={30} indeterminate={true} />
    </View>
  );
};

export default Progress;
