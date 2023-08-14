import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { useState } from "react";
import GameCard from "../../components/GameCard";
import styles from "./styles";

function GameList(props) {
  const { games } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);

  const handleGamePress = (id) => {
    setSelectedGameId(id);
    setModalVisible(true);
  };

  const renderGame = ({ item }) => (
    <TouchableOpacity onPress={() => handleGamePress(item.id)}>
      <GameCard game={item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Jogos adicionados recentemente</Text>
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={games}
        renderItem={renderGame}
        keyExtractor={(item) => item.id}
      />

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedGameId !== null && (
              <Text style={styles.modalText}>ID do jogo: {selectedGameId}</Text>
            )}
            <Button
              style={styles.modalButton}
              title="Fechar"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default GameList;
