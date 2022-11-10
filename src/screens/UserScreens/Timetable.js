import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, LogBox } from "react-native";
import Theme from "../../assets/Theme/Theme";
import TickTextField from "../../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../../common/TickButton";
import { useNavigation } from "@react-navigation/native";

const SCREEN_HEIGHT = Dimensions.get('window').height;

const Timetable = () => {

    

    const useNavigate = useNavigation();

    const navigationBack = () => {
        useNavigate.navigate('Mainmenu');
    }

    const userRegister = () => {
        try {
            fetch(('https://ticketing-server-app.herokuapp.com/users/adduser'), {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    
                }),
            });
            alert('success...!');
        } catch (e) {
            console.log('error user register...');
        }
    }

    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fBlack, Theme.f20]}> Time Tables </Text>
                    </View>
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMain, Theme.justAlign]}>

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={'2022-11-6'}
                                placeHolder={'DATE 2022-11-1'}
                            />
                        </View>
                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={'21:10:28'}
                                placeHolder={'TIME 21:30:08'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={'2022-11-6'}
                                placeHolder={'DATE 2022-11-1'}
                                secure={true}
                            />
                        </View>

                        

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={'21:10:28'}
                                placeHolder={'TIME 21:10:28'}
                            />
                        </View>
                        <View style={Theme.h2} />
                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={'2022-11-6'}
                                placeHolder={'DATE 2022-11-1'}
                                secure={true}
                            />
                        </View>
                        
                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={'21:10:28'}
                                placeHolder={'TIME 21:20:28'}
                            />
                        </View>


                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => navigationBack()}
                                ButtonName={"Back"}
                            />
                        </View>

                      
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default Timetable;