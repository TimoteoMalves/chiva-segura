import { Text, View, TextInput } from "react-native";
import { useState } from "react";
import styles from "./styles";

function Header({ onFilterChange }) {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (text) => {
    setFilter(text);
    onFilterChange(text);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Top Rated Games</Text>
      <TextInput
        style={styles.input}
        placeholder="Filtrar por nome"
        value={filter}
        onChangeText={handleFilterChange}
      />
    </View>
  );
}

export default Header;
