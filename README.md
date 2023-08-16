# AULA

# React Native

## Criando um projeto com React Native no Expo

-  Para criar um projeto em React Native utilizando o Expo, siga os seguintes passos:
    -  Certifique-se de ter o Node.js instalado em sua máquina.
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

## Trabalhando com Componentes e Props

-  Os componentes são a base do desenvolvimento em React Native. Eles são basicamente funções JavaScript que retornam elementos visuais da interface de usuário.
-  Existem dois tipos de componentes em React Native: componentes funcionais e componentes baseados em classe.
-  Os componentes funcionais são mais simples e fáceis de criar. Eles são geralmente usados para criar componentes menores e mais simples. Já os componentes baseados em classe são mais complexos e são usados para criar componentes maiores e mais complexos.
-  Os componentes podem receber propriedades (props) que são passadas para eles quando são criados. As props são usadas para configurar o comportamento e a aparência do componente.
-  Para criar um componente em React Native, basta criar uma função que retorna o elemento visual desejado e exportá-la para uso em outros lugares do código. As props podem ser acessadas dentro da função através do objeto props.
-  É possível também passar funções como props para componentes, o que permite a comunicação entre componentes e a atualização de estado em componentes pai. Essa é uma técnica importante para criar aplicativos interativos e dinâmicos em React Native.

### Exemplo 1: Criando um componente simples

-  Vamos criar um componente simples
    
    ```jsx
    import React from 'react';
    import { Text } from 'react-native';
    
    const MeuComponente = () => {
      return (
        <Text>Olá, mundo!</Text>
      );
    }
    
    export default MeuComponente;
    
    ```
    
-  Podemos seguir incrementando nosso código com mais recursos e usar JSX
    
    ```jsx
    import { StyleSheet, Text, View, Image } from 'react-native';
    
    export default function App() {
    
      const name = 'Prof. Felipe Becker Nunes';
    
      return (
        <View style={styles.container}>
          <Image 
            source={{uri: 'https://faculdadeam.edu.br/favicon.ico'}}
            style={{width: 250, height: 250}}
          />
    
          <Text style={styles.title}>Hello World!</Text>
          <Text>Meu primeiro App!</Text>
    
          <Text>{name}</Text>
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
      },
    
    });
    ```
    
-  Vamos transformar nosso imagem em um componente Logo
-  Crie uma pasta na raiz principal chamada de src
-  Dentro dela crie uma pasta chamada components
-  Dentro de components, crie uma pasta chamada Logo e crie um arquivo chamado index.js
    
    ```jsx
    //src/components/Logo/index.js
    
    import { Image } from 'react-native';
    
    function Logo() {
        const imageUrl = 'https://faculdadeam.edu.br/favicon.ico';
    
        return (
            <Image 
            source={{uri: imageUrl}}
            style={{width: 250, height: 250}}
          />
        )
    }
    
    export default Logo;
    ```
    
-  Vamos modificar o nosso App.js para importar nosso componente Logo
    
    ```jsx
    import { StyleSheet, Text, View, Image } from 'react-native';
    import Logo from './src/components/Logo';
    
    export default function App() {
    
      const name = 'Prof. Felipe Becker Nunes';
    
      return (
        <View style={styles.container}>
          <Logo />
    
          <Text style={styles.title}>Hello World!</Text>
          <Text>Meu primeiro App!</Text>
    
          <Text>{name}</Text>
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
      },
    
    });
    ```
    
-  Eu poderia estar passando a url da imagem via props
    
    ```jsx
    import { StyleSheet, Text, View, Image } from 'react-native';
    import Logo from './src/components/Logo';
    
    export default function App() {
      const imageUrl = 'https://faculdadeam.edu.br/favicon.ico';
      const name = 'Prof. Felipe Becker Nunes';
    
      return (
        <View style={styles.container}>
          <Logo imageUrl={imageUrl}/>
    
          <Text style={styles.title}>Hello World!</Text>
          <Text>Meu primeiro App!</Text>
    
          <Text>{name}</Text>
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
      },
    
    });
    ```
    
    ```jsx
    import { Image } from 'react-native';
    
    function Logo(props) {
       const { imageUrl } = props;
    
        return (
            <Image 
            source={{uri: imageUrl}}
            style={{width: 250, height: 250}}
          />
        )
    }
    
    export default Logo;
    ```
    
-  Podemos trabalhar com a ideia de interação com botões
    
    ```jsx
    import { StyleSheet, Text, View, Button } from 'react-native';
    import Logo from './src/components/Logo';
    
    export default function App() {
      const imageUrl = 'https://faculdadeam.edu.br/favicon.ico';
    	const name = 'Prof. Felipe Becker Nunes';
    
      function mudarNome(){
        alert('fui clicado');
      }
    
      return (
        <View style={styles.container}>
          <Logo imageUrl={imageUrl}/>
    
          <Text style={styles.title}>Hello World!</Text>
          <Text>Meu primeiro App!</Text>
    
          <Text>{name}</Text>
    
          <Button title='Mudar nome' onPress={mudarNome}/>
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
      },
    
    });
    ```
    

### Props

-  Passagem de props é uma técnica utilizada em React Native para transmitir informações de um componente pai para um componente filho. As props são passadas como argumentos para o componente filho e podem ser usadas para configurar a aparência e comportamento do componente.
-  Um exemplo de como passar props em React Native é mostrar a imagem de perfil do usuário com base em seus dados. Podemos criar um componente chamado `UserProfile` que recebe as informações do usuário como props:
    
    ```jsx
    import React from 'react';
    import { Image, Text, View } from 'react-native';
    
    function UserProfile(props) {
      const { name, imageUrl } = props;
    
      return (
        <View>
          <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100 }} />
          <Text>{name}</Text>
        </View>
      );
    }
    
    export default UserProfile;
    
    ```
    
-  Em seguida, podemos usar o componente `UserProfile` em outro componente pai e passar as informações do usuário como props:
    
    ```jsx
    import React from 'react';
    import { View } from 'react-native';
    import UserProfile from './UserProfile';
    
    function App() {
      const user = {
        name: 'John Doe',
        imageUrl: '<https://example.com/profile.jpg>',
      };
    
      return (
        <View>
          <UserProfile name={user.name} imageUrl={user.imageUrl} />
        </View>
      );
    }
    
    export default App;
    
    ```
    
-  Dessa forma, o componente `UserProfile` receberá as informações do usuário como props e usará essas informações para exibir a imagem de perfil e o nome do usuário.

## Trabalhando com Estados

-  No React Native, estado (state) é uma forma de armazenar e gerenciar dados em um componente.
-  Ele permite que o componente reaja a alterações em seus dados e atualize a interface de usuário de acordo.
-  O estado é definido usando o hook `useState`, que é uma função que retorna um array com dois elementos: o valor atual do estado e uma função para atualizá-lo.
-  Um exemplo de como usar o estado em React Native é criar um componente `Counter` que exibe um contador em sua interface de usuário e permite que o usuário o aumente ou diminua:
    
    ```jsx
    import { useState } from 'react';
    import { View, Text, Button } from 'react-native';
    
    export default function Counter() {
      const [count, setCount] = useState(0);
    
      function increment() {
        setCount(count + 1);
      }
    
      function decrement() {
        setCount(count - 1);
      }
    
      return (
        <View>
          <Text>Count: {count}</Text>
          <Button title="+" onPress={increment} />
          <Button title="-" onPress={decrement} />
        </View>
      );
    }
    
    ```
    
-  Neste exemplo, o componente `Counter` usa o hook `useState` para definir o estado `count`, que é inicializado como 0.
-  Ele também define duas funções, `increment` e `decrement`, que atualizam o estado `count` quando o usuário clica nos botões "+" e "-", respectivamente.
-  A interface de usuário é atualizada automaticamente sempre que o estado muda, graças à natureza reativa do React Native.
-  Outro exemplo de uso do estado em React Native é criar um componente `TextInput` que permite ao usuário digitar um texto e exibi-lo em tempo real na interface de usuário:
    
    ```jsx
    import { useState } from 'react';
    import { View, TextInput, Text } from 'react-native';
    
    export default function TextInputExample() {
      const [text, setText] = useState('');
    
      function handleChange(newText) {
        setText(newText);
      }
    
      return (
        <View>
          <Text>{text}</Text>
          <TextInput value={text} onChangeText={handleChange} />
        </View>
      );
    }
    
    ```
    
-  Neste exemplo, o componente `TextInputExample` usa o hook `useState` para definir o estado `text`, que é inicializado como uma string vazia.
-  Ele também define a função `handleChange`, que atualiza o estado `text` sempre que o usuário digita um novo texto no componente `TextInput`. A interface de usuário é atualizada em tempo real com o texto digitado pelo usuário, graças ao estado reativo do React Native.

### Exemplo usando o App

-  Podemos criar um estado e alterar o valor deste estado de acordo com o click do botão
    
    ```jsx
    import {useState} from 'react';
    import { StyleSheet, Text, View, Button } from 'react-native';
    import Logo from './src/components/Logo';
    
    export default function App() {
      const [name, setName] = useState('Prof. Felipe Becker Nunes');
      const imageUrl = 'https://faculdadeam.edu.br/favicon.ico';
    
      function mudarNome(){
        //alert('fui clicado');
        setName('Prof. Felipe');
      }
    
      return (
        <View style={styles.container}>
          <Logo imageUrl={imageUrl}/>
    
          <Text style={styles.title}>Hello World!</Text>
          <Text>Meu primeiro App!</Text>
    
          <Text>{name}</Text>
    
          <Button title='Mudar nome' onPress={mudarNome}/>
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
      },
    
    });
    ```
    
-  Podemos ter vários estados
    
    ```jsx
    import {useState} from 'react';
    import { StyleSheet, Text, View, Button } from 'react-native';
    import Logo from './src/components/Logo';
    
    export default function App() {
      const [name, setName] = useState('Prof. Felipe Becker Nunes');
      const [idade, setIdade] = useState(30);
      const imageUrl = 'https://faculdadeam.edu.br/favicon.ico';
    
      function mudarNome(){
        //alert('fui clicado');
        setName('Prof. Felipe');
        setIdade(33);
      }
    
      return (
        <View style={styles.container}>
          <Logo imageUrl={imageUrl}/>
    
          <Text style={styles.title}>Hello World!</Text>
          <Text>Meu primeiro App!</Text>
    
          <Text>{name}</Text>
          <Text>{idade}</Text>
    
          <Button title='Mudar nome' onPress={mudarNome}/>
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
      },
    
    });
    ```
    
-  Podemos passar parâmetros nas funções
    
    ```jsx
    import {useState} from 'react';
    import { StyleSheet, Text, View, Button } from 'react-native';
    import Logo from './src/components/Logo';
    
    export default function App() {
      const [name, setName] = useState('Prof. Felipe Becker Nunes');
      const [idade, setIdade] = useState(30);
      const imageUrl = 'https://faculdadeam.edu.br/favicon.ico';
    
      function mudarNome(nome, idade){
        //alert('fui clicado');
        setName(nome);
        setIdade(idade);
      }
    
      return (
        <View style={styles.container}>
          <Logo imageUrl={imageUrl}/>
    
          <Text style={styles.title}>Hello World!</Text>
          <Text>Meu primeiro App!</Text>
    
          <Text>{name}</Text>
          <Text>{idade}</Text>
    
          <Button title='Mudar nome' onPress={() => mudarNome('Felipe', 33)}/>
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
      },
    
    });
    ```
    

## Trabalhando com Estilos

-  Podemos estilizar de várias maneiras diferentes usando Flexbox
    
    ```jsx
    import {useState} from 'react';
    import { StyleSheet, Text, View, Button } from 'react-native';
    import Logo from './src/components/Logo';
    
    export default function App() {
      const [name, setName] = useState('Prof. Felipe Becker Nunes');
      const [idade, setIdade] = useState(30);
      const imageUrl = 'https://faculdadeam.edu.br/favicon.ico';
    
      function mudarNome(nome, idade){
        //alert('fui clicado');
        setName(nome);
        setIdade(idade);
      }
    
      return (
        <View style={styles.container}>
    
          <View style={styles.header}>
            <Logo imageUrl={imageUrl}/>
            <Text style={styles.title}>Hello World!</Text>
            <Text>Meu primeiro App!</Text>
            <Text>{name}</Text>
            <Text>{idade}</Text>
          </View>
          <View style={styles.content}>
            <Button title='Mudar nome' onPress={() => mudarNome('Felipe', 33)}/>
            <Text>Teste</Text>
          </View>
          <View style={styles.footer}>
            <Text>Footer</Text>
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#e6e1e1',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      },
      header: {
        flex: 2,
        paddingTop: '12px',
        backgroundColor: 'red',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      content: {
        flex: 2,
        backgroundColor: 'blue',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      footer: {
        flex: 1,
        backgroundColor: 'green',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        color: 'red'
      },
    
    });
    ```
    
-  Podemos deixar mais perto do aspecto de um app
    
    ```jsx
    import {useState} from 'react';
    import { StyleSheet, Text, View, Button } from 'react-native';
    import Logo from './src/components/Logo';
    
    export default function App() {
      const [name, setName] = useState('Prof. Felipe Becker Nunes');
      const [idade, setIdade] = useState(30);
      const imageUrl = 'https://faculdadeam.edu.br/favicon.ico';
    
      function mudarNome(nome, idade){
        //alert('fui clicado');
        setName(nome);
        setIdade(idade);
      }
    
      return (
        <View style={styles.container}>
    
          <View style={styles.header}>
            <Logo imageUrl={imageUrl}/>
            <Text style={styles.title}>Hello World!</Text>
            <Text>Meu primeiro App!</Text>
            <Text>{name}</Text>
            <Text>{idade}</Text>
          </View>
          <View style={styles.content}>
            <Button title='Mudar nome' onPress={() => mudarNome('Felipe', 33)}/>
            <Text>Teste</Text>
          </View>
          <View style={styles.footer}>
            <Text>Footer</Text>
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#e6e1e1',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    		flexDirection: 'column'
      },
      header: {
        height: 250,
        paddingTop: '4%',
        backgroundColor: '#e6e1e1',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      content: {
        flex: 2,
        backgroundColor: '#ffffff',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      footer: {
        height: 65,
        backgroundColor: '#e6e1e1',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        color: 'red'
      },
    
    });
    ```
    

## Trabalhando com todos recursos

-  Podemos fazer uso de todos recursos vistos até o momento de forma conjunta
    
    ```jsx
    import React, { useState } from 'react';
    import { View, Text, TextInput, StyleSheet} from 'react-native';
    
    function App(){
      const [nome, setNome] = useState('');
    
      function pegaNome(texto){
    
        if(texto.length > 0){
          setNome('Bem vindo ' + texto);
        }else{
          setNome('');
        }
    
      }
      
      return(
       <View style={styles.container}>
    
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={ (text) => pegaNome(text) }
        />
    
        <Text style={styles.texto}> {nome} </Text>
    
       </View> 
      );
    }
    
    const styles = StyleSheet.create({
      container:{
        flex:1,
        marginTop: '20%'
      },
      input:{
        height: 45,
        borderWidth: 1,
        margin: 10,
        padding: 10,
        fontSize: 20,
      },
      texto:{
        textAlign: 'center',
        fontSize: 25
      }
    });
    
    export default App;
    ```
    
-  Podemos aprimorar nosso código
    
    ```jsx
    import React, { useState } from 'react';
    import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
    
    function App(){
      const [nome, setNome] = useState('');
      const [input, setInput] = useState('');
    
      function entrar(){
        
        if(input === ''){
          alert('Digite seu nome!');
          return;
        }
    
        setNome('Bem vindo: ' + input);
    
      }
    
      return(
       <View style={styles.container}>
    
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={ (texto) => setInput(texto) }
        />
    
        <Button title="Entrar" onPress={ entrar } />
    
        <Text style={styles.texto}> {nome} </Text>
    
       </View> 
      );
    }
    
    const styles = StyleSheet.create({
      container:{
        flex:1,
        marginTop: '20%'
      },
      input:{
        height: 45,
        borderWidth: 1,
        margin: 10,
        padding: 10,
        fontSize: 20,
      },
      texto:{
        textAlign: 'center',
        fontSize: 25,
        marginTop: 15
      }
    });
    
    export default App;
    ```
    

## Projeto Biscoito da Sorte

-  Vamos criar um app que traz frases diferentes ao quebrar um biscoito da sorte
    
    ```jsx
    import React, { useState } from 'react';
    import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
    import biscoito from './assets/biscoito.png';
    import biscoitoAberto from './assets/biscoitoAberto.png';
    
    function App() {
      const [img, setImg] = useState(biscoito);
      const [textoFrase, setTextoFrase] = useState('');
    
      let frases = [
        'Siga os bons e aprenda com eles.', 
        'O bom-senso vale mais do que muito conhecimento.', 
        'O riso é a menor distância entre duas pessoas.', 
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'
      ];
    
      function quebraBiscoito(){
        let numeroAleatorio = Math.floor(Math.random() * frases.length)
        
        setTextoFrase(' " ' + frases[numeroAleatorio] +' " ');
        setImg(biscoitoAberto);
      }
    
      function reiniciar(){
    
        setImg(biscoito);
        setTextoFrase('');
        
      }
    
     return (
       <View style={styles.container}>
    
        <Image
          source={img}
          style={styles.img}
        />
    
        <Text style={styles.textofrase}> {textoFrase} </Text>
    
        <TouchableOpacity  style={styles.botao}  onPress={ quebraBiscoito }>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto} >Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
    
        <TouchableOpacity  style={[styles.botao, { marginTop: 15, borderColor: '#121212' } ]}  onPress={ reiniciar }>
          <View style={styles.btnArea}>
            <Text style={[styles.btnTexto, { color: '#121212' } ]} >Reiniciar biscoito</Text>
          </View>
        </TouchableOpacity>    
    
       </View>
      );
    }
    
    const styles = StyleSheet.create({
      container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center' 
      },
      img:{
        width: 230,
        height: 230,
      },
      textofrase:{
        fontSize: 20,
        color: '#dd7b22',
        margin: 30,
        fontStyle: 'italic',
        textAlign: 'center'
      },
      botao:{
        width: 230,
        height: 50,
        borderColor: '#dd7b22',
        borderWidth: 2,
        borderRadius: 25
      },
      btnArea:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
      },
      btnTexto:{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#dd7b22'
      }
    })
    
    export default App;
    ```
    
    [biscoitoAberto.png](https://github.com/AMF-Sistemas-Informacao/desenvolvimento_sistemas_ii_2023_02/blob/aula01/biscoitoAberto.png)

    
    [biscoito.png](https://github.com/AMF-Sistemas-Informacao/desenvolvimento_sistemas_ii_2023_02/blob/aula01/biscoito.png)



    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---
    
    ---


**CRIANDO UM APLICATIVO DE JOGOS**
    
  -  Vamos iniciar renomeando o arquivo App.js para App.jsx
  -  Vamos criar um novo arquivo na raiz principal chamada AppStyles.js
      -  **AppStyles.js**
      
      ```jsx
      import { StyleSheet } from "react-native";
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          paddingTop: "8%",
        },
      });
      
      export default styles;
      ```
      
      -  **App.jsx**
      
      ```jsx
      import { Text, View } from "react-native";
      import styles from './AppStyles';
      
      export default function App() {
        return (
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        );
      }
      ```
      
  -  Vamos criar na raiz principal uma pasta chamada **`src`** e dentro dela criar uma pasta chamada **`components`**
  -  Nessa pasta components, crie uma pasta chamada **`Header`** e dentro dela crie um arquivo **`index.jsx`** e **`styles.js`**
      -  **index.jsx**
      
      ```jsx
      import {Text, View, TextInput} from "react-native";
      import {useState} from "react";
      import styles from "./styles";
      
      function Header() {
        const [filter, setFilter] = useState("");
      
        const handleFilterChange = text => {
          setFilter(text);
        };
      
        return (
          <View style={styles.header}>
            <Text style={styles.headerText}>Top Rated Games</Text>
            <TextInput
              style={styles.input}
              placeholder="Filtrar por nome"
              value={filter}
              onChangeText={handleFilterChange}
            />
          </View>
        );
      }
      
      export default Header;
      ```
      
      -  **styles.js**
      
      ```jsx
      import {StyleSheet} from "react-native";
      
      const styles = StyleSheet.create({
        header: {
          height: "250px",
          padding: 16,
          width: "100%",
          alignItems: "center",
          backgroundColor: "#000000",
        },
        headerText: {
          textAlign: "center",
          fontSize: 24,
          fontWeight: "bold",
          color: "#ffffff",
        },
        input: {
          backgroundColor: "#ffffff",
          borderRadius: 4,
          marginTop: 12,
          width: "80%",
          padding: 8,
        },
      });
      
      export default styles;
      ```
      
      -  **app.jsx**
      
      ```jsx
      import { Text, View } from "react-native";
      import Header from "./src/components/header";
      import styles from './AppStyles';
      
      export default function App() {
        return (
          <View style={styles.container}>
            <Header />
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        );
      }
      ```
      
  -  Ainda nessa pasta components, crie uma pasta chamada **`Footer`** e dentro dela crie um arquivo **`index.jsx`** e **`styles.js`**
      -  **index.jsx**
      
      ```jsx
      import {Text, View} from "react-native";
      import styles from "./styles";
      
      function Footer() {
        return (
          <View style={styles.footer}>
            <Text style={styles.footerText}>AMF Games</Text>
          </View>
        );
      }
      
      export default Footer;
      ```
      
      -  **styles.jsx**
      
      ```jsx
      import {StyleSheet} from "react-native";
      
      const styles = StyleSheet.create({
        footer: {
          width: "100%",
          height: "150px",
          padding: 16,
          alignItems: "center",
          backgroundColor: "#000000",
        },
        footerText: {
          fontSize: 14,
          fontWeight: "bold",
          color: "#ffffff",
        },
      });
      
      export default styles;
      ```
      
      -  **app.jsx**
      
      ```jsx
      import {Text, View} from "react-native";
      import Header from "./src/components/Header";
      import Footer from "./src/components/Footer";
      import styles from "./AppStyles";
      
      export default function App() {
        return (
          <View style={styles.container}>
            <Header />
            <Text>Open up App.js to start working on your app!</Text>
            <Footer />
          </View>
        );
      }
      ```
      
  -  Vamos pegar nossos dados dos jogos para trabalhar, crie um pasta dentro de **`src`** chamada **`data`** e crie um arquivo chamado **`games.js`** e adicione esse código
      
      ```jsx
      const games = [
        {
          id: 1,
          name: "The Witcher 3: Wild Hunt",
          platform: "PlayStation 4",
          genre: "Action RPG",
          releaseDate: "2015-05-19",
          rating: "Mature",
          developer: "CD Projekt Red",
          ratingScore: 4,
          image:
            "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f",
        },
        {
          id: 2,
          name: "Red Dead Redemption 2",
          platform: "Xbox One",
          genre: "Action Adventure",
          releaseDate: "2018-10-26",
          rating: "Mature",
          developer: "Rockstar Games",
          ratingScore: 5,
          image:
            "https://store-images.s-microsoft.com/image/apps.58752.68182501197884443.ac728a87-7bc1-4a0d-8bc6-0712072da93c.0cf58754-9802-46f8-8557-8d3ff32a627a?q=90&w=480&h=270",
        },
        {
          id: 3,
          name: "The Legend of Zelda: Breath of the Wild",
          platform: "Nintendo Switch",
          genre: "Action Adventure",
          releaseDate: "2017-03-03",
          rating: "Everyone",
          developer: "Nintendo",
          ratingScore: 2,
          image:
            "https://assets.nuuvem.com/image/upload/v1/products/5e49d770d597ec0f96e130bd/sharing_images/tmffdu3gugeb5al41qil.jpg",
        },
        {
          id: 4,
          name: "Fortnite",
          platform: "PC",
          genre: "Battle Royale",
          releaseDate: "2017-07-25",
          rating: "Teen",
          developer: "Epic Games",
          ratingScore: 4,
          image:
            "https://cdn2.unrealengine.com/25br-s25-egs-launcher-pdp-2560x1440-alt-logo-2560x1440-130a7d39cc26.jpg",
        },
        {
          id: 5,
          name: "Cyberpunk 2077",
          platform: "PlayStation 5",
          genre: "Action RPG",
          releaseDate: "2020-12-10",
          rating: "Mature",
          developer: "CD Projekt Red",
          ratingScore: 1,
          image:
            "https://cyberpunk-static.qtlglb.com/build/images/social-thumbnail-en-ddcf4d23.jpg",
        },
      ];
      
      export default games;
      ```
      
  -  No arquivo **`App.jsx`** vamos criar um estado para armazenar estes dados
      
      ```jsx
      import {Text, View} from "react-native";
      import {useState} from "react";
      import Header from "./src/components/Header";
      import Footer from "./src/components/Footer";
      import gamesData from "./src/data/games";
      import styles from "./AppStyles";
      
      export default function App() {
        const [filteredGames, setFilteredGames] = useState(gamesData);
      
        return (
          <View style={styles.container}>
            <Header />
            <Text>Open up App.js to start working on your app!</Text>
            <Footer />
          </View>
        );
      }
      ```
      
  -  Vamos criar agora nossa página de Games, que será nossa página principal
  -  Crie uma pasta dentro de src chamada **`pages`** e nela crie uma pasta chamada **`GameList`** e crie os arquivos index.jsx e styles.js nessa pasta
      -  **`index.jsx`**
      
      ```jsx
      import {
        FlatList,
        Text,
        View,
        TouchableOpacity,
        Modal,
        Button,
      } from "react-native";
      import {useState} from "react";
      import GameCard from "../../components/GameCard";
      import styles from "./styles";
      
      function GameList(props) {
        const {games} = props;
        const [modalVisible, setModalVisible] = useState(false);
        const [selectedGameId, setSelectedGameId] = useState(null);
      
        const handleGamePress = id => {
          setSelectedGameId(id);
          setModalVisible(true);
        };
      
        const renderGame = ({item}) => (
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
              keyExtractor={item => item.id}
            />
      
            <Modal
              animationType="slide"
              transparent
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(false);
              }}>
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
      ```
      
      -  **`styles.js`**
      
      ```jsx
      import {StyleSheet} from "react-native";
      
      const styles = StyleSheet.create({
        content: {
          flex: 1,
          width: "100%",
          paddingBottom: 24,
          alignItems: "center",
          backgroundColor: "#ffffff",
        },
        flatList: {
          width: "80%",
        },
        title: {
          fontSize: 18,
          fontWeight: "bold",
          paddingBottom: 4,
          textTransform: "uppercase",
          margin: 24,
          color: "#000000",
          borderBottomWidth: 2,
          borderBottomColor: "#000000",
        },
        modalContainer: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        modalContent: {
          backgroundColor: "#ffffff",
          padding: 48,
          borderRadius: 4,
        },
        modalText: {
          textAlign: "center",
          fontSize: 18,
          marginBottom: 36,
        },
        modalButton: {
          padding: 8,
          backgroundColor: "blue",
          borderRadius: 4,
        },
      });
      
      export default styles;
      ```
      
      -  **`app.jsx`**
      
      ```jsx
      import {View} from "react-native";
      import {useState} from "react";
      import Header from "./src/components/Header";
      import Footer from "./src/components/Footer";
      import GameList from "./src/pages/GameList";
      import gamesData from "./src/data/games";
      import styles from "./AppStyles";
      
      export default function App() {
        const [filteredGames, setFilteredGames] = useState(gamesData);
      
        return (
          <View style={styles.container}>
            <Header />
            <GameList games={filteredGames} />
            <Footer />
          </View>
        );
      }
      ```
      
  -  Falta adicionar o componente GameCard, crie em **`components`**, uma pasta chamada **`GameCard`** e adicione um arquivo **`index.jsx`** e **`styles.js`**
      -  **index.jsx**
      
      ```jsx
      import { View, Text, Image } from "react-native";
      import styles from "./styles";
      
      function GameCard({ game }) {
        // Função para gerar emojis de estrela
        const generateStarRating = (ratingScore) => {
          const numStars = Math.floor(ratingScore);
          return "⭐".repeat(numStars);
        };
      
        return (
          <View style={styles.card}>
            <Image source={{ uri: game.image }} style={styles.image} />
            <Text style={styles.title}>{game.name}</Text>
            <Text style={styles.data}>{`Platform: ${game.platform}`}</Text>
            <Text style={styles.data}>{`Genre: ${game.genre}`}</Text>
            <Text style={styles.data}>{`Release Date: ${game.releaseDate}`}</Text>
            <Text style={styles.data}>{`Rating: ${game.rating}`}</Text>
            <Text style={styles.data}>{`Developer: ${game.developer}`}</Text>
            <Text style={styles.data}>{generateStarRating(game.ratingScore)}</Text>
          </View>
        );
      }
      
      export default GameCard;
      ```
      
      -  **styles.js**
      
      ```jsx
      import { StyleSheet } from "react-native";
      
      const styles = StyleSheet.create({
        card: {
          flex: 1,
          backgroundColor: "#f5f5f5",
          borderRadius: 4,
          elevation: 4,
          margin: 8,
          padding: 16,
        },
        image: {
          width: "100%",
          borderRadius: 2,
          height: 150,
          resizeMode: "cover",
          marginBottom: 8,
        },
        title: {
          fontSize: 16,
          fontWeight: "bold",
          textAlign: "center",
          paddingBottom: 8,
        },
        data: {
          fontSize: 13,
          paddingBottom: 4,
          textAlign: "center",
        },
      });
      
      export default styles;
      ```
      
  -  Agora teremos quase pronta no aplicação já, falta adicionar o filtro
      -  **app.jsx**
      
      ```jsx
      import {View} from "react-native";
      import {useState} from "react";
      import Header from "./src/components/Header";
      import Footer from "./src/components/Footer";
      import GameList from "./src/pages/GameList";
      import gamesData from "./src/data/games";
      import styles from "./AppStyles";
      
      export default function App() {
        const [filteredGames, setFilteredGames] = useState(gamesData);
      
        const handleFilterChange = filterText => {
          const filtered = gamesData.filter(game =>
            game.name.toLowerCase().includes(filterText.toLowerCase()),
          );
          setFilteredGames(filtered);
        };
      
        return (
          <View style={styles.container}>
            <Header onFilterChange={handleFilterChange} />
            <GameList games={filteredGames} />
            <Footer />
          </View>
        );
      }
      ```
      
      -  **components/Header/index.jsx**
      
      ```jsx
      import {Text, View, TextInput} from "react-native";
      import {useState} from "react";
      import styles from "./styles";
      
      function Header({onFilterChange}) {
        const [filter, setFilter] = useState("");
      
        const handleFilterChange = text => {
          setFilter(text);
          onFilterChange(text);
        };
      
        return (
          <View style={styles.header}>
            <Text style={styles.headerText}>Top Rated Games</Text>
            <TextInput
              style={styles.input}
              placeholder="Filtrar por nome"
              value={filter}
              onChangeText={handleFilterChange}
            />
          </View>
        );
      }
      
      export default Header;
      ```
      
  -  Agora finalizamos nossa aplicação! =D


## Desafios Extras
  1) CRIAR UM CORAÇÃO DENTRO DE CADA CARD E CLICAR NELE PARA FAVORITAR O JOGO
  2) EXCLUIR JOGOS DA LISTA
  3) INSERIR OS DADOS NO MODAL DO JOGO CLICADO


## ATIVIDADE PRÁTICA

- USANDO COMO BASE O PROJETO JÁ CRIADO NA PASTA PROJETO_CONFIGURADO, CRIE UM APP DE FILMES
- ESTE APP DEVERÁ TER UM CABEÇALHO COM UM TÍTULO E UMA LOGO
- ESTE APP DEVERÁ TER UM RODAPÉ COM UM @APP_FILMES E UM LINK PARA ACESSAR A NETFLIX
- O CONTEÚDO DO APP DEVERÁ SER APRESENTADO NO FORMATO DE CARDS, EM QUE CADA CARD MOSTRA UM FILME
- REALIZE A APRESENTAÇÃO DOS CARDS COM OS FILMES EM ORDEM ALFABÉTICA
- CRIE A FUNCIONALIDADE DE PERMITIR A EXCLUSÃO DO FILME
- CRIE UM MODAL QUE APRESENTE O TÍTULO DO FILME E UM VÍDEO DO YOUTUBE COM O TRAILER DELE
- OS DADOS USADOS PARA ESTE APP ESTÃO NESTE ARRAY DE OBJETOS

    ```JSX
        const filmes = [
      {
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        diretor: "Peter Jackson",
        ano: 2001,
        genero: "Fantasia",
        avaliacao: 4.8,
        imagem: "https://i.ytimg.com/vi/Xy3nzSMZ4-M/maxresdefault.jpg"
      },
      {
        titulo: "Interestelar",
        diretor: "Christopher Nolan",
        ano: 2014,
        genero: "Ficção Científica",
        avaliacao: 4.7,
        imagem: "https://sagittariusrecords.com.br/wp-content/uploads/2021/10/A1smtRIAUvL._AC_SL1500_.jpg"
      },
      {
        titulo: "Toy Story",
        diretor: "John Lasseter",
        ano: 1995,
        genero: "Animação",
        avaliacao: 4.9,
        imagem: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/26E7C634EB29C137475AE05AC983080BAE7E2E3741C49987EEA2539A40A9262C/scale?width=1200&aspectRatio=1.78&format=jpeg"
      },
      {
        titulo: "Pantera Negra",
        diretor: "Ryan Coogler",
        ano: 2018,
        genero: "Ação",
        avaliacao: 4.6,
        imagem: "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/11/pantera-negra-1.webp?fit=1920%2C1080&ssl=1"
      },
      {
        titulo: "A Origem",
        diretor: "Christopher Nolan",
        ano: 2010,
        genero: "Ficção Científica",
        avaliacao: 4.8,
        imagem: "https://ovicio.com.br/wp-content/uploads/2020/08/20200802-filme-a-origem.jpg"
      },
      {
        titulo: "Os Incríveis",
        diretor: "Brad Bird",
        ano: 2004,
        genero: "Animação",
        avaliacao: 4.7,
        imagem: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C49E66CA232E9DEA180DA2F759592E5BA4F6EF0052C1FC65C6D2A3F89642A5E1/scale?width=1200&aspectRatio=1.78&format=jpeg"
      },
      {
        titulo: "A Viagem de Chihiro",
        diretor: "Hayao Miyazaki",
        ano: 2001,
        genero: "Animação",
        avaliacao: 4.9,
        imagem: "https://2.bp.blogspot.com/-IpUQ8xhIg8M/XpUlWryQyTI/AAAAAAAAJx4/XOknHqAffBYBii2iz7Mayx06hc7WbbgOwCK4BGAYYCw/s1600/a%2Bviagem%2Bde%2Bchihiro.png"
      },
      {
        titulo: "Cidade de Deus",
        diretor: "Fernando Meirelles",
        ano: 2002,
        genero: "Drama",
        avaliacao: 4.8,
        imagem: "https://updatecharts.com.br/wp-content/uploads/2022/08/cidade_de_deus.jpg"
      },
      {
        titulo: "Vingadores: Ultimato",
        diretor: "Anthony e Joe Russo",
        ano: 2019,
        genero: "Ação",
        avaliacao: 4.6,
        imagem: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/64EB1E97BD6DD3DE23D3C195BDA2672A251E23D27DC9C6831339A9EA87B16238/scale?width=1200&aspectRatio=1.78&format=jpeg"
      },
      {
        titulo: "Matrix",
        diretor: "The Wachowskis",
        ano: 1999,
        genero: "Ficção Científica",
        avaliacao: 4.7,
        imagem: "https://deliriumnerd.com/wp-content/uploads/2021/11/blog-cyncardoso-cultura-pop-cinema-e-series-matrix-4-vem-ai-1.jpg"
      }
    ];

    ``` 