import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Theme from "../assets/Theme/Theme";

const TickButton = ({ ButtonName, onPress }) => {
    return (
        <View style={styles.TickContainer}>
            <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={onPress}>
                <Text style={[Theme.fWhite, Theme.f17]}>{ButtonName}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    TickContainer: {
        width: '100%',
        height: 50,
        backgroundColor: 'blue',
        borderColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 3,
        color: '#ff0000'
    }
});

export default TickButton;