import { View, Text, Button } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import styles from './styles';

function Contact () {
    const navigation = useNavigation();

    function handleHome(){
        //pop seria voltar apenas uma para trás
        //popToTop volta para o inicio da pilha de navegação
        navigation.dispatch(StackActions.popToTop)
    }

    return (
        <View style={styles.container}>
        <Text>Contact</Text>
        <Button title='Voltar para Home' onPress={handleHome}/>
      </View>
    )
}

export default Contact;