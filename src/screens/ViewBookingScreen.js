import React from "react";
import { View, Text, Dimensions } from "react-native";
import Theme from "../assets/Theme/Theme";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const ViewBookingScreen = () => {

    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fBlack, Theme.f20]}> Bookings </Text>
                    </View>
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMain, Theme.justAlign]}>
                        
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default ViewBookingScreen;