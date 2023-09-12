import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";
import { format } from 'date-fns';
import styles from './styles';

function Details() {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#111017", "#090320"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{ uri: route.params?.data.image }}
            style={styles.perfil}
          />
          <Text style={styles.label}>Name</Text>
          <Text style={styles.text}>{route.params?.data.name}</Text>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.text}>{route.params?.data.email}</Text>
          <Text style={styles.label}>CPF</Text>
          <Text style={styles.text}>{route.params?.data.cpf}</Text>
          <Text style={styles.label}>Birth Date</Text>
          <Text style={styles.text}>{format(new Date(route.params?.data.birth_date), 'dd/MM/yyyy')}</Text>
          <Text style={styles.label}>Profile</Text>
          <Text style={styles.text}>{route.params?.data.admin ? 'Admin' : 'User'}</Text>
          <Text style={styles.label}>Salary</Text>
          <Text style={styles.text}>{route.params?.data.salary}</Text>
          <Text style={styles.label}>City</Text>
          <Text style={styles.text}>{route.params?.data.city}</Text>
        </View>
        <LinearGradient
          style={styles.btnReturn}
          colors={["#179AC3", "#4A4A4A"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.btnText}>Return</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </LinearGradient>
  )
}

export default Details;