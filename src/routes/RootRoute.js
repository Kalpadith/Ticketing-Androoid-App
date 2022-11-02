import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import AdminHomeScreen from "../screens/AdminHomeScreen";
import AdminLoginScreen from "../screens/AdminLoginScreen";
import AdminTypeSelectScreen from "../screens/AdminTypeSelectScreen";
import MainMenuScreen from "../screens/MainMenuScreen";


const Stack = createStackNavigator();

const RootRoute = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={() => ({
                    headerShown: false
                })}>

                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
    

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootRoute;