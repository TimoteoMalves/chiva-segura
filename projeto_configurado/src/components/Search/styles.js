import styled from "styled-components/native";

export const Header = styled.View`
  height: 60px;
  padding: 16px;
  margin-top: 2%;
  width: 90%;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f1f3f9;
`;

export const Input = styled.TextInput`
  background-color: #ffffff;
  border-color: #c5c5c7;
  border-width: 1px;
  border-radius: 4px;
  width: 90%;
  height: 36px;
  padding-left: 8px;
  margin-right: 12px;
`;

export const IconSearch = styled.Image`
  transform: scaleX(-1);
`;
