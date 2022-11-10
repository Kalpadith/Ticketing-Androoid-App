import { saveAs } from 'file-saver'
import Ticketing from "../../images/Ticketing.png"
import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, LogBox } from "react-native";
import Theme from "../../assets/Theme/Theme";
import TickTextField from "../../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../../common/TickButton";
import { useNavigation } from "@react-navigation/native";
import { Image } from 'react-native'
const SCREEN_HEIGHT = Dimensions.get('window').height;

const GenToken = () => {
    const downloadImage = () => {
        saveAs('', 'image.jpg')
    }
    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fBlack, Theme.f20]}> QR Token </Text>
                    </View>
                    <Text style={[Theme.fBlack, Theme.f20]}> Your Registration was successfull </Text>
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMain, Theme.justAlign]}>
                       
                        <Text style={[Theme.fBlack, Theme.f20]}> 
                            Below is your QR Token. We use it to
                            uniquely identify you in the system. You should
                            scan this when you enter and leaving the vehicle
                        </Text>
                        <View style={[Theme.dFlexCol]}>
                            {/* schedule images ---------------------------------------------------------------------------------------------------- */}
                            {<Image source={require('../../images/Ticketing.png')} 
                            style = {{ width: 100, height: 100 }} />}
                        </View>


                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => downloadImage()}
                                ButtonName={"Generate a Token"}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>


    )
}

export default GenToken;


