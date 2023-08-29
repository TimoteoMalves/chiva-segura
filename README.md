# AULA

# React Native

## Criando um projeto com React Native no Expo

-  Para criar um projeto em React Native utilizando o Expo, siga os seguintes passos:
    -  Certifique-se de ter o Node.js instalado em sua máquina.
 
    -  Podemos instalar o Expo CLI globalmente

        ```
        npm i -g expo-cli
        ```
    -  Abra o terminal e crie um novo projeto executando o seguinte comando:
        
        ```
        npx create-expo-app meuapp ou npx create-expo-app --template
        ```
        
    -  Após a criação do projeto, acesse a pasta do projeto através do comando:
        
        ```
        cd nome-do-projeto
        ```
        
    -  Inicie o projeto digitando:
        
        ```
        npm start ou npm run web (somente se não funcionar no celular)
        ```
        
-  Utilize o dispositivo móvel ou um emulador para visualizar o projeto.
-  E com isso, você já terá criado um projeto em React Native utilizando o Expo.

## Criando um projeto com Navegação e Rotas
-  No arquivo App.js, faça as modificações seguintes
    
    ```jsx
    import { StyleSheet, Text, View } from 'react-native';
    
    export default function App() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Hello World!</Text>
          <Text>Meu primeiro App!</Text>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        color: 'red'
      } 
    });
    ```
    
-  Rode sua aplicação e veja o resultado

-  Projeto para ser construído seguindo esse [Figma](https://www.figma.com/file/hXfYrMBCAqlZyENIvWT7Da/Delivery-App?type=design&node-id=0%3A1&mode=design&t=BIfpWCaKBWsW2RTj-1)

