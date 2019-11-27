import React from 'react';

import { Container, Title, Body } from './styles';

import Background from '../../components/Background';
import Button from '../../components/Button';

const Specialty = ({ navigation }) => {
  const profession = navigation.getParam('profession')[0];

  console.tron.log(profession);
  return (
    <Background>
      <Container>
        <Title>{profession.title}</Title>
        <Body>{profession.text}</Body>
        <Button
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Ver oportunidades
        </Button>
      </Container>
    </Background>
  );
};

export default Specialty;
