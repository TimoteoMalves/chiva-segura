import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Modal, Button } from "react-native";
import {
  ContainerLabels,
  Card,
  Descricao,
  Titulo,
  ModalBackground,
  ModalButton,
  ModalButtonContainer,
  ModalButtonText,
  ModalContainer,
  ModalContent,
  Labels,
  ButtonStatus,
  ButtonText,
  ModalText,
  City,
  ContainerButtons,
  BotaoDetalhes,
} from "./styles";

export default function UsersList({ data, onDelete }) {
  const navigation = useNavigation();
  const [isConfirmationModalVisible, setConfirmationModalVisible] =
    useState(false);

  const openConfirmationModal = () => {
    setConfirmationModalVisible(true);
  };

  const closeConfirmationModal = () => {
    setConfirmationModalVisible(false);
  };

  const confirmDeletion = () => {
    onDelete(data.id);
    closeConfirmationModal();
  };

  // function handleDetails() {
  //   navigation.navigate("DetailsUser", { id: data.id });
  // }

  return (
    <Card>
      <Titulo>{data.title}</Titulo>
      <Descricao>{data.description}</Descricao>
      <ContainerLabels>
        <Labels>Categorias</Labels>
        <Labels>Nível de risco</Labels>
        <Labels>Status</Labels>
      </ContainerLabels>

      <ContainerButtons>
        <ButtonStatus>
          <ButtonText>{data.category}</ButtonText>
        </ButtonStatus>
        <ButtonStatus>
          <ButtonText>{data.risk_level}</ButtonText>
        </ButtonStatus>
        <ButtonStatus>
          <ButtonText>{data.status}</ButtonText>
        </ButtonStatus>
      </ContainerButtons>

      <City>{data.city}</City>

      <BotaoDetalhes>
        <ButtonText>Ver detalhes</ButtonText>
      </BotaoDetalhes>

      <ModalContainer
        visible={isConfirmationModalVisible}
        transparent={true}
        animationType="slide"
      >
        <ModalBackground>
          <ModalContent>
            <ModalText>
              Tem certeza de que deseja excluir este usuário?
            </ModalText>
            <ModalButtonContainer>
              <ModalButton onPress={confirmDeletion}>
                <ModalButtonText>Confirmar</ModalButtonText>
              </ModalButton>
              <ModalButton onPress={closeConfirmationModal}>
                <ModalButtonText>Cancelar</ModalButtonText>
              </ModalButton>
            </ModalButtonContainer>
          </ModalContent>
        </ModalBackground>
      </ModalContainer>
    </Card>
  );
}
