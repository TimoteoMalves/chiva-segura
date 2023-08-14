import { View, Text, Image } from "react-native";
import styles from "./styles";

function GameCard({ game }) {
  // Função para gerar emojis de estrela
  const generateStarRating = (ratingScore) => {
    const numStars = Math.floor(ratingScore);
    return "⭐".repeat(numStars);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.name}</Text>
      <Text style={styles.data}>{`Platform: ${game.platform}`}</Text>
      <Text style={styles.data}>{`Genre: ${game.genre}`}</Text>
      <Text style={styles.data}>{`Release Date: ${game.releaseDate}`}</Text>
      <Text style={styles.data}>{`Rating: ${game.rating}`}</Text>
      <Text style={styles.data}>{`Developer: ${game.developer}`}</Text>
      <Text style={styles.data}>{generateStarRating(game.ratingScore)}</Text>
    </View>
  );
}

export default GameCard;
