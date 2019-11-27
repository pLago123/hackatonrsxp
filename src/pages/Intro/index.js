import React, { useRef, useEffect } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

import { Container, Title, Paragraph } from './styles';
import Button from '../../components/Button';

const Intro = ({ navigation }) => {
  return (
    <Swiper>
      <LinearGradient colors={['#1f1c1c', '#2e2828']} style={{ flex: 1 }}>
        <Container>
          <Title>A evolução tecnológica</Title>
          <View style={{ width: 200, height: 200 }}>
            <LottieView
              source={require('../../assets/tech.json')}
              autoPlay
              loop
              style={{ flex: 1 }}
            />
          </View>
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
        <Container>
          <Title>Tecnologia no Direito</Title>
          <View style={{ width: 200, height: 200 }}>
            <LottieView
              source={require('../../assets/law1.json')}
              autoPlay
              loop
              style={{ flex: 1 }}
            />
          </View>
          <Paragraph>
            Há uma crescente necessidade de que se automatize até mesmo serviços
            jurídicos, como contratos complexos e petições gerados por sistemas
            inteligentes.
          </Paragraph>
          <Paragraph>
            O profissional de direito e software cria soluções para relacionar
            conteúdo lógico-jurídico com as necessidades de cada caso.
          </Paragraph>
        </Container>
      </LinearGradient>
      <LinearGradient colors={['#1f1c1c', '#2e2828']} style={{ flex: 1 }}>
        <Container>
          <Title>Tecnologia na saúde</Title>
          <View style={{ width: 200, height: 200 }}>
            <LottieView
              source={require('../../assets/health.json')}
              autoPlay
              loop
              style={{ flex: 1 }}
            />
          </View>
          <Paragraph>
            Um das necessidades mais frequentes é o registro de dados
            relacionados a laudos médicos e condições de pacientes.
          </Paragraph>
          <Paragraph>
            A estrutura de base de dados, contendo informações legais e
            financeiras precisa ser segura e de rápido acesso para o sistema do
            hospital.
          </Paragraph>
        </Container>
      </LinearGradient>
      <LinearGradient colors={['#1f1c1c', '#2e2828']} style={{ flex: 1 }}>
        <Container>
          <Title>Tecnologia na área financeira</Title>
          <View style={{ width: 200, height: 200 }}>
            <LottieView
              source={require('../../assets/cards.json')}
              autoPlay
              loop
              style={{ flex: 1 }}
            />
          </View>
          <Paragraph>
            Computação está na base da atuação financeira. Desde controle de
            caixa até análise de crédito para clientes.
          </Paragraph>
          <Paragraph>
            Computação está na base da atuação financeira. Desde controle de
            caixa até análise de crédito para clientes.
          </Paragraph>
        </Container>
      </LinearGradient>
      <LinearGradient colors={['#1f1c1c', '#2e2828']} style={{ flex: 1 }}>
        <Container>
          <Title>Mercado de trabalho</Title>
          <View style={{ width: 200, height: 200 }}>
            <LottieView
              source={require('../../assets/world.json')}
              autoPlay
              loop
              style={{ flex: 1 }}
            />
          </View>
          <Paragraph>
            A transformação digital esta mudando o mundo e as relações humanas,
            novas tecnologias surgem para suprir as mais diversas necessidades
            deste novo mundo assim como a necessidade de profissionais de
            tecnologia com cada vez mais iniciativa e responsabilidade.
          </Paragraph>
          <Paragraph>
            Então bora saber qual segmento da tecnologia tem mais a ver com você
            ?
          </Paragraph>
          <Button
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              marginTop: 50,
            }}
            onPress={() => navigation.navigate('Cards')}
          >
            Bora lá
          </Button>
        </Container>
      </LinearGradient>
    </Swiper>
  );
};

export default Intro;
