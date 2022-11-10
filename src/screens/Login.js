import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import Theme from "../assets/Theme/Theme";
import TickTextField from "../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../common/TickButton";
import { useNavigation } from "@react-navigation/native";

const SCREEN_HEIGHT = Dimensions.get('window').height;
const Login = () => {

    const [email_address, setEmail_Address] = useState();
    const [loginPassword, setLoginPassword] = useState();


    const useNavigate = useNavigation();

    const navigationRegister = () => {
        useNavigate.navigate('Register');
    }
    

    function validateForm() {
        return email_address.length > 0 && loginPassword.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const result = await axios.post('https://ticketing-server-app.herokuapp.com/users/login', {
            email: email,
            password: password
        });
        if (result.status === 200) {

            // USE SWITCH CASE FOR OTHER ROLES

            sessionStorage.setItem('user', JSON.stringify(result.data));
            sessionStorage.setItem('email', email);
            if (result.data.user_role === 'admin'){
                sessionStorage.setItem('role', 'admin');
                navigate('/admin')
            }
            else if (result.data.user_role === 'local'){
                sessionStorage.setItem('role', 'local');
                navigate('/local')
            }
            else if (result.data.user_role === 'foreign'){
                sessionStorage.setItem('role', 'foreign');
                navigate('/foreign')
            }
            else {
               
                sessionStorage.setItem('role', 'transportmanager');
                navigate('/transportmanager')
            }

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
                                onPress={() => Login()}
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

export default Login;
