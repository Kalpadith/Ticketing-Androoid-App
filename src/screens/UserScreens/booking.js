import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, LogBox } from "react-native";
import Theme from "../../assets/Theme/Theme";
import TickTextField from "../../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../../common/TickButton";
import { useNavigation } from "@react-navigation/native";

const SCREEN_HEIGHT = Dimensions.get('window').height;

const BookingScreen = () => {

    const [custName, setName] = useState(null);
    const [noofSeats, setSeats] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);


    const useNavigate = useNavigation();

    const navigationBook = () => {
        useNavigate.navigate('payment');
    }
    var dates = new Date().toDateString();
    var hours = new Date().getHours();
    var min = new Date().getMinutes(); 
    var sec = new Date().getSeconds();
    const book = () => {
        try {
            fetch(('https://ticketing-server-app.herokuapp.com/book/addbk'), {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "custName": custName,
                    "noOfSeats": noofSeats,
                    "date": dates,
                    "time": hours+':'+min+':'+sec,
                    "startPoint": start,
                    "endPoint": end
                }),
            });
            alert('success...!');
        } catch (e) {
            console.log('error while booking...');
        }
    }

    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fBlack, Theme.f20]}> Seat Booking </Text>
                    </View>
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMain, Theme.justAlign]}>

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setName(e)}
                                placeHolder={'Your Name'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setSeats(e)}
                                placeHolder={'Number of Seats'}
                               
                            />
                        </View>

                        <View style={Theme.h2} />

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
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => navigationBook()}
                                ButtonName={"Book"}
                            />
                        </View>

                        
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default BookingScreen;