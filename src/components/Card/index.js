import React from 'react';
import { Text } from 'react-native';

import { QuestionCard, CardText } from './styles';

const Card = ({ text, onSwipedRight = () => {}, onSwipedLeft = () => {} }) => {
  return (
    <QuestionCard onSwipedRight={onSwipedRight} onSwipedLeft={onSwipedLeft}>
      <CardText>{text}</CardText>
    </QuestionCard>
  );
};

export default Card;
