import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import Theme from "../assets/Theme/Theme";
import TickTextField from "../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../common/TickButton";
import { useNavigation } from "@react-navigation/native";


const SCREEN_HEIGHT = Dimensions.get('window').height;



const MainMenuScreen = () => {

    const useNavigate = useNavigation();

    const navigationToken = () => {
        useNavigate.navigate('Token');
    }
    const navigationBooking = () => {
        useNavigate.navigate('Book');
    }

    const navigationLogin = () => {
        useNavigate.navigate('LoginScreen');
        alert('Logged Out Successfully');
    }
    const navigationTimetable = () => {
        useNavigate.navigate('Timetable');
        
    }
    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fBlack, Theme.f20]}> Main Menu </Text>
                    </View>
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMain, Theme.justAlign]}>


                        <View style={[Theme.w90, Theme.h10, Theme.dFlexRow]}>
                            <View style={[Theme.w30, Theme.h100, Theme.bgBlue, Theme.justAlign]}>
                                {/* schedule images ---------------------------------------------------------------------------------------------------- */}
                                {/* <Image source={require('../../images/Ticketing.png')}/> */}
                            </View>

                            <View style={[Theme.w40, Theme.h100]} />

                            <View style={[Theme.w30, Theme.h100, Theme.bgBlue, Theme.justAlign]}>
                                {/* token images ---------------------------------------------------------------------------------------------------- */}
                                {/* <Image source={require('../assets/')}/> */}
                            </View>
                        </View>

                        <View style={[Theme.w90, Theme.h4, Theme.dFlexRow]}>
                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                            <TickButton 
                             onPress={() => navigationBooking()}
                            ButtonName={"Bookings"} />
                            </View>

                            <View style={[Theme.w40, Theme.h100]} />

                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                            <TickButton 
                             onPress={() => navigationToken()}
                            ButtonName={"Token"} />
                            </View>
                        </View>

                        <View style={[Theme.h2]} />

                        <View style={[Theme.w90, Theme.h10, Theme.justAlign]}>
                            <View style={[Theme.w30, Theme.h100, Theme.bgBlue, Theme.justAlign]}>
                                {/* Account images ---------------------------------------------------------------------------------------------------- */}
                                {/* <Image source={require('../assets/')}/> */}
                            </View>
                        </View>

                        <View style={[Theme.w90, Theme.h4, Theme.justAlign]}>
                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                            <TickButton 
                            onPress={() => navigationTimetable()}
                            ButtonName={"Timetable"} />
                            </View>
                        </View>

                        <View style={[Theme.h2]} />

                        <View style={[Theme.w90, Theme.h10, Theme.dFlexRow]}>
                            <View style={[Theme.w30, Theme.h100, Theme.bgBlue, Theme.justAlign]}>
                                {/* Balance images ---------------------------------------------------------------------------------------------------- */}
                                {/* <Image source={require('../assets/')}/> */}
                            </View>

                            <View style={[Theme.w40, Theme.h100]} />

                            <View style={[Theme.w30, Theme.h100, Theme.bgBlue, Theme.justAlign]}>
                                {/* Reserve images ---------------------------------------------------------------------------------------------------- */}
                                {/* <Image source={require('../assets/')}/> */}
                            </View>
                        </View>

                        <View style={[Theme.w90, Theme.h4, Theme.dFlexRow]}>
                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                            <TickButton ButtonName={"Balance"} />
                            </View>

                            <View style={[Theme.w40, Theme.h100]} />

                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                            <TickButton ButtonName={"Reserve"} />
                            </View>
                        </View>

                        <View style={[Theme.h10]} />

                        <View style={[Theme.w50, Theme.h4]}>
                            <TickButton
                              onPress={() => navigationLogin()} 
                            ButtonName={"Logout"} />
                        </View>

                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
})

export default MainMenuScreen;