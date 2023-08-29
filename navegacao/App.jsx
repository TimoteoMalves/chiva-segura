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
