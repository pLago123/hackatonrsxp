import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin: 50px;
  justify-content: space-around;
`;

export const Title = styled.Text`
  color: white;
  font-family: 'Trebuchet MS';
  font-size: 24;
  /* margin-top: 50; */
`;

export const Body = styled.Text`
  color: white;
  font-family: 'Trebuchet MS';
  font-size: 20;
  /* margin-top: 250; */
`;

export const Button = styled.TouchableOpacity`
  border-radius: 20;
`;

export const ButtonText = styled.Text`
  padding: 10px;
  color: white;
  background: blue;
`;
