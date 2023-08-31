import { View, Text, Button } from 'react-native';
import { useLayoutEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native'
import styles from './styles';

function About () {
  const route = useRoute();
  const navigation = useNavigation();

  //useLayoutEffect é sícrono
  //primeiro vai rodar isso e depois renderizar o nosso conteúdo
  useLayoutEffect(() => {
    alert(route.params?.name)
    navigation.setOptions({
      title: route.params?.name === undefined ? 'Tela About' : `Olá ${route.params?.name}`
    })
  }, [navigation])

    return (
        <View style={styles.container}>
        <Text>About</Text>
        <Text>{route.params?.name}</Text>
        <Text>{route.params?.email}</Text>
        <Button title='Tela de Contato' onPress={() => navigation.navigate('Contact')} />
        <Button title='Tela Inicial' onPress={() => navigation.goBack()} />
      </View>
    )
}

export default About;