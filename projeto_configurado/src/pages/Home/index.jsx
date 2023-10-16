import { Text, View, ScrollView, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";
import Img1 from "../../assets/ocorre.png";
import Img2 from "../../assets/localizacao.png";
import { Keyboard } from "react-native";
import DataCard from "../../components/OcorrenciaList/";

import {
  Container,
  HeadImg,
  HeaderText,
  HeadSubImg,
  HeaderButton,
  HeaderButtonText,
  List,
  HeaderArea,
  WarningText,
} from "./styles";

export default function Home() {
  Keyboard.dismiss();
  const navigation = useNavigation();

  const isFocused = useIsFocused();
  const [occurrence, setOccurrence = urence] = useState([]);
  const [loadingOccurrence, setLoadingOccurrence] = useState(false);

  async function loadOccurrence() {
    try {
      setLoadingOccurrence(true);
      const token = await AsyncStorage.getItem("@authToken");
      const response = await api.get(`occurrences`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOccurrence(response.data.data);
    } catch (error) {
      console.error("Erro ao carregar os usuários:", error);
    } finally {
      setLoadingOccurrence(false);
    }
  }

  useEffect(() => {
    if (isFocused) {
      loadOccurrence();
    } else [setOccurrence, isFocused];
  }, []);

  if (occurrence) {
    return (
      <Container>
        <HeaderArea>
          <HeadImg source={Img1} />
          <HeadSubImg source={Img2} />
          <HeaderText>Ocorrências perto de você</HeaderText>
          <HeaderButton>
            <HeaderButtonText onPress={() => navigation.navigate("Cadastro")}>
              Nova Ocorrência
            </HeaderButtonText>
          </HeaderButton>
        </HeaderArea>

        <List
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          data={occurrence}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <DataCard data={item} />}
        />
      </Container>
    );
  } else {
    return (
      <Container>
        <HeaderArea>
          <HeadImg source={Img1} />
          <HeadSubImg source={Img2} />
          <HeaderText>Ocorrências perto de você</HeaderText>
          <HeaderButton>
            <HeaderButtonText onPress={() => navigation.navigate("Cadastro")}>
              Nova Ocorrência
            </HeaderButtonText>
          </HeaderButton>
        </HeaderArea>
        <WarningText>There are no occurrence to be displayed</WarningText>
      </Container>
    );
  }
}
