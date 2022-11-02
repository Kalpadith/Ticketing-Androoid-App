import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import Theme from "../assets/Theme/Theme";
import TickTextField from "../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../common/TickButton";
import { useNavigation } from "@react-navigation/native";

const SCREEN_HEIGHT = Dimensions.get('window').height;

const LoginScreen = () => {

    const [email_address, setEmail_Address] = useState();
    const [loginPassword, setLoginPassword] = useState();

    const useNavigate = useNavigation();

    const navigationRegister = () => {
        useNavigate.navigate('Register');
    }


    const userLogin = () => {

        const url = `https://ticketing-server-app.herokuapp.com/users/search/` + `${email_address}`;

        try {
            fetch((url), {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((response) => response.json()).then((data) => {
                const emailAddress = data[0].user_Email;
                const password = data[0].user_password;

                if (email_address === emailAddress){
                    if(loginPassword === password){
                        if(email_address === emailAddress && loginPassword === password){
                            alert("login success");
                        }
                    }else{
                        alert('password invalid');                    }
                }else{
                    alert("not register user...")
                }
            });
        } catch (e) {
            console.log('error user register...');
        }
    }

    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fBlack, Theme.f20]}> Login </Text>
                    </View>
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMain, Theme.justAlign]}>
                        <View style={[Theme.w80, Theme.h10]}>
                            <TickTextField
                                onChangeTxt={e => setEmail_Address(e)}
                                placeHolder={'Email Address'}
                            />
                        </View>

                        <View style={[Theme.w80, Theme.h10]}>
                            <TickTextField
                                onChangeTxt={e => setLoginPassword(e)}
                                placeHolder={'Password'}
                                secure={true}
                            />
                        </View>

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => userLogin()}
                                ButtonName={"Login"}
                            />
                        </View>

                        <View style={[Theme.h2]} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => navigationRegister()}
                                ButtonName={"Register"} />
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default LoginScreen;