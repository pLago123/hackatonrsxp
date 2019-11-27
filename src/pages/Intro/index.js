import React from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Transition } from 'react-navigation-fluid-transitions';

const Intro = ({ navigation }) => {
  return (
    <Swiper>
      <View style={{ flex: 1, backgroundColor: 'orange' }} />
      <View style={{ flex: 1, backgroundColor: 'green' }} />
      <View style={{ flex: 1, backgroundColor: 'blue' }} />
      <View
        style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Cards')}>
          <Text>Next page</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

export default Intro;
