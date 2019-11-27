import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  color: white;
  font-size: 28;
  margin-top: 50;
  font-family: Courier;
`;

export const EmailText = styled.Text`
  padding: 0 40px;
  color: white;
  font-size: 18;
  align-self: center;
  text-align: center;
`;

export const Wrap = styled.View`
  flex: 1;
  margin: 50px 0;
  justify-content: center;
  align-items: center;
`;

export const EmailInput = styled(Input)`
  margin: 20px 50px;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 50px;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
