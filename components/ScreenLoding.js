/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import * as React from "react";
import { StyleSheet, View, Image, Text, ImageBackground, Pressable, StatusBar } from "react-native";
import { Input, Button, LinearProgress, SpeedDial } from "react-native-elements";
import background from "../assets/images/Group4.png";
import approve from "../assets/images/SignScreen/Approval.png";
import error from "../assets/images/SignScreen/error.png";

export default ScreeLoading = () => {
    return (
        <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground source={background} style={styles.backgroundImage}>

                <View style={{ width: '50%' }}>

                    <LinearProgress color="#ffc700" />
                </View>

                <View style={styles.container_message}>
                    <Text style={styles.message}>
                        Identification a patricknegoue197@gmail.com reussie
                    </Text>
                    <Image source={approve} />
                </View>
                <View style={styles.container_message}>
                    <Text style={styles.message}>
                        Identification a patricknegoue197@gmail.com non approuvée
                    </Text>
                    <Image source={error} />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImage:
    {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
    ,
    container_message:
    {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    }
    ,
    message:
    {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'DIN Black',
        marginBottom: 10
    }


})