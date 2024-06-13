/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import * as React from "react";
import { StyleSheet, View, Image, Text, ImageBackground, Pressable, StatusBar } from "react-native";
import profil from "../assets/images/ScreeToBegin/profil.png";


export default ScreeLoby = () => {
    return (
        <View style={styles.container}>
            <View style={styles.circle_profil}>
                <Image style={styles.groupIcon} resizeMode="cover" source={profil} />
            </View>
        </View>

    )
}

    ;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#30C972",
        flex: 1
    },
    circle_profil:
    {
        backgroundColor: "#edecf0",
        borderRadius: 100,
        width: 80,
        height: 80,
        position: "relative",
        top: 10,
        left: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});
