/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
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
import rank_icon from "../assets/images/ScreeToBegin/icone_score.png"

export default ScreeToBegin = () => {
    return (
        <View style={{ flex: 1}}>
            {/* {partie 1: Debut de page (header) } */}
            <ImageBackground source={background} style={{ flex: 1 ,padding:20}}>

                <View style={styles.head}>

                    <View style={styles.score}>
                        <Image source={rank_icon} />
                        <Text style={styles.text_score}>
                            0
                        </Text>
                    </View>

                    <View style={styles.parameter}>
                        <Image source={rank_icon} />
                    </View>
                </View>

            </ImageBackground>



        </View>
    )
}

const styles = StyleSheet.create(
    {
        backgroundImage:
        {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        },
        head:
        {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: 'space-between',

        }
        ,
        score:
        {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        },parameter:
        {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        }
        ,
        text_score:
        {
            fontFamily: "DIN Black",
            fontWeight: 'bold',
            color: "#1E3533",
            fontSize: 17
        }
    }
)