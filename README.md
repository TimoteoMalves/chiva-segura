# AULA

# React Native

## Criando um projeto com React Native no Expo

- [ ]  Para criar um projeto em React Native utilizando o Expo, siga os seguintes passos:
    - [ ]  Certifique-se de ter o Node.js instalado em sua máquina.
    - [ ]  Abra o terminal e crie um novo projeto executando o seguinte comando:
        
        ```
        npx create-expo-app meuapp
        ```
        
    - [ ]  Após a criação do projeto, acesse a pasta do projeto através do comando:
        
        ```
        cd nome-do-projeto
        ```
        
    - [ ]  Inicie o projeto digitando:
        
        ```
        npm start
        ```
        
- [ ]  Utilize o dispositivo móvel ou um emulador para visualizar o projeto.
- [ ]  E com isso, você já terá criado um projeto em React Native utilizando o Expo.
- [ ]  No arquivo App.js, faça as modificações seguintes
    
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
    
- [ ]  Rode sua aplicação e veja o resultado

## Trabalhando com Componentes e Props

- [ ]  Os componentes são a base do desenvolvimento em React Native. Eles são basicamente funções JavaScript que retornam elementos visuais da interface de usuário.
- [ ]  Existem dois tipos de componentes em React Native: componentes funcionais e componentes baseados em classe.
- [ ]  Os componentes funcionais são mais simples e fáceis de criar. Eles são geralmente usados para criar componentes menores e mais simples. Já os componentes baseados em classe são mais complexos e são usados para criar componentes maiores e mais complexos.
- [ ]  Os componentes podem receber propriedades (props) que são passadas para eles quando são criados. As props são usadas para configurar o comportamento e a aparência do componente.
- [ ]  Para criar um componente em React Native, basta criar uma função que retorna o elemento visual desejado e exportá-la para uso em outros lugares do código. As props podem ser acessadas dentro da função através do objeto props.
- [ ]  É possível também passar funções como props para componentes, o que permite a comunicação entre componentes e a atualização de estado em componentes pai. Essa é uma técnica importante para criar aplicativos interativos e dinâmicos em React Native.

### Exemplo 1: Criando um componente simples

- [ ]  Vamos criar um componente simples
    
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
    
- [ ]  Podemos seguir incrementando nosso código com mais recursos e usar JSX
    
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
    
- [ ]  Vamos transformar nosso imagem em um componente Logo
- [ ]  Crie uma pasta na raiz principal chamada de src
- [ ]  Dentro dela crie uma pasta chamada components
- [ ]  Dentro de components, crie uma pasta chamada Logo e crie um arquivo chamado index.js
    
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
    
- [ ]  Vamos modificar o nosso App.js para importar nosso componente Logo
    
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
    
- [ ]  Eu poderia estar passando a url da imagem via props
    
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
    
- [ ]  Podemos trabalhar com a ideia de interação com botões
    
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

- [ ]  Passagem de props é uma técnica utilizada em React Native para transmitir informações de um componente pai para um componente filho. As props são passadas como argumentos para o componente filho e podem ser usadas para configurar a aparência e comportamento do componente.
- [ ]  Um exemplo de como passar props em React Native é mostrar a imagem de perfil do usuário com base em seus dados. Podemos criar um componente chamado `UserProfile` que recebe as informações do usuário como props:
    
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
    
- [ ]  Em seguida, podemos usar o componente `UserProfile` em outro componente pai e passar as informações do usuário como props:
    
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
    
- [ ]  Dessa forma, o componente `UserProfile` receberá as informações do usuário como props e usará essas informações para exibir a imagem de perfil e o nome do usuário.

## Trabalhando com Estados

- [ ]  No React Native, estado (state) é uma forma de armazenar e gerenciar dados em um componente.
- [ ]  Ele permite que o componente reaja a alterações em seus dados e atualize a interface de usuário de acordo.
- [ ]  O estado é definido usando o hook `useState`, que é uma função que retorna um array com dois elementos: o valor atual do estado e uma função para atualizá-lo.
- [ ]  Um exemplo de como usar o estado em React Native é criar um componente `Counter` que exibe um contador em sua interface de usuário e permite que o usuário o aumente ou diminua:
    
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
    
- [ ]  Neste exemplo, o componente `Counter` usa o hook `useState` para definir o estado `count`, que é inicializado como 0.
- [ ]  Ele também define duas funções, `increment` e `decrement`, que atualizam o estado `count` quando o usuário clica nos botões "+" e "-", respectivamente.
- [ ]  A interface de usuário é atualizada automaticamente sempre que o estado muda, graças à natureza reativa do React Native.
- [ ]  Outro exemplo de uso do estado em React Native é criar um componente `TextInput` que permite ao usuário digitar um texto e exibi-lo em tempo real na interface de usuário:
    
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
    
- [ ]  Neste exemplo, o componente `TextInputExample` usa o hook `useState` para definir o estado `text`, que é inicializado como uma string vazia.
- [ ]  Ele também define a função `handleChange`, que atualiza o estado `text` sempre que o usuário digita um novo texto no componente `TextInput`. A interface de usuário é atualizada em tempo real com o texto digitado pelo usuário, graças ao estado reativo do React Native.

### Exemplo usando o App

- [ ]  Podemos criar um estado e alterar o valor deste estado de acordo com o click do botão
    
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
    
- [ ]  Podemos ter vários estados
    
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
    
- [ ]  Podemos passar parâmetros nas funções
    
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

- [ ]  Podemos estilizar de várias maneiras diferentes usando Flexbox
    
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
    
- [ ]  Podemos deixar mais perto do aspecto de um app
    
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

- [ ]  Podemos fazer uso de todos recursos vistos até o momento de forma conjunta
    
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
    
- [ ]  Podemos aprimorar nosso código
    
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

- [ ]  Vamos criar um app que traz frases diferentes ao quebrar um biscoito da sorte
    
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
