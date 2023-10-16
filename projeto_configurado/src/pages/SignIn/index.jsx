import React, { useState, useContext } from "react";
import { Platform, ActivityIndicator } from "react-native";
import LogoImg from "../../assets/homeimg.png";

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
  Label,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <Logo source={LogoImg} />

        <AreaInput>
          <Label>E-MAIL</Label>
          <Input
            placeholder="Seu email"
            value={email}
            onChangeText={(text) => setEmail(text.toLowerCase())}
          />
        </AreaInput>

        <AreaInput>
          <Label>SENHA</Label>
          <Input
            placeholder="Sua senha"
            value={password}
            onChangeText={(text) => setPassword(text.toLowerCase())}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#68B2F8" />
          ) : (
            <SubmitText>Login</SubmitText>
          )}
        </SubmitButton>

        <Link onPress={() => navigation.navigate("SignUp")}>
          <LinkText>Criar nova conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
