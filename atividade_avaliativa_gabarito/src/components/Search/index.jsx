import { View, TextInput } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
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
      <TextInput
        style={styles.input}
        placeholder="Search here"
        value={filter}
        onChangeText={handleFilterChange}
      />
      <FontAwesome5 style={styles.iconSearch} name="search" size={24} color="black" />
    </View>
  );
}

export default Header;