import styled from "styled-components/native";
import { Text, SafeAreaView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #f0f4ff;
`;

export const HeaderArea = styled.View`
  height: 20%;
`;

export const HeadImg = styled.Image`
  object-fit: cover;
  height: 100%;
`;

export const HeadSubImg = styled.Image`
  vertical-align: top;
  bottom: 83%;
  margin-left: 10%;
  max-width: 100%;
`;

export const HeaderText = styled(Text)`
  vertical-align: top;
  font-size: 25px;
  bottom: 115%;
  margin-left: 23%;
  color: #fff;
`;

export const HeaderButton = styled.TouchableOpacity`
  vertical-align: top;
  border: 1px solid #fff;
  font-size: 25px;
  bottom: 110%;
  margin-left: 60%;
  align-items: center;
  border-radius: 2%;
  width: 30%;
`;
export const HeaderButtonText = styled(Text)`
  color: #fff;
`;
export const List = styled.FlatList`
  flex: 1;
  width: 95%;
`;

export const WarningText = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  margin-left: 22px;
  top: 30%;
`;
