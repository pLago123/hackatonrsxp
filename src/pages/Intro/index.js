import React from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import { Container, Title, Paragraph } from './styles';

const Intro = ({ navigation }) => {
  return (
    <Swiper>
      <LinearGradient colors={['#1f1c1c', '#2e2828']} style={{ flex: 1 }}>
        <Container>
          <Title>A evolução tecnológica</Title>
          <Paragraph>
            A evolução tecnológica iniciou há um tempo atrás, através das
            primeiras invenções do homem pré-histórico.
          </Paragraph>
          <Paragraph>
            Assim, a tecnologia está constantemente e permanentemente conectada
            ao homem.
          </Paragraph>
          <Paragraph>
            De uma maneira geral, a tecnologia nada mais é do que todas as
            invenções criadas pelo homem, para ajudar na sua atuação no planeta
            e assim simplificar o nosso modo de vida.
          </Paragraph>
          <Paragraph>
            Engloba desde simples ferramentas até as mais complexas, que ajudam
            a explorar o universo. Algumas se tornam essenciais ao cotidiano,
            variando desde coisas simples até instrumentos mais complexos
            indispensáveis a certos ramos profissionais.
          </Paragraph>
        </Container>
      </LinearGradient>
      <LinearGradient colors={['#1f1c1c', '#2e2828']} style={{ flex: 1 }}>
        <Container />
      </LinearGradient>
      <LinearGradient colors={['#1f1c1c', '#2e2828']} style={{ flex: 1 }}>
        <Container />
      </LinearGradient>
      <LinearGradient colors={['#1f1c1c', '#2e2828']} style={{ flex: 1 }}>
        <Container style={{ justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Cards')}>
            <Text>Next page</Text>
          </TouchableOpacity>
        </Container>
      </LinearGradient>
    </Swiper>
  );
};

export default Intro;
