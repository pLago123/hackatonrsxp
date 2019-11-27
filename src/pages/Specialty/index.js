import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import { Container, Title, Body } from './styles';

import Background from '../../components/Background';
import Button from '../../components/Button';

const Specialty = ({ navigation }) => {
  const profession = navigation.getParam('profession')[0];

  return (
    <Background>
      <Container>
        <Title>{profession.title}</Title>
        <View style={{ width: 200, height: 200 }}>
          <LottieView
            source={require('../../assets/ironman.json')}
            autoPlay
            loop
            style={{ flex: 1 }}
          />
        </View>
        <Body>{profession.text}</Body>
        <Button
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}
          onPress={() => navigation.navigate('Opportunities')}
        >
          Ver oportunidades
        </Button>
      </Container>
    </Background>
  );
};

export default Specialty;
