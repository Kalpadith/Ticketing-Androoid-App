import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import MainMenuScreen from "../screens/MainMenuScreen";
import AdminHomeScreen from "../screens/AdminHomeScreen";
import AdminLoginScreen from "../screens/AdminLoginScreen";
import AdminTypeSelectScreen from "../screens/AdminTypeSelectScreen";
import HomeScreen from "../screens/HomeScreen";
import UserHomeScreen from "../screens/UserHomeScreen";
import ViewBookingScreen from "../screens/ViewBookingScreen";
import ViewJourneyScreen from "../screens/ViewJourneyHistoryScreen";
import TimeAllocationScreen from "../screens/TimeAllocationScreen";
import TokenScreen from "../screens/UserScreens/Token";
import GenToken from "../screens/UserScreens/generateToken";
import BookingScreen from "../screens/UserScreens/booking";
import PaymentScreen from "../screens/UserScreens/payment";
import Timetable from "../screens/UserScreens/Timetable";



const Stack = createStackNavigator();

const RootRoute = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={() => ({
                    headerShown: false
                })}>

                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Mainmenu" component={MainMenuScreen} />
                <Stack.Screen name="Adminhome" component={AdminHomeScreen} />
                <Stack.Screen name="Adminlogin" component={AdminLoginScreen} />
                <Stack.Screen name="AdminType" component={AdminTypeSelectScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Userhome" component={UserHomeScreen} />
                <Stack.Screen name="ViewBooking" component={ViewBookingScreen} />
                <Stack.Screen name="Viewjourney" component={ViewJourneyScreen} />
                <Stack.Screen name="Timeallocation" component={TimeAllocationScreen} />
                <Stack.Screen name="Token" component={TokenScreen} />
                <Stack.Screen name="GenToken" component={GenToken} />
                <Stack.Screen name="Book" component={BookingScreen} />
                <Stack.Screen name="payment" component={PaymentScreen} />
                <Stack.Screen name="Timetable" component={Timetable} />
    

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootRoute;