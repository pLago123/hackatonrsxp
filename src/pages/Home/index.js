import React from 'react';

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
          />
          <SubmitButton onPress={() => navigation.navigate('Intro')}>
            <SubmitButtonText>Acessar</SubmitButtonText>
          </SubmitButton>
        </Wrap>
      </Container>
    </Background>
  );
};

export default Home;
