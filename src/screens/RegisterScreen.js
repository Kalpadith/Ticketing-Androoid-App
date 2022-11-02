import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, LogBox } from "react-native";
import Theme from "../assets/Theme/Theme";
import TickTextField from "../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../common/TickButton";
import { useNavigation } from "@react-navigation/native";

const SCREEN_HEIGHT = Dimensions.get('window').height;

const RegisterScreen = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [address, setAddress] = useState(null);
    const [passport, setPassport] = useState(null);

    const useNavigate = useNavigation();

    const navigationLogin = () => {
        useNavigate.navigate('Login');
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
                    "user_address": address,
                    "user_Email": email,
                    "user_password": password,
                    "user_passportNo": passport
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
                        <Text style={[Theme.fBlack, Theme.f20]}> Register </Text>
                    </View>
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMain, Theme.justAlign]}>

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setEmail(e)}
                                placeHolder={'Email Address'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setPassword(e)}
                                placeHolder={'Password'}
                                secure={true}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setPassport(e)}
                                placeHolder={'Passport Number'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setAddress(e)}
                                placeHolder={'Address'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => userRegister()}
                                ButtonName={"Register"}
                            />
                        </View>

                        <View style={[Theme.h2]} />

                        <View style={[Theme.w80, Theme.h4]}>
                            <TouchableOpacity style={[Theme.w100, Theme.h100, Theme.justAlign]}>
                                <Text style={[Theme.f15, Theme.fontBold, Theme.fGray]}>
                                    Are you a foreigner
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[Theme.h2]} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                ButtonName={"Register as a foreigner"}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default RegisterScreen;