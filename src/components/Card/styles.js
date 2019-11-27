import styled from 'styled-components/native';
import { Card } from 'react-native-card-stack-swiper';

export const QuestionCard = styled(Card)`
  width: 300;
  height: 300;
  border-radius: 15;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #fff;
`;

export const CardText = styled.Text`
  color: #333;
  font-family: 'Trebuchet MS';
  font-size: 32px;
`;
