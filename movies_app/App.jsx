import { View } from "react-native";
import { useState } from "react";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import GameList from "./src/pages/GameList";
import gamesData from "./src/data/games";
import styles from "./AppStyles";

export default function App() {
  const [filteredGames, setFilteredGames] = useState(gamesData);

  const handleFilterChange = (filterText) => {
    const filtered = gamesData.filter((game) =>
      game.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredGames(filtered);
  };

  return (
    <View style={styles.container}>
      <Header onFilterChange={handleFilterChange} />
      <GameList games={filteredGames} />
      <Footer />
    </View>
  );
}
