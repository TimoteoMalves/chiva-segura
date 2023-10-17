import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Keyboard, Alert, View, ActivityIndicator } from "react-native";
import api from "../../services/api";
import {
  Container,
  Header,
  HeadImg,
  FormArea,
  SubmitButton,
  InfoContainer,
  Label,
  DescText,
  TextAreaContainer,
  FormText,
  ButtonText,
} from "./styles";
import Img from "../../assets/signupimg.png";
import {
  useNavigation,
  useIsFocused,
  useRoute,
} from "@react-navigation/native";

export default function Detalhes() {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params.id;
  const [loading, setLoading] = useState(true);
  const [occurrence, setOccurrence] = useState({});

  useEffect(() => {
    async function loadOccurrence() {
      try {
        const token = await AsyncStorage.getItem("@authToken");

        const response = await api.get(`occurrences/${id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setOccurrence(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar a ocorrencia:", error);
      }
    }

    loadOccurrence();
  }, []);

  const onSubmitDelete = async () => {
    Keyboard.dismiss();

    try {
      const token = await AsyncStorage.getItem("@authToken");
      await api.delete(`occurrences/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Erro ao deletar: ", error.message);
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
      <HeadImg source={Img} />
      <Header>{occurrence.title}</Header>
      <FormArea>
        <Label>DESCRIÇÃO</Label>
        <TextAreaContainer>
          <DescText>{occurrence.description}</DescText>
        </TextAreaContainer>
        <Label>CATEGORIA</Label>
        <InfoContainer>
          <FormText>{occurrence.category}</FormText>
        </InfoContainer>
        <Label>NIVEL DE RISCO</Label>
        <InfoContainer>
          <FormText>{occurrence.risk_level}</FormText>
        </InfoContainer>
        <Label>STATUS</Label>
        <InfoContainer>
          <FormText>{occurrence.status}</FormText>
        </InfoContainer>
      </FormArea>
      <SubmitButton onPress={() => onSubmitDelete()}>
        <ButtonText>Excluir</ButtonText>
      </SubmitButton>
      <SubmitButton onPress={navigation.goBack}>
        <ButtonText>Lista de Ocorrência</ButtonText>
      </SubmitButton>
    </Container>
  );
}
