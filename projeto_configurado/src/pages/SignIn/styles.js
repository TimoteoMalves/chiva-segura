import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const containerLogo = styled.View`
  width: 250px;
  height: 250px;
`;
export const Logo = styled.Image`
  width: 250px;
  height: 250px;
  object-fit: fill;
  top: -12%;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  font-size: 17px;
  margin-left: 35px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: #68b2f8;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkText = styled.Text`
  color: #171717;
`;
