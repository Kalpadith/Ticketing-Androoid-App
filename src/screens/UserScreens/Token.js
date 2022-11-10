import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, LogBox } from "react-native";
import Theme from "../../assets/Theme/Theme";
import TickTextField from "../../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../../common/TickButton";
import { useNavigation } from "@react-navigation/native";

const SCREEN_HEIGHT = Dimensions.get('window').height;

const TokenScreen = () => {

    const [issuedDate, setIssuedDate] = useState(null);
    const [period, setPeriod] = useState(null);
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const [route, setRoute] = useState(null);
    const useNavigate = useNavigation();

    
    const navigationToken = () => {
        useNavigate.navigate('GenToken');
    }
    var date = new Date().toDateString();
    const userToken = () => {
        try {
            fetch(('https://ticketing-server-app.herokuapp.com/token/addtoken'), {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "issuedDate": date,
                    "validity_period": "2 days",
                    "start_point": start,
                    "end_point": end,
                    "route_no": route
                }),
            });
            alert('success...!');
            useNavigate.navigate('GenToken')
        } catch (e) {
            console.log('Error while creating the token...');
        }
    }

    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fBlack, Theme.f20]}> Create a Token </Text>
                    </View>
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMain, Theme.justAlign]}>

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setStart(e)}
                                placeHolder={'Start Point'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setEnd(e)}
                                placeHolder={'End Point'}
                                required={true}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setRoute(e)}
                                placeHolder={'Route'}
                            />
                        </View>
                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => userToken()}
                                ButtonName={"Generate a Token"}
                            />
                        </View>


                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default TokenScreen;