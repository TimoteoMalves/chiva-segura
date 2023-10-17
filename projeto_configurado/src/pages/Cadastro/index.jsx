import React, { useState, useEffect } from "react";
import { Keyboard, Alert, View, ActivityIndicator } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import signupimg from "../../assets/signupimg.png";
import { createOccurrenceSchema } from "../../utils/createOccurrenceValidation";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

export default function Cadastro() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      status: "",
      risk_level: 0,
    },
    resolver: yupResolver(createOccurrenceSchema),
  });

  const onSubmit = async (data) => {
    Keyboard.dismiss();
    try {
      const token = await AsyncStorage.getItem("@authToken");
      const dataApi = new FormData();
      console.log(data);
      dataApi.append("title", data.title);
      dataApi.append("description", data.description);
      dataApi.append("category", data.category);
      dataApi.append("status", data.status);
      dataApi.append("risk_level", Number(data.risk_level));

      const response = await api.post(`occurrences/`, dataApi, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      reset({
        title: "",
        description: "",
        category: "",
        status: "",
        risk_level: 0,
      });
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Erro ao criar: ", error.message);
    }
  };

  if (loading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    );
  }
  return (
    <Container>
      <HeadImg source={signupimg} />
      <Header>Criar ocorrência</Header>
      <SubHeader>Insira os seus dados</SubHeader>
      <FormArea>
        <InputContainer>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Label>Título</Label>
                <Input
                  name="titulo"
                  control={control}
                  placeholder="Digite o título"
                  onChangeText={onChange}
                  errors={errors.title}
                  value={value}
                />
              </>
            )}
            name="title"
          />
        </InputContainer>

        <InputContainer>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Label>Descrição</Label>
                <Input
                  name="descricao"
                  control={control}
                  placeholder="Digite o descricao"
                  onChangeText={onChange}
                  errors={errors}
                  value={value}
                />
              </>
            )}
            name="description"
          />
        </InputContainer>

        <InputContainer>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Label>Categoria</Label>
                <Input
                  name="categoria"
                  control={control}
                  placeholder="Digite a categoria"
                  onChangeText={onChange}
                  errors={errors}
                  value={value}
                />
              </>
            )}
            name="category"
          />
        </InputContainer>

        <InputContainer>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Label>Nível de risco</Label>
                <Input
                  name="risco"
                  control={control}
                  placeholder="Digite o nivel de risco"
                  onChangeText={onChange}
                  errors={errors}
                  value={value}
                />
              </>
            )}
            name="risk_level"
          />
        </InputContainer>
        <InputContainer>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Label>Status</Label>
                <Input
                  name="status"
                  control={control}
                  placeholder="Digite o nivel de Status"
                  onChangeText={onChange}
                  errors={errors}
                  value={value}
                />
              </>
            )}
            name="status"
          />
        </InputContainer>
        <SubmitButton onPress={handleSubmit(onSubmit)}>
          <ButtonText>Cadastrar</ButtonText>
        </SubmitButton>
        <GoBackButton onPress={navigation.goBack}>
          <ButtonText>Lista de ocorrências</ButtonText>
        </GoBackButton>
      </FormArea>
    </Container>
  );
}
