import React from "react"
import { StyleSheet } from "react-native"

const Theme = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    // display ------------------------------------------
    justAlign: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    dFlexCol: {
        flexDirection: "column"
    },  

    dFlexRow: {
        flexDirection: "row"
    }, 
    dFlex:{
        alignItems: 'center',
        width : '3%',
        height: '3%'

    },

    // width ----------------------------------------------
    w100: {
        width: '100%'
    },
    w98: {
        width: '95%'
    },
    w90: {
        width: '90%'
    },
    w80: {
        width: '80%'
    },

    w60: {
        width: '60%'
    },

    w50: {
        width: '50%'
    },

    w40: {
        width: '40%'
    },

    w30: {
        width: '30%'
    },
    w5: {
        width: '5%'
    },

    // height -----------------------------------------------
    h100: {
        height: '100%'
    },
    h90: {
        height: '90%'
    },
    h25: {
        height: '25%'
    },
    h20: {
        height: '20%'
    },
    h10: {
        height: '10%'
    },
    h8: {
        height: '8%'
    },
    h7: {
        height: '7%'
    },
    h5: {
        height: '5%'
    },

    h4: {
        height: '4%'
    },

    h2: {
        height: '2%'
    },


    // bg colors --------------------------------------------
    bgMain: {
        backgroundColor: '#c3d3fb'
    },

    bgBlue: {
        backgroundColor: 'blue'
    },

    bgRed: {
        backgroundColor: 'red'
    },

    bgGreen: {
        backgroundColor: 'green'
    },


    // font colors ------------------------------------------
    fBlack: {
        color: 'black'
    },

    fWhite: {
        color: 'white'
    },

    fBlue: {
        color: 'blue'
    },

    fGray:{
        color:'#7E7E7E'
    },

    // font size --------------------------------------------
    f15: {
        fontSize: 15
    },
    f17: {
        fontSize: 17
    },

    f20: {
        fontSize: 20
    },

    fontBold:{
        fontWeight:'bold'
    },

    // border -----------------------------------------------
    border1_5: {
        borderWidth: 1.5,
    }
});

export default Theme;

