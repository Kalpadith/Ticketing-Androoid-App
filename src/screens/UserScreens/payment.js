import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, LogBox } from "react-native";
import Theme from "../../assets/Theme/Theme";
import TickTextField from "../../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../../common/TickButton";
import { useNavigation } from "@react-navigation/native";

const SCREEN_HEIGHT = Dimensions.get('window').height;

const PaymentScreen = () => {

   
    const [date, setDate] = useState(null);
    const [amount, setAmount] = useState(null);



    const useNavigate = useNavigation();

    const navigationpayment = () => {
        useNavigate.navigate('Mainmenu');
    }
    var dates = new Date().toDateString();
   
    const pay = () => {
        try {
            fetch(('https://ticketing-server-app.herokuapp.com/payments/add'), {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "payment_date": date,
                    "payment_amount": "400.00"
                }),
            });
            alert('Booking Added & Payment Successfull...');
            useNavigate.navigate('Mainmenu');
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
                        <Text style={[Theme.fBlack, Theme.f20]}> Date</Text>
                            <TickTextField
                                onChangeTxt={'2022/11/06'}
                                placeHolder={'2022/11/06'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                        <Text style={[Theme.fBlack, Theme.f20]}> Amount (200.00 per seat)</Text>
                     
                            <TickTextField
                                onChangeTxt={'400.00'}
                                placeHolder={'400.00'}
                                secure={true}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => pay()}
                                ButtonName={"Pay"}
                            />
                        </View>

                        <View style={Theme.h2} />
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default PaymentScreen;


const cal = () => {

    pay = noOfSeats * 200.00;

}