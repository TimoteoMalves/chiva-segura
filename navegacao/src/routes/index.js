
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
