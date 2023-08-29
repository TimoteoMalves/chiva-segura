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