import React, { useState } from 'react';

import {
  Container,
  Title,
  EmailText,
  Wrap,
  EmailInput,
  SubmitButton,
  SubmitButtonText,
} from './styles';
import Background from '../../components/Background';

const Home = ({ navigation }) => {
  const [email, setEmail] = useState();

  const next = () => {
    if (!email) {
      alert('Digite seu e-mail!');
    } else {
      navigation.navigate('Intro');
    }
  };

  return (
    <Background>
      <Container>
        <Title>Technator</Title>
        <Wrap>
          <EmailText>
            Digite seu e-mail e saiba tudo sobre a área que mais cresce no
            mundo!
          </EmailText>
          <EmailInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <SubmitButton onPress={() => next()}>
            <SubmitButtonText>Acessar</SubmitButtonText>
          </SubmitButton>
        </Wrap>
      </Container>
    </Background>
  );
};

export default Home;
