import React, { useState } from "react";
import { Keyboard } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import signupimg from "../../assets/signupimg.png";

import TextInput from "../../components/TextInput";
import { createUserSchema } from "../../utils/createUserValidation";
import { format } from "date-fns";
import api from "../../services/api";
import {
  Container,
  Header,
  InputContainer,
  Label,
  ButtonText,
  FormArea,
  HeadImg,
  SubmitButton,
  SubHeader,
  Input,
  SelectOpc,
  GoBackButton,
} from "./styles";

export default function App() {
  const navigation = useNavigation();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [risco, setRisco] = useState("");
  const [status, setStatus] = useState("");

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      status: "",
      status: "",
    },
    resolver: yupResolver(createUserSchema),
  });

  const onSubmit = async (data) => {
    Keyboard.dismiss();

    try {
      // const birthDate = format(new Date(data.birth_date), "yyyy-MM-dd");
      const dataApi = {
        title: titulo,
        description: descricao.toLowerCase(),
        category: categoria,
        status: risco,
        status: status,
      };
      console.log(dataApi);

      await api.post("/occurrences", dataApi);

      // Limpando
      reset({
        title: "",
        description: "",
        category: "",
        status: "",
        status: "",
      });
      console.log("obaaa");
      navigation.navigate("Home");
    } catch (error) {
      console.error("Erro ao enviar dados:", error.message);
    }
  };

  return (
    <Container>
      <HeadImg source={signupimg} />
      <Header>Criar ocorrência</Header>
      <SubHeader>Insira os seus dados</SubHeader>
      <FormArea>
        <InputContainer>
          <>
            <Label>Título</Label>
            <Input
              name="titulo"
              placeholder="Digite o título"
              onChangeText={(text) => setTitulo(text.toLowerCase())}
              value={titulo}
            />
          </>
        </InputContainer>

        <InputContainer>
          <>
            <Label>Descrição</Label>
            <Input
              name="descricao"
              placeholder="Digite a descrição"
              onChangeText={(text) => setDescricao(text.toLowerCase())}
              value={descricao}
            />
          </>
        </InputContainer>

        <InputContainer>
          <>
            <Label>Categoria</Label>
            <Input
              name="categoria"
              placeholder="Digite a categoria"
              onChangeText={(text) => setCategoria(text.toLowerCase())}
              value={categoria}
            />
          </>
        </InputContainer>

        <InputContainer>
          <>
            <Label>Nível de risco</Label>
            <Input
              name="risco"
              placeholder="Selecione o nível de risco"
              onChangeText={(text) => setRisco(text.toLowerCase())}
              value={risco}
            />
          </>
        </InputContainer>
        <InputContainer>
          <>
            <Label>Status</Label>
            <Input
              name="status"
              placeholder="Selecione o status"
              onChangeText={(text) => setStatus(text.toLowerCase())}
              value={status}
            />
          </>
        </InputContainer>
      </FormArea>
      <SubmitButton onPress={handleSubmit(onSubmit())}>
        <ButtonText>Cadastrar</ButtonText>
      </SubmitButton>
      <GoBackButton onPress={navigation.goBack}>
        <ButtonText>Lista de ocorrências</ButtonText>
      </GoBackButton>
    </Container>
  );
}
