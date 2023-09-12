import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Initial from '../pages/Initial';
import TabRoutes from './stackRoutes';

export default function Routes() {
  const Tab = createBottomTabNavigator();
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#FFF',
        tabBarStyle: {
          backgroundColor: '#000',
          paddingBottom: 4,
          paddingTop: 4,
          height: '7%',
          borderTopWidth: 2
        }
      })}
    >
      <Tab.Screen
        name="Initial"
        component={Initial}
        options={{
          tabBarLabel: 'Initial',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: { display: 'none' }, // Isso oculta a tab bar na rota 'Initial'
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="home" size={size} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Home"
        component={TabRoutes}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="contacts" size={size} color={color} />
          }
        }}
      />
    </Tab.Navigator>

  );
}
