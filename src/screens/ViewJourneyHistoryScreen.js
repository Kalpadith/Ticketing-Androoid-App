import React from "react";
import { View, Text, Dimensions } from "react-native";
import Theme from "../assets/Theme/Theme";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../common/TickButton";

const SCREEN_HEIGHT = Dimensions.get('window').height;

const ViewJourneyHistoryScreen = () => {

    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fBlack, Theme.f20]}> Account </Text>
                    </View>
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMain, Theme.justAlign]}>

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton ButtonName={"Journey History"} />
                        </View>

                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default ViewJourneyHistoryScreen;