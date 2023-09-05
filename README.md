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

# Criando um projeto com Requisição para uma API

## Trabalhando com axios
    
  - Para que possamos trabalhar com requisições para API's, podemos usar o **Axios**
  - Vamos instalar ele no projeto - **npm i axios**
  - Agora vamos criar dentro da pasta src, uma pasta chamada services
  - Nesta pasta services, vamos criar um arquivo api.js e inserir esse código
      
      ```jsx
      import axios from 'axios';

      //api = https://crud-user-mftn.onrender.com/
      //rota = users

      const api = axios.create({
        baseURL: 'https://crud-user-mftn.onrender.com/'
      });

      export default api;
      ```
      
  - Agora podemos realizar requisições para essa API
  - No nosso App.jsx vamos modificar os códigos

      ```jsx
      import React, { useEffect, useState} from 'react';
      import { View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';

      import api from './src/services/api';
      import Users from './src/components/Users';

      export default function App() {
        const [users, setUsers] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(()=> {

          async function loadUsers(){
            const response = await api.get('users');
            // console.log(response.data);
            setUsers(response.data);
            setLoading(false);
          }

          loadUsers();

        }, []);
        


      if(loading){
        return(
          <View style={{ alignItems: 'center', justifyContent:'center', flex:1 }}>
            <ActivityIndicator color="#121212" size={45} />
          </View>
        )
      } else {
        return (
          <View style={styles.container}>
            
            <FlatList
            data={filmes}
            keyExtractor={ item => String(item.id) }
            renderItem={ ({ item }) => <Users data={item} /> }
            />
      
          </View>
        );
      } 

      }

      const styles = StyleSheet.create({
        container:{
          flex:1,
        }
      });

      ```
  - Pronto, agora temos os nossos dados coletados na API e podemos usar eles
  - Lembre que é necessário criar um componente Users para mostrar esses dados

## Trabalhando com async storage
    
  - Para que possamos trabalhar com requisições para API's, podemos usar o **Async Storage**
  - Vamos instalar essa biblioteca - **npm i @react-native-async-storage/async-storage**
  - No arquivo App.jsx vamos testar com esse código

  ```jsx
      import React, { useState, useEffect }  from 'react';
      import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

      import AsyncStorage from '@react-native-async-storage/async-storage';

      export default function App() {
        const [input, setInput] = useState('');
        const [nome, setNome] = useState('');

        useEffect(()=>{
          async function loadData(){
            await AsyncStorage.getItem('@nome').then((value)=>{
              setNome(value)
            })
          }

          loadData();


        }, []);


        async function gravaNome(){
          await AsyncStorage.setItem('@nome', input)
          setNome(input);

          setInput('');
        }


      return (
        <View style={styles.container}>

          <View style={styles.viewInput}>
            <TextInput
            style={styles.input}
            value={input}
            onChangeText={ (texto) => setInput(texto) }
            />

            <TouchableOpacity onPress={ gravaNome }>
              <Text style={styles.botao}>+</Text>
            </TouchableOpacity>
          </View>


          <Text style={styles.nome}>{nome}</Text>

        </View>
        );
      }

      const styles = StyleSheet.create({
        container:{
          flex:1,
          alignItems: 'center',
          marginTop:35,
        },
        viewInput:{
          flexDirection: 'row',
          alignItems: 'center'
        },
        input:{
          width: 350,
          height: 40,
          borderColor: '#000',
          borderWidth: 1,
          padding: 10,
        },
        botao:{
          backgroundColor: '#222',
          color: '#FFF',
          height: 40,
          padding: 10,
          marginLeft: 4
        },
        nome:{
          marginTop: 15,
          fontSize: 30
        }
      })

      ```
  - Pronto, agora ao sair do nosso aplicativo e retornar, temos os dados salvos


# Trabalho Avaliativo - 25 pontos

## Aplicativo de Gestão de Pessoas Colaboradoras

  -  Para o desenvolvimento deste projeto, vamos usar esse (Figma)[ https://www.figma.com/file/XcoekGaK6gdC9pPmNvH7iJ/Manage-Your-Cards-(Community)?type=design&node-id=0%3A1&mode=design&t=oFMhQx8suZMkMZSs-1]
  - Vocês irão criar uma tela inicial seguindo o layout proposto e no botão "Get Started", a pessoa usuária deve ser direcionada para a segunda tela do Figma (use stack navigation)
  - Na segunda tela, teremos a listagem de todos usuários capturados nesta API - https://crud-user-mftn.onrender.com/users
  - Liste estes usuários seguindo o padrão de cards do layout
  - Adicione uma busca que ao digitar um nome e clicar na barra de pesquisa, ele mostre os resultados nos cards selecionados
  - Crie um menu na parte inferior (tab navigation), não precisa direcionar para nenhum lugar do aplicativo em específico 
  - No botão 'details', ao clicar, a pessoa usuária será direcionada para uma tela que mostra os detalhes daquela pessoa em específico, para isso, passe os dados dela via parâmetros da rota
  - Na tela de detalhes, capture estes dados e mostre de acordo com o layout. O botão 'return' vai direcionar de volta para a tela principal com todos usuários
 

  


