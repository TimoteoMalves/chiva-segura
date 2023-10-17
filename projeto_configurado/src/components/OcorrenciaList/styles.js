import styled from "styled-components/native";

export const Card = styled.View`
  background-color: #fff;
  border-radius: 8px;
  height: 50%;
  margin: 7px;
  margin-left: 7%;
  display: flex;
`;

export const Titulo = styled.Text`
  position: absolute;
  text-align: left;
  font-size: 23px;
  margin-left: 7px;
  margin-top: 5px;
`;

export const Descricao = styled.Text`
  font-size: 16px;
  text-align: top;
  margin-left: 5px;
  position: absolute;
  top: 50px;
`;

export const BotaoDetalhes = styled.TouchableOpacity`
  background-color: #68b2f8;
  width: 107px;
  height: 25px;
  border-radius: 5px;
  align-items: center;
  top: 60%;
  margin-left: 35%;
  font-weight: bold;
`;

export const ContainerLabels = styled.View`
  flex-direction: row;
  align-items: center;
  align-content: center;
  background-color: #fff;
  height: 20px;
  width: 100%;
  top: 30%;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  align-items: left;
  background-color: #fff;
  margin-left: 7px;
  height: 20px;
  width: 95%;
  top: 30%;
`;

export const Labels = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #000;
  align-self: flex-start;
  justify-content: flex-start;
  margin-left: 15px;
  margin-right: 25px;
`;

export const ButtonStatus = styled.TouchableOpacity`
  width: 107px;
  height: 22px;
  border-radius: 5px;
  align-items: center;
  align-self: center;
  align-content: center;
  background-color: #68b2f8;
  margin-left: 5px;
  margin-right: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

export const City = styled.Text`
  color: #000;
  font-size: 15px;
  font-weight: bold;
  top: 50%;
  margin-left: 50%;
`;

export const ModalContainer = styled.Modal``;

export const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro semi-transparente */
`;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 300px;
`;

export const ModalText = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

export const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #68b2f8;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
`;

export const ModalButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;
