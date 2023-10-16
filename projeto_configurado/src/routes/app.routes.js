import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Detalhes from "../pages/Detalhes";

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

      <AuthStack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
