import styled from "styled-components/native";
import { Text, View, SafeAreaView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #f0f4ff;
  padding-bottom: 12%;
`;
export const Header = styled(Text)`
  font-size: 35px;
  font-weight: bold;
  padding: 12px 0;
  bottom: 34%;
  margin-left: 15%;
  color: #fff;
`;

export const SubHeader = styled(Text)`
  font-size: 20px;
  padding: 12px 0;
  bottom: 37%;
  margin-left: 15%;
  color: #fff;
`;

export const HeadImg = styled.Image`
  object-fit: fill;
  top: -6%;
  display: block;
  margin: 0 auto;
`;
export const InputContainer = styled(View)`
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const Label = styled(Text)`
  font-size: 16px;
  margin-bottom: 6px;
  font-weight: bold;
  color: #000;
`;

export const ErrorText = styled(Text)`
  color: #ff0000; /* Cor para mensagens de erro */
  font-size: 14px;
  margin-top: 5px;
`;

export const StyledSwitch = styled.Switch`
  width: 40px;
  height: 40px;
`;

export const Button = styled.TouchableOpacity`
  background-color: green;
  width: 100%;
  height: 45px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const FormArea = styled(View)`
  heigth: 50%;
  width: 70%;
  align-items: left;
  margin-left: 10%;
  bottom: 20%;
  display: block;
  max-heigth: 100%;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: #68b2f8;
  margin-top: 10px;
  margin-left: 28px;
  align-items: center;
  justify-content: center;
  top: 5%;
`;

export const GoBackButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: #68b2f8;
  margin-top: 10px;
  margin-left: 28px;
  align-items: center;
  justify-content: center;
  bottom: 18%;
  top: 5%;
`;
export const Input = styled.TextInput`
  width: 90%;
  font-size: 17px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 15px;
`;
