import React, { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Title, Name, Logo } from './styles';

import Background from '../../components/Background';
import api from '../../services/api';

const Opportunities = () => {
  const [school, setSchool] = useState([]);

  useEffect(() => {
    api.get('school').then(res => setSchool(res.data[0]));
  }, []);

  console.tron.log(school.logo);
  return (
    <Background>
      <Container>
        <LottieView
          source={require('../../assets/rocket.json')}
          autoPlay
          loop={false}
        />
        <Title>Oportunidades</Title>
        <Name>{school.name}</Name>
        <TouchableOpacity onPress={() => {}}>
          <Logo
            source={require('../../assets/images/logoRocket.png')}
            height={50}
            width={50}
          />
        </TouchableOpacity>
        <Title
          style={{ textTransform: 'uppercase', fontSize: 26, marginTop: 100 }}
        >
          Embarque nesse foguete
        </Title>
      </Container>
    </Background>
  );
};

export default Opportunities;
