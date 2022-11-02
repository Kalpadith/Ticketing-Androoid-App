import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const TickTextField = ({ onChangeTxt, placeHolder, value,secure }) => {
    return (
        <View style={styles.TickContainer}>
            <TextInput
                style={styles.fColor}
                placeholder={placeHolder}
                placeholderTextColor={'#000000'}
                onChangeText={onChangeTxt}
                value={value}
                secureTextEntry={secure}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    TickContainer: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 3,
        color: '#ff0000'
    },
    fColor: {
        color: '#000000',
        fontSize: 17
    }
});

export default TickTextField;