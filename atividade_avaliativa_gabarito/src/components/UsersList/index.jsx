import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from "expo-linear-gradient";
import styles from './styles';

export default function UsersList({ data }) {
  const navigation = useNavigation();
  const [isFavorited, setIsFavorited] = useState(false); // Estado para controlar se o usuário foi favoritado

  function handlePress(data) {
    navigation.navigate("Details", { data: data });
  }

  useEffect(() => {
    // Verificar se o usuário atual está nos favoritos ao carregar o componente
    async function checkFavorite() {
      try {
        const favorites = await AsyncStorage.getItem('favorites');
        if (favorites) {
          const favoritesArray = JSON.parse(favorites);
          setIsFavorited(favoritesArray.includes(data.id));
        }
      } catch (error) {
        console.error('Erro ao verificar favorito:', error);
      }
    }

    checkFavorite();
  }, [data.id]);

  function handlePress(data) {
    navigation.navigate("Details", { data: data });
  }

  async function toggleFavorite() {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      const favoritesArray = JSON.parse(favorites) || [];

      if (isFavorited) {
        // Se já for favorito, remova da lista
        const index = favoritesArray.findIndex((item) => item === data.id);
        if (index !== -1) {
          favoritesArray.splice(index, 1);
        }
      } else {
        // Se não for favorito, adicione à lista
        favoritesArray.push(data.id);
      }

      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
      setIsFavorited(!isFavorited); // Alternar o estado de favorito
    } catch (error) {
      console.error('Erro ao salvar favorito:', error);
    }
  }

  return (
    <View>
      <View style={styles.card}>
        <Image
          source={{ uri: data.image }}
          style={styles.perfil}
        />
        <Text style={styles.titulo}>{data.name}</Text>

        <LinearGradient
          colors={["#179AC3", "#4A4A4A"]}
          style={styles.botao}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <TouchableOpacity style={styles.botao} onPress={() => handlePress(data)}>
            <Text style={styles.botaoTexto}>Details</Text>
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.favoriteBtn} onPress={() => toggleFavorite(data.id)}>
            <Text style={styles.botaoTexto}>
              {
                !isFavorited ?
                  <MaterialIcons name="favorite-border" size={24} color="black" /> :
                  <MaterialIcons name="favorite" size={24} color="red" />
              }
            </Text>
          </TouchableOpacity> 
        </View>
      </View>
    </View>
  );
}