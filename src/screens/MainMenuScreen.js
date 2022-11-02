import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import Theme from "../assets/Theme/Theme";
import TickTextField from "../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../common/TickButton";

const SCREEN_HEIGHT = Dimensions.get('window').height;

const MainMenuScreen = () => {

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
                                {/* <Image source={require('../assets/')}/> */}
                            </View>

                            <View style={[Theme.w40, Theme.h100]} />

                            <View style={[Theme.w30, Theme.h100, Theme.bgBlue, Theme.justAlign]}>
                                {/* token images ---------------------------------------------------------------------------------------------------- */}
                                {/* <Image source={require('../assets/')}/> */}
                            </View>
                        </View>

                        <View style={[Theme.w90, Theme.h4, Theme.dFlexRow]}>
                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                                <Text style={[Theme.fBlue]}>
                                    Schedule
                                </Text>
                            </View>

                            <View style={[Theme.w40, Theme.h100]} />

                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                                <Text style={[Theme.fBlue]}>
                                    Token
                                </Text>
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
                                <Text style={[Theme.fBlue]}>
                                    Account
                                </Text>
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
                                <Text style={[Theme.fBlue]}>
                                    Balance
                                </Text>
                            </View>

                            <View style={[Theme.w40, Theme.h100]} />

                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                                <Text style={[Theme.fBlue]}>
                                    Reserve
                                </Text>
                            </View>
                        </View>

                        <View style={[Theme.h10]} />

                        <View style={[Theme.w50, Theme.h4]}>
                            <TickButton ButtonName={"Logout"} />
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