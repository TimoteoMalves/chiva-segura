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
  margin-bottom: 7%;
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
  margin-left: 17px;
  align-items: center;
  display: flex;
  justify-content: between;
  bottom: 30%;
`;

export const ButtonText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;

export const DescText = styled.Text`
  font-size: 15px;
  color: #000;
`;

export const FormText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const InfoContainer = styled(View)`
  margin-bottom: 15px;
  margin-top: 15px;
  width: 110%;
  height: 6%;
  border-radius: 3px;
  background: #68b2f8;
  display: flex;
  align-items: center;
`;

export const TextAreaContainer = styled(View)`
  margin-bottom: 15px;
  margin-top: 15px;
  width: 110%;
  height: 15%;
  border-radius: 3px;
  border: 1px solid #68b2f8;
  display: flex;
  align-items: center;
`;

export const Label = styled(Text)`
  font-size: 16px;
  margin-bottom: 6px;
  font-weight: bold;
  color: #000;
`;

export const Input = styled.TextInput`
  width: 90%;
  font-size: 17px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 15px;
`;
