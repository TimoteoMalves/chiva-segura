import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Initial from '../pages/Initial';
import Home from '../pages/Home';
import Details from '../pages/Details';

export default function TabRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{animation: 'slide_from_left'}}>

      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{ headerShown: false }
        } />
      <Stack.Screen
        name="Initial"
        component={Initial}
        options={{ headerShown: false }
        } />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}