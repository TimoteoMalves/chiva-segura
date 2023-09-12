import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";
import background from '../../../assets/background.png';
import styles from './styles';

function Initial() {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("Home")
  }

  return (
    <LinearGradient
      colors={["#111017", "#090320"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={background} style={styles.background} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Manage Your Employees. All in One Place</Text>
          <Text style={styles.title}>All in One Place</Text>
          <Text style={styles.subtitle}>Eliminate physical cards, get virtual data in your hand.</Text>
        </View>
        <LinearGradient
          style={styles.button}
          colors={["#179AC3", "#4A4A4A"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.startBtn}>Get Started</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </LinearGradient>
  )
}

export default Initial;