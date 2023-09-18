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

# Realizando login em um aplicativo e usando Context e estilizando com Styled Components

## Context e Async Storage
    
  - Para que possamos trabalhar com estes recursos, vamos precisar de algumas libs
  - Vamos instalar no projeto
    - **npm i @react-native-async-storage/async-storage**
    - **npm i @react-navigation/native-stack**
    - **npm i axios**
    - **npm i react-native-gesture-handler**
    - **npm i styled-components**
  - No arquivo App.jsx, vamos adicionar o seguinte código:
    ```js
    // APP.JSX

    import 'react-native-gesture-handler';
    import React from 'react';
    import {StatusBar} from 'react-native';

    import {NavigationContainer} from '@react-navigation/native';

    import Routes from './src/routes';

    import AuthProvider from './src/contexts/auth';

    export default function App() {
      
      return (
        <NavigationContainer>
          <AuthProvider>
            <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
            <Routes />
          </AuthProvider>
        </NavigationContainer>
      );
    }

    ```
  - Vamos criar na pasta src, uma pasta chamada services e adicionar o arquivo api.js
    ```js
    //SRC/SERVICES/API.JS

    import axios from 'axios';

    const api = axios.create({
      baseURL: 'https://crud-user-mftn.onrender.com/',
    });

    export default api;

    ```
  - Agora na pasta src, vamos criar uma pasta contexts dentro dela
  - Nessa pasta contexts, crie um arquivo auth.js e adicione este código
    ```js
    //SRC/CONTEXTS/AUTH.JS

    import React, { createContext, useState, useEffect } from 'react';
    import { Alert } from 'react-native';

    import api from '../services/api';
    import { useNavigation } from '@react-navigation/native';

    import AsyncStorage from '@react-native-async-storage/async-storage';

    export const AuthContext = createContext({});

    function AuthProvider({ children }) {
      const [user, setUser] = useState(null);
      const [loadingAuth, setLoadingAuth] = useState(false);
      const [loading, setLoading] = useState(true);

      const navigation = useNavigation();

      useEffect(() => {

        async function loadStorage() {
          const storageUser = await AsyncStorage.getItem('@authToken');
          const storedUserString = await AsyncStorage.getItem('@user');
          console.log(storageUser);
          console.log(storedUserString);
          if (storageUser) {
            console.log(storedUserString)
            setUser(JSON.parse(storedUserString));
            //navigation.navigate('Home');
            setLoading(false);

            //navigation.navigate('SignIn');

          }
          setLoading(false);
        }
        setLoading(true);
        loadStorage();
      }, [])

      async function signIn(email, password) {
        setLoadingAuth(true);

        //console.log(email, password)

        try {

          const response = await api.post('auth/login', {
            email: email,
            password: password
          })
          //console.log(response.data)
          const { token } = response.data;
          const user = { email: email };


          await AsyncStorage.setItem('@authToken', token);
          await AsyncStorage.setItem('@user', JSON.stringify(user));
          setUser(user);

          api.defaults.headers['Authorization'] = `Bearer ${token}`;

          setLoadingAuth(false);
          //navigation.navigate('Home');

        } catch (err) {
          console.log("ERRO AO LOGAR ", err);
          Alert.alert('E-mail ou senha incorretos!');
          setLoadingAuth(false);
        }
      }

      async function signOut() {
        await AsyncStorage.clear()
          .then(() => {
            setUser(null);
            navigation.navigate('SignIn');
          })
      }

      return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loadingAuth, loading }}>
          {children}
        </AuthContext.Provider>
      )
      }

      export default AuthProvider;
      ```
  - Agora crie dentro de src, uma pasta chamada routes e um arquivo index.js
    ```js
    //SRC/ROUTES/INDEX.JS

    import React, { useContext } from 'react';
    import { View, ActivityIndicator } from 'react-native';

    import { AuthContext } from '../contexts/auth'

    import AuthRoutes from './auth.routes';
    import AppRoutes from './app.routes';

    function Routes(){
      const { signed, loading } = useContext(AuthContext);

      if(loading){
        return(
          <View 
          style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F0F4FF'
          }}>
            <ActivityIndicator size="large" color="#131313" />
          </View>
        )
      }

      return(
        signed ? <AppRoutes/> : <AuthRoutes/>
      )
    }

    export default Routes;
    ```
  - Agora crie um arquivo dentro de routes, chamado app.routes.js
    ```js
    //SRC/ROUTES/APP.ROUTES.JS

    import React from 'react';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';

    import Home from '../pages/Home';

    const AuthStack = createNativeStackNavigator();

    function AuthRoutes() {
        return (
            <AuthStack.Navigator>
                <AuthStack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
            </AuthStack.Navigator>
        )
    }

    export default AuthRoutes;
    ```
  - Agora crie um arquivo dentro de routes, chamado auth.routes.js
    ```js
    //SRC/ROUTES/AUTH.ROUTES.JS

    import React from 'react';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';

    import SignIn from '../pages/SignIn';

    const AuthStack = createNativeStackNavigator();

    function AuthRoutes() {
        return (
            <AuthStack.Navigator>
                <AuthStack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{
                        headerShown: false,
                    }}
                />
            </AuthStack.Navigator>
        )
    }

    export default AuthRoutes;
    ```
  - Vamos criar uma pasta chamada pages dentro de src
  - Vamos criar uma pasta Home em pages, com os arquivos index.jsx e styles.js
    ```js
    //SRC/PAGES/HOME/INDEX.JSX

    import React, { useContext } from 'react';
    import { ActivityIndicator } from 'react-native';
    import {
        Container,
        Message,
        Name,
        NewLink,
        NewText,
        LogoutButton,
        LogoutText
    } from './styles'


    import { AuthContext } from '../../contexts/auth';

    import { useNavigation } from '@react-navigation/native'

    export default function Home() {
        const { user, signOut, loading } = useContext(AuthContext);
        const navigation = useNavigation();

        if (loading) {
            return (
              <ActivityIndicator size={20} color="#000" />
            )
          }

        return (
            <Container>

                <Message>
                    Hey, bem vindo de volta!
                </Message>

                <Name numberOfLines={1} >
                    {user && user.email}
                </Name>

                <NewLink onPress={() => navigation.navigate('Registrar')}>
                    <NewText>Fazer registro</NewText>
                </NewLink>

                <LogoutButton onPress={() => signOut()}>
                    <LogoutText>Sair</LogoutText>
                </LogoutButton>
            </Container>
        )
    }
    ```

    ```js
    //SRC/PAGES/HOME/STYLES.JS
    import styled from 'styled-components/native';

    export const Container = styled.SafeAreaView`
      flex: 1;
      background-color: #F0F4FF;
      align-items: center;
    `;

    export const Message = styled.Text`
      font-size: 18px;
      font-weight: bold;
      margin-top: 24px;
    `;

    export const Name = styled.Text`
      font-size: 24px;
      margin-bottom: 24px;
      margin-top: 8px;
      padding: 0 14px;
      color: #121212;
    `;

    export const NewLink = styled.TouchableOpacity`
      background-color: #3b3dbf;
      width: 90%;
      height: 45px;
      border-radius: 8px;
      align-items: center;
      justify-content: center;
      margin-bottom: 14px;
    `;

    export const NewText = styled.Text`
      font-size: 18px;
      font-weight: bold;
      color: #FFF;
    `;

    export const LogoutButton = styled.TouchableOpacity`
      justify-content: center;
      align-items: center;
      width: 90%;
      height: 45px;
      border-width: 1px;
      border-radius: 8px;
      border-color: #c62c36;
    `;

    export const LogoutText = styled.Text`
      font-size: 18px;
      font-weight: bold;
      color: #c62c36;
    `;
    ```
  - Vamos criar uma pasta SignIn em pages, com os arquivos index.jsx e styles.js
    ```js
    //SRC/PAGES/SIGNIN/INDEX.JSX
    import React, { useState, useContext } from 'react';
    import { Platform, ActivityIndicator } from 'react-native';
    import LogoImg from '../../assets/logo.png';

    import {
      Background,
      Container,
      Logo,
      AreaInput,
      Input,
      SubmitButton,
      SubmitText,
      Link,
      LinkText
    } from './styles';

    import { useNavigation } from '@react-navigation/native';

    import { AuthContext } from '../../contexts/auth'

    export default function SignIn() {
      const navigation = useNavigation();
      const { signIn, loadingAuth } = useContext(AuthContext);

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');


      function handleLogin() {
        signIn(email, password);
      }

      return (
        <Background>

          <Container
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled
          >
            <Logo
              source={LogoImg}
            />

            <AreaInput>
              <Input
                placeholder="Seu email"
                value={email}
                onChangeText={(text) => setEmail(text.toLowerCase())}
              />
            </AreaInput>

            <AreaInput>
              <Input
                placeholder="Sua senha"
                value={password}
                onChangeText={(text) => setPassword(text.toLowerCase())}
                secureTextEntry={true}
              />
            </AreaInput>

            <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
              {
                loadingAuth ? (
                  <ActivityIndicator size={20} color="#FFF" />
                ) : (
                  <SubmitText>Acessar</SubmitText>
                )
              }
            </SubmitButton>

            <Link onPress={() => navigation.navigate('SignUp')}>
              <LinkText>Criar uma conta!</LinkText>
            </Link>

          </Container>

        </Background>
      )
    }
    ```
    
    ```js
    //SRC/PAGES/SIGNIN/STYLES.JS
    import styled from 'styled-components/native';

    export const Background = styled.View`
      flex:1;
      background-color: #F0F4FF;
    `;

    export const Container = styled.KeyboardAvoidingView`
      flex:1;
      align-items: center;
      justify-content: center;
    `;

    export const Logo = styled.Image`
      margin-bottom: 25px;
      width: 80%;
      height: 250px;
    `;

    export const AreaInput = styled.View`
      flex-direction: row;
    `;

    export const Input = styled.TextInput`
      background-color: #FFF;
      width: 90%;
      font-size: 17px;
      padding: 10px;
      border-radius: 8px;
      color: #121212;
      margin-bottom: 15px;
    `;


    export const SubmitButton = styled.TouchableOpacity`
      width: 90%;
      height: 45px;
      border-radius: 8px;
      background-color: #3b3dbf;
      margin-top: 10px;
      align-items: center;
      justify-content: center;
    `;

    export const SubmitText = styled.Text`
      font-size: 20px;
      color: #FFF;
    `;

    export const Link = styled.TouchableOpacity`
      margin-top: 10px;
      margin-bottom: 10px;
    `;

    export const LinkText = styled.Text`
      color: #171717;
    `;
    ```
  - SD

# Trabalho Avaliativo - 25 pontos

## Aplicativo de Gestão de Pessoas Colaboradoras

  -  Para o desenvolvimento deste projeto, vamos usar esse [Figma](https://www.figma.com/file/XcoekGaK6gdC9pPmNvH7iJ/Manage-Your-Cards-(Community)?type=design&node-id=0%3A1&mode=design&t=oFMhQx8suZMkMZSs-1)
  - Vocês irão criar uma tela inicial seguindo o layout proposto e no botão "Get Started", a pessoa usuária deve ser direcionada para a segunda tela do Figma (use stack navigation)
  - Na segunda tela, teremos a listagem de todos usuários capturados nesta [API](https://crud-user-mftn.onrender.com/users)
  - Liste estes usuários seguindo o padrão de cards do layout
  - Adicione uma busca que ao digitar um nome e clicar na barra de pesquisa, ele mostre os resultados nos cards selecionados
  - Crie um menu na parte inferior (tab navigation), não precisa direcionar para nenhum lugar do aplicativo em específico 
  - No botão 'details', ao clicar, a pessoa usuária será direcionada para uma tela que mostra os detalhes daquela pessoa em específico, para isso, passe os dados dela via parâmetros da rota
  - Na tela de detalhes, capture estes dados e mostre de acordo com o layout. O botão 'return' vai direcionar de volta para a tela principal com todos usuários
  
  **Extra**
  - Crie um icone de coração para favoritar usuários
  - Salve os usuários favoritos para que ao sair e retornar ao aplicativo, essas suas preferências estejam armazenadas (async storage)

  


