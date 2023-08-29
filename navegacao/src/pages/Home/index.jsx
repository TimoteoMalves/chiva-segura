import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles';
import { useState } from 'react';

function Home () {
  const [name, setName] = useState('Felipe Becker Nunes');
  const [email, setEmail] = useState('nunesfb@gmail.com');
  const navigation = useNavigation();

  function handlePress(){
    navigation.navigate("About", { name: name, email: email })
  }

    return (
        <View style={styles.container}>
        <Text>Home</Text>
        <Button title='Ir para About' onPress={ handlePress } />
        <Button title='Abrir Drawer' onPress={ () => navigation.openDrawer() } />
      </View>
    )
}

export default Home;