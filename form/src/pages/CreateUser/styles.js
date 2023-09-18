import styled from "styled-components/native";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #F0F4FF;
`;

export const ScrollViewContent = styled(ScrollView)`
  padding: 20px;
`;

export const InputContainer = styled(View)`
  margin-bottom: 20px;
`;

export const Label = styled(Text)`
  font-size: 16px;
  margin-bottom: 5px;
  color: #000; /* Cor de texto padrão */
`;

export const ErrorText = styled(Text)`
  color: #FF0000; /* Cor para mensagens de erro */
  font-size: 14px;
  margin-top: 5px;
`;
