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
  ErrorText,
  Header,
  InputContainer,
  Label,
  ScrollViewContent,
  ButtonText,
  FormArea,
  HeadImg,
  SubmitButton,
  Link,
  LinkText,
  SubHeader,
  Input,
} from "./styles";

export default function App() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      cpf: "",
      birth_date: new Date(),
      city: "",
    },
    resolver: yupResolver(createUserSchema),
  });

  const onSubmit = async (data) => {
    Keyboard.dismiss();

    try {
      const birthDate = format(new Date(data.birth_date), "yyyy-MM-dd");
      const dataApi = {
        name: data.name,
        email: data.email.toLowerCase(),
        password: data.password,
        cpf: data.cpf,
        birth_date: birthDate,
        city: data.city,
      };
      console.log(dataApi);

      // // Envie os dados para a API
      await api.post("/users", dataApi);

      // Limpe os campos após o envio bem-sucedido
      reset({
        name: "",
        email: "",
        cpf: "",
        birth_date: new Date(),
        city: "",
      });
      navigation.navigate("Home");
    } catch (error) {
      // Lide com erros de envio para a API aqui
      console.error("Erro ao enviar dados:", error.message);
    }
  };

  return (
    <Container>
      <HeadImg source={signupimg} />
      <Header>Criar Conta</Header>
      <SubHeader>Insira os seus dados</SubHeader>
      <FormArea>
        <InputContainer>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Label>Nome</Label>
                <Input
                  name="name"
                  placeholder="Digite seu nome"
                  onChangeText={onChange}
                  value={value}
                  error={errors.name}
                />
              </>
            )}
            name="name"
          />
        </InputContainer>

        <InputContainer>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Label>E-mail</Label>
                <Input
                  name="email"
                  placeholder="Digite seu E-mail"
                  onChangeText={onChange}
                  value={value}
                  error={errors.email}
                />
              </>
            )}
            name="email"
          />
        </InputContainer>

        <InputContainer>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Label>CPF</Label>
                <Input
                  name="cpf"
                  placeholder="Digite seu CPF"
                  onChangeText={onChange}
                  value={value}
                  error={errors.cpf}
                  keyboardType="numeric"
                />
              </>
            )}
            name="cpf"
          />
        </InputContainer>
        <InputContainer>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Label>Data de Nascimento</Label>
                <Input
                  name="data"
                  placeholder="Digite sua data de nascimento"
                  onChangeText={onChange}
                  value={value}
                />
                {errors.birth_date && (
                  <ErrorText>{errors.birth_date.message}</ErrorText>
                )}
              </>
            )}
            name="birth_date"
          />
        </InputContainer>
        <InputContainer>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Label>Cidade</Label>
                <Input
                  name="cidade"
                  placeholder="Digite sua cidade"
                  onChangeText={onChange}
                  value={value}
                />
              </>
            )}
            name="city"
          />
        </InputContainer>
        <InputContainer>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Label>Senha</Label>
                <Input
                  name="password"
                  placeholder="Digite sua senha"
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={true}
                  error={errors.password}
                />
              </>
            )}
            name="password"
          />
        </InputContainer>
      </FormArea>
      <SubmitButton onPress={handleSubmit(onSubmit)}>
        <ButtonText>Cadastrar</ButtonText>
      </SubmitButton>
      <Link>
        <Label>
          Já possui cadastro?
          <LinkText onPress={() => navigation.navigate("SignIn")}>
            Login
          </LinkText>
        </Label>
      </Link>
    </Container>
  );
}
