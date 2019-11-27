import React, { useRef, useEffect, useState } from 'react';
import { View } from 'react-native';
import CardStack from 'react-native-card-stack-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../services/api';
import QuestionCard from '../../components/Card';
import { Container, Row, Title } from './styles';
import Background from '../../components/Background';

const Cards = () => {
  const swiper = useRef();
  const [cards, setCards] = useState([]);
  const [weight, setWeight] = useState({ se: 0, ce: 0, de: 0 });

  useEffect(() => {
    api.get('questions').then(res => setCards(res.data));
  }, []);

  const handleWeight = (type, weightProp) => {
    switch (type) {
      case 'se':
        setWeight({ ...weight, se: (weight.se += weightProp) });
        break;
      case 'de':
        setWeight({ ...weight, de: (weight.de += weightProp) });
        break;
      case 'ce':
        setWeight({ ...weight, ce: (weight.ce += weightProp) });
        break;
      default:
        break;
    }
  };

  const renderCards = () => {
    const render = cards.map(card => (
      <QuestionCard
        key={card.id}
        text={card.questionText}
        onSwipedRight={() => handleWeight(card.type, card.weight)}
      />
    ));

    return render;
  };

  const finish = () => {
    let heavier = 0;
    let profession = '';

    Object.keys(weight).forEach(w => {
      if (weight[w] > heavier) {
        heavier = weight[w];
        profession = w;
      }
    });

    return profession;
  };

  return (
    <Background>
      <Title>Technator</Title>
      <Container>
        <CardStack
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 300,
          }}
          ref={swiper}
          onSwipedAll={() => alert(finish())}
        >
          {renderCards()}
        </CardStack>
        <Row>
          <View>
            <TouchableOpacity onPress={() => swiper.current.swipeLeft()}>
              <Icon name="close" size={60} color="red" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => swiper.current.swipeRight()}>
              <Icon name="check" size={60} color="green" />
            </TouchableOpacity>
          </View>
        </Row>
      </Container>
    </Background>
  );
};

export default Cards;
