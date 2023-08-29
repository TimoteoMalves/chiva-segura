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

# Criando um projeto com Navegação e Rotas

## Trabalhando com ícones
    
  - Para que possamos adicionar ícones no nosso projeto, podemos usar a biblioteca do expo chamada **vector-icons**
  - Para instalar ela, rode esse comando - **`npm i @expo/vector-icons`**
  - Após isso, podemos acessar esse **[site](https://icons.expo.fyi/Index)** e verificar quais ícones queremos usar
  - Ao escolher um ícone, você irá importar ele e colocar neste formato
      
      ```jsx
      import {View, Text} from "react-native";
      import Ionicons from '@expo/vector-icons/Ionicons';
      import styles from './AppStyles';
      
      export default function App() {
        
        return (
          <View style={styles.container}>
            <Text>Hello World</Text>
            <Text>
              <Ionicons name='md-checkmark-circle' size={32} color='green' />;
            </Text>
          </View>
        );
      }
      ```
      
  - Teste no seu app e veja que o ícone apareceu!
  - Você pode usar ícones em vários locais, dentro de textos, botões, menu, etc.
  
  ## Trabalhando com rotas - Stack Navigation (Native)
  
  - A documentação para trabalharmos com rotas está nesse **[link](https://reactnavigation.org/docs/getting-started/)**
  - Vamos instalar a biblioteca - **`npm install @react-navigation/native`**
  - Como estamos trabalhando com o Expo, precisamos destas dependências
      - **`npx expo install react-native-screens react-native-safe-area-context`**
  - Vamos começar trabalhando com a **navegação em pilhas**
  - Para isso, rode o comando - **`npm install @react-navigation/native-stack`**
  - Agora vamos começar a trabalhar com nosso projeto
  - Crie na raiz principal uma pasta chamada **src** e dentro dela crie uma pasta chamada **pages**
  - Na pasta **pages**, crie 2 pastas, chamadas **Home** e **About**
  - Em cada pasta destas, crie os arquivos **index.jsx** e **styles**
  - Na página **Home**, adicione estes códigos
      
      ```jsx
      //HOME/index.jsx
      
      import { View, Text } from 'react-native';
      import styles from './styles';
      
      function Home () {
          return (
              <View style={styles.container}>
              <Text>Home</Text>
            </View>
          )
      }
      
      export default Home;
      ```
      
      ```jsx
      //HOME/styles.js
      
      import {StyleSheet} from "react-native";
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          paddingTop: "8%",
        },
      });
      
      export default styles;
      ```
      
  - Na página **About**, adicione estes códigos
      
      ```jsx
      //ABOUT/index.jsx
      
      import { View, Text } from 'react-native';
      import styles from './styles';
      
      function About () {
          return (
              <View style={styles.container}>
              <Text>About</Text>
            </View>
          )
      }
      
      export default About;
      ```
      
      ```jsx
      //HOME/styles.js
      
      import {StyleSheet} from "react-native";
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          paddingTop: "8%",
        },
      });
      
      export default styles;
      ```
      
  - Agora vamos importar esses componentes no nosso **App.jsx** e criar a **stack navigation**
      
      ```jsx
      //App.jsx
      
      import {View, Text} from "react-native";
      import Ionicons from '@expo/vector-icons/Ionicons';
      import { NavigationContainer } from '@react-navigation/native';
      import { createNativeStackNavigator } from '@react-navigation/native-stack';
      
      import Home from './src/pages/Home';
      import About from './src/pages/About';
      
      import styles from './AppStyles';
      
      const Stack = createNativeStackNavigator();
      
      export default function App() {
        
        return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="About" component={About}/>
            </Stack.Navigator>
            
            <View style={styles.container}>
              <Text>Hello World</Text>
              <Text>
                <Ionicons name='md-checkmark-circle' size={32} color='green' />;
              </Text>
            </View>
          </NavigationContainer>
        );
      }
      ```
      
  - Pronto, agora podemos testar e ver no nosso app que foi criada uma aba de navegação
  - Vamos adicionar um botão no componente Home para podermos navegar
      
      ```jsx
      //HOME/index.jsx
      
      import { View, Text, Button } from 'react-native';
      import { useNavigation } from '@react-navigation/native'
      import styles from './styles';
      
      function Home () {
        const navigation = useNavigation();
      
          return (
              <View style={styles.container}>
              <Text>Home</Text>
              <Button title='Ir para About' onPress={() => navigation.navigate("About")} />
            </View>
          )
      }
      
      export default Home;
      ```
      
  - Pronto, agora conseguimos navegar entre páginas
  - Vamos personalizar um pouco mais nossa navegação em stack
      
      ```jsx
      //App.jsx
      
      import {View, Text} from "react-native";
      import Ionicons from '@expo/vector-icons/Ionicons';
      import { NavigationContainer } from '@react-navigation/native';
      import { createNativeStackNavigator } from '@react-navigation/native-stack';
      
      import Home from './src/pages/Home';
      import About from './src/pages/About';
      
      import styles from './AppStyles';
      
      const Stack = createNativeStackNavigator();
      
      export default function App() {
        
        return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{title: 'Tela Home', headerStyle: { backgroundColor: '#000' }, headerTintColor: '#FFF', headerShown: true }
              }/>
              <Stack.Screen 
                name="About" 
                component={About}
                options={{ title: 'Tela About' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        );
      }
      ```
      
  - Agora podemos testar e ver as mudanças
  - Também podemos trabalhar com passagem de valores via componentes com o uso destes recursos de navegação
  - Vamos passar dados da **Home** para o **About**
      
      ```jsx
      // HOME/index.jsx
      
      import { View, Text, Button } from 'react-native';
      import { useNavigation } from '@react-navigation/native'
      import styles from './styles';
      import { useState } from 'react';
      
      function Home () {
        const [nome, setNome] = useState('Felipe Becker Nunes');
        const [email, setEmail] = useState('nunesfb@gmail.com');
        const navigation = useNavigation();
      
        function handlePress(){
          navigation.navigate("About", { nome: nome, email: email })
        }
      
          return (
              <View style={styles.container}>
              <Text>Home</Text>
              <Button title='Ir para About' onPress={ handlePress } />
            </View>
          )
      }
      
      export default Home;
      ```
      
      ```jsx
      //ABOUT/index.jsx
      
      import { View, Text } from 'react-native';
      import { useLayoutEffect } from 'react';
      import { useRoute, useNavigation } from '@react-navigation/native'
      import styles from './styles';
      
      function About () {
        const route = useRoute();
        const navigation = useNavigation();
      
        //useLayoutEffect é sícrono
        //primeiro vai rodar isso e depois renderizar o nosso conteúdo
        useLayoutEffect(() => {
          navigation.setOptions({
            title: route.params?.name === '' ? 'Tela About' : `Olá ${route.params?.name}`
          })
        }, [navigation])
      
          return (
              <View style={styles.container}>
              <Text>About</Text>
              <Text>{route.params?.name}</Text>
              <Text>{route.params?.email}</Text>
            </View>
          )
      }
      
      export default About;
      ```
      
  - Vamos criar mais uma página chamada **Contact** em **pages**
  - Adicione uma pasta em **pages** chamada **Contact** e os arquivos **index.jsx** e **styles.js** nela
      
      ```jsx
      //PAGES/Contact/index.jsx
      
      import styles from './styles';
      
      function Contact () {
      
          return (
              <View style={styles.container}>
              <Text>Contact</Text>
            </View>
          )
      }
      
      export default Contact;
      ```
      
  - No App.jsx vamos importar e criar a navegação desta página
      
      ```jsx
      //App.jsx
      
      import {View, Text} from "react-native";
      import Ionicons from '@expo/vector-icons/Ionicons';
      import { NavigationContainer } from '@react-navigation/native';
      import { createNativeStackNavigator } from '@react-navigation/native-stack';
      
      import Home from './src/pages/Home';
      import About from './src/pages/About';
      import Contact from './src/pages/Contact';
      
      import styles from './AppStyles';
      
      const Stack = createNativeStackNavigator();
      
      export default function App() {
        
        return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{title: 'Tela Home', headerStyle: { backgroundColor: '#000' }, headerTintColor: '#FFF', headerShown: true }
              }/>
              <Stack.Screen 
                name="About" 
                component={About}
                options={{ title: 'Tela About' }}
              />
              <Stack.Screen 
                name="Contact" 
                component={Contact}
                options={{ title: 'Tela Contact' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        );
      }
      ```
      
  - Agora vamos criar um botão na tela **About** para navegar até **Contact**
      
      ```jsx
      //PAGES/ABOUT/index.jsx
      
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
          navigation.setOptions({
            title: route.params?.name === '' ? 'Tela About' : `Olá ${route.params?.name}`
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
      ```
      
  - Pronto, agora conseguimos navegar pelas três páginas da nossa aplicação
  - Podemos também voltar para o inicio da nossa pilha de navegação (resetar)
      
      ```jsx
      //PAGES/CONTACT/index.jsx
      
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
      ```
      
  - Agora conseguimos voltar para o inicio de toda a navegação
  
  ## Trabalhando com rotas - Tabs Navigation
  
  - Vamos trabalhar com a navegação via Bottom Tabs
  - Para isso rode esse comando - **`npm install @react-navigation/bottom-tabs`**
  - Vamos modificar o App.jsx para criar a navegação por tabs
      
      ```jsx
      //App.jsx
      
      import {View, Text} from "react-native";
      import Ionicons from '@expo/vector-icons/Ionicons';
      import { NavigationContainer } from '@react-navigation/native';
      import { createNativeStackNavigator } from '@react-navigation/native-stack';
      import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
      
      import Home from './src/pages/Home';
      import About from './src/pages/About';
      import Contact from './src/pages/Contact';
      
      import styles from './AppStyles';
      
      const Stack = createNativeStackNavigator();
      const Tab = createBottomTabNavigator();
      
      export default function App() {
        
        return (
          <NavigationContainer>
            {/* <Stack.Navigator>
              <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{title: 'Tela Home', headerStyle: { backgroundColor: '#000' }, headerTintColor: '#FFF', headerShown: true }
              }/>
              <Stack.Screen 
                name="About" 
                component={About}
                options={{ title: 'Tela About' }}
              />
              <Stack.Screen 
                name="Contact" 
                component={Contact}
                options={{ title: 'Tela Contact' }}
              />
            </Stack.Navigator> */}
      
            <Tab.Navigator>
              <Tab.Screen
                name="Home"
                component={Home}
              />
              <Tab.Screen
                name="About"
                component={About}
              />
              <Tab.Screen
                name="Contact"
                component={Contact}
              />
            </Tab.Navigator>
          </NavigationContainer>
        );
      }
      ```
      
  - Observe que os ícones da navegação estão com problema, vamos precisar corrigir isso
  - Para isso, vamos importar eles e estilizar nosso **tab navigator**
      
      ```jsx
      //App.jsx
      
      import {View, Text} from "react-native";
      import Ionicons from '@expo/vector-icons/Ionicons';
      import { AntDesign } from '@expo/vector-icons'; 
      import { NavigationContainer } from '@react-navigation/native';
      import { createNativeStackNavigator } from '@react-navigation/native-stack';
      import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
      
      import Home from './src/pages/Home';
      import About from './src/pages/About';
      import Contact from './src/pages/Contact';
      
      import styles from './AppStyles';
      
      const Stack = createNativeStackNavigator();
      const Tab = createBottomTabNavigator();
      
      export default function App() {
        
        return (
          <NavigationContainer>
            {/* <Stack.Navigator>
              <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{title: 'Tela Home', headerStyle: { backgroundColor: '#000' }, headerTintColor: '#FFF', headerShown: true }
              }/>
              <Stack.Screen 
                name="About" 
                component={About}
                options={{ title: 'Tela About' }}
              />
              <Stack.Screen 
                name="Contact" 
                component={Contact}
                options={{ title: 'Tela Contact' }}
              />
            </Stack.Navigator> */}
      
            <Tab.Navigator
              screenOptions={{
                //headerShown: false,
                //tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: '#FFF',
                tabBarStyle: {
                  backgroundColor: '#000',
                  paddingBottom: 4,
                  paddingTop: 4,
                  height: '7%',
                  borderTopWidth: 2
                }
              }}
            >
              <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  tabBarLabel: 'Inicio',
                  tabBarIcon: ({ color, size }) => { 
                    return <AntDesign name="home" size={size} color={color} />
                    }
                }}
              />
              <Tab.Screen
                name="About"
                component={About}
                options={{
                  tabBarLabel: 'Inicio',
                  tabBarIcon: ({ color, size }) => { 
                    return <AntDesign name="infocirlceo" size={size} color={color} />
                    }
                }}
              />
              <Tab.Screen
                name="Contact"
                component={Contact}
                options={{
                  tabBarLabel: 'Inicio',
                  //headerShown: false,
                  tabBarIcon: ({ color, size }) => { 
                    return <AntDesign name="contacts" size={size} color={color} />
                    }
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        );
      }
      ```
      
  - Agora temos nosso **tab navigator** funcionando!
  
  ## Trabalhando com rotas - Stack e Tabs Navigation
  
  - Podemos optar por trabalhar com ambas as rotas de forma conjunta
  - Vamos criar uma pasta dentro de src chamada **routes** e nela um arquivo **index.js** e um arquivo **stackRoutes.js**
  - No **index.jsx** vamos acrescentar isso
      
      ```jsx
      //ROUTES/index.js
      
      import { AntDesign } from '@expo/vector-icons'; 
      import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
      
      import StackRoutes from './stackRoutes';
      
      import Home from '../pages/Home';
      import About from '../pages/About';
      import Contact from '../pages/Contact';
      
      const Tab = createBottomTabNavigator();
      
      export default function Routes() {
        
        return (
            <Tab.Navigator
              screenOptions={{
                //headerShown: false,
                //tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: '#FFF',
                tabBarStyle: {
                  backgroundColor: '#000',
                  paddingBottom: 4,
                  paddingTop: 4,
                  height: '7%',
                  borderTopWidth: 2
                }
              }}
            >
              <Tab.Screen
                name="HomeStack"
                component={StackRoutes}
                options={{
                  tabBarLabel: 'Inicio',
                  tabBarIcon: ({ color, size }) => { 
                    return <AntDesign name="home" size={size} color={color} />
                    }
                }}
              />
              <Tab.Screen
                name="About"
                component={About}
                options={{
                  tabBarLabel: 'Inicio',
                  tabBarIcon: ({ color, size }) => { 
                    return <AntDesign name="infocirlceo" size={size} color={color} />
                    }
                }}
              />
              <Tab.Screen
                name="Contact"
                component={Contact}
                options={{
                  tabBarLabel: 'Inicio',
                  //headerShown: false,
                  tabBarIcon: ({ color, size }) => { 
                    return <AntDesign name="contacts" size={size} color={color} />
                    }
                }}
              />
            </Tab.Navigator>
      
        );
      }
      ```
      
  - No arquivo **stackRoutes.js** vamos acrescentar isso
      
      ```jsx
      //stackRoutes.js
      
      import { createNativeStackNavigator } from '@react-navigation/native-stack';
      
      import Home from '../pages/Home';
      import About from '../pages/About';
      import Contact from '../pages/Contact';
      
      export default function StackRoutes() {
          const Stack = createNativeStackNavigator();
      
          return (
              <Stack.Navigator>
                  <Stack.Screen
                      name="Home"
                      component={Home}
                      options={{ title: 'Tela Home', headerStyle: { backgroundColor: '#000' }, headerTintColor: '#FFF', headerShown: true }
                      } />
                  <Stack.Screen
                      name="About"
                      component={About}
                      options={{ title: 'Tela About' }}
                  />
                  <Stack.Screen
                      name="Contact"
                      component={Contact}
                      options={{ title: 'Tela Contact' }}
                  />
              </Stack.Navigator>
          )
      }
      ```
      
  - No **App.jsx** vamos ajustar assim
      
      ```jsx
      //App.jsx
      
      import { NavigationContainer } from '@react-navigation/native';
      import Routes from './src/routes';
      import styles from './AppStyles';
      
      export default function App() {
        
        return (
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        );
      }
      ```
      
  - Pronto, agora temos duas formas de navegação integradas no nosso aplicativo
  
  ## Trabalhando com rotas - Drawer Navigation
  
  - Para trabalhar com essa navegação, vamos instalar sua biblioteca - **`npm install @react-navigation/drawer`**
  - Além disso, precisamos destas dependências - **`npx expo install react-native-gesture-handler react-native-reanimated`**
  - Agora vamos configurar o babel.config.js
      
      ```jsx
      //babel.config.js
      
      module.exports = function(api) {
        api.cache(true);
        return {
          presets: ['babel-preset-expo'],
          plugins: [
            'react-native-reanimated/plugin'
          ]
        };
      };
      ```
      
  - No App.jsx vamos adicionar o import dessa biblioteca
      
      ```jsx
      import 'react-native-gesture-handler';
      import { NavigationContainer } from '@react-navigation/native';
      import Routes from './src/routes';
      import styles from './AppStyles';
      
      export default function App() {
        
        return (
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        );
      }
      ```
      
  - Agora vamos adicionar nossa navegação usando Drawer na pasta **routes** em **index.js**
      
      ```jsx
      // Routes/index.js
      
      import { AntDesign } from '@expo/vector-icons'; 
      import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
      import { createDrawerNavigator } from '@react-navigation/drawer';
      
      import StackRoutes from './stackRoutes';
      
      import Home from '../pages/Home';
      import About from '../pages/About';
      import Contact from '../pages/Contact';
      
      const Tab = createBottomTabNavigator();
      const Drawer = createDrawerNavigator();
      
      /* <Tab.Navigator
              screenOptions={{
                //headerShown: false,
                //tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: '#FFF',
                tabBarStyle: {
                  backgroundColor: '#000',
                  paddingBottom: 4,
                  paddingTop: 4,
                  height: '7%',
                  borderTopWidth: 2
                }
              }}
            >
              <Tab.Screen
                name="HomeStack"
                component={StackRoutes}
                options={{
                  tabBarLabel: 'Inicio',
                  tabBarIcon: ({ color, size }) => { 
                    return <AntDesign name="home" size={size} color={color} />
                    }
                }}
              />
              <Tab.Screen
                name="About"
                component={About}
                options={{
                  tabBarLabel: 'Inicio',
                  tabBarIcon: ({ color, size }) => { 
                    return <AntDesign name="infocirlceo" size={size} color={color} />
                    }
                }}
              />
              <Tab.Screen
                name="Contact"
                component={Contact}
                options={{
                  tabBarLabel: 'Inicio',
                  //headerShown: false,
                  tabBarIcon: ({ color, size }) => { 
                    return <AntDesign name="contacts" size={size} color={color} />
                    }
                }}
              />
              </Tab.Navigator> */
      
      export default function Routes() {
        
        return (
          <Drawer.Navigator>
              <Drawer.Screen
                  name="HomeStack"
                  component={StackRoutes}
              />
              <Drawer.Screen
                    name="About"
                    component={About}
              />
              <Drawer.Screen
                  name="Contact"
                  component={Contact}
              />
          </Drawer.Navigator>
        );
      }
      ```
      
  - Podemos testar e verificar seu funcionamento
  - Podemos adicionar um botão para abrir o menu no formato Drawer
      
      ```jsx
      //PAGES/HOME/index.jsx
      
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
      ```
      
  - Podemos personalizar nosso drawer
      
      ```jsx
      //ROUTES/index.js
      
      import { AntDesign } from '@expo/vector-icons'; 
      import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
      import { createDrawerNavigator } from '@react-navigation/drawer';
      
      import StackRoutes from './stackRoutes';
      
      import Home from '../pages/Home';
      import About from '../pages/About';
      import Contact from '../pages/Contact';
      
      const Tab = createBottomTabNavigator();
      const Drawer = createDrawerNavigator();
      
      /* <Tab.Navigator
              screenOptions={{
                //headerShown: false,
                //tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: '#FFF',
                tabBarStyle: {
                  backgroundColor: '#000',
                  paddingBottom: 4,
                  paddingTop: 4,
                  height: '7%',
                  borderTopWidth: 2
                }
              }}
            >
              <Tab.Screen
                name="HomeStack"
                component={StackRoutes}
                options={{
                  tabBarLabel: 'Inicio',
                  tabBarIcon: ({ color, size }) => { 
                    return <AntDesign name="home" size={size} color={color} />
                    }
                }}
              />
              <Tab.Screen
                name="About"
                component={About}
                options={{
                  tabBarLabel: 'Inicio',
                  tabBarIcon: ({ color, size }) => { 
                    return <AntDesign name="infocirlceo" size={size} color={color} />
                    }
                }}
              />
              <Tab.Screen
                name="Contact"
                component={Contact}
                options={{
                  tabBarLabel: 'Inicio',
                  //headerShown: false,
                  tabBarIcon: ({ color, size }) => { 
                    return <AntDesign name="contacts" size={size} color={color} />
                    }
                }}
              />
              </Tab.Navigator> */
      
      export default function Routes() {
        
        return (
          <Drawer.Navigator
              screenOptions={{
                  headerShown: false,
      
                  drawerStyle: {
                      backgroundColor: '#121212'
                  },
      
                  drawerActiveBackgroundColor: '#3B3DBF',
                  drawerActiveTintColor: "#FFF",
      
                  drawerInactiveBackgroundColor: '#CCC',
                  drawerInactiveTintColor: "#000",
              }}
          >
              <Drawer.Screen
                  name="HomeStack"
                  component={StackRoutes}
                  options={{
                      title: 'Inicio'
                  }}
              />
              <Drawer.Screen
                    name="About"
                    component={About}
              />
              <Drawer.Screen
                  name="Contact"
                  component={Contact}
              />
          </Drawer.Navigator>
        );
      }
      ```
        

## Atividade Prática
-  Para que possamos exercitar os conceitos vistos nas últimas aulas e o conteúdo de hoje sobre navegação, vamos criar um projeto com rotas; 
-  O Projeto para ser construído está seguindo esse [Figma](https://www.figma.com/file/hXfYrMBCAqlZyENIvWT7Da/Delivery-App?type=design&node-id=0%3A1&mode=design&t=BIfpWCaKBWsW2RTj-1)
-  Temos uma página inicial (Home), depois somos direcionados para a página de registro (Register);
-  Após realizar o registro, somos direcionados para a página de dados pessoais (Personal Page);
-  Nessa página temos 3 íconos (Tab Navigation), em que podemos ser direcionamos para a Home, Register e Contact;
-  Na tela de Contact temos a possibilidade de retornar para a Home;

