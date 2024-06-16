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
import rank_icon from "../assets/images/ScreeToBegin/icone_score.png";
import parameter from "../assets/images/ScreeToBegin/icon_settings.png";
import profil from "../assets/images/ScreeToBegin/profil.png";

export default ScreeToBegin = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            {/* {partie 1: Debut de page (header) } */}
            <ImageBackground source={background} style={{ flex: 1, padding: 20 }}>

                {/* {Partie 1 : Affichage du score et du button de parametre } */}

                <View style={styles.head}>

                    <Pressable>
                        <View style={styles.score}>
                            <Image source={rank_icon} />
                            <Text style={styles.text_score}>
                                0
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable>
                        <View style={styles.parameter}>
                            <Image source={parameter} />
                        </View>
                    </Pressable>
                </View>

                {/* {Partie 2 : Affichage du titre du jeu et les informations de l'utilisateur } */}

                <Text style={styles.guessNumber}>
                    <Text style={styles.guessNumberTxtContainer}>
                        <Text style={styles.guess}>
                            <Text style={styles.guess1}>
                                <Text style={styles.gue}>Gue</Text>
                                <Text style={styles.ss}>ss</Text>
                            </Text>
                        </Text>
                        <Text style={styles.gue}>
                            <Text>
                                <Text style={styles.text1}>{` `}</Text>
                            </Text>
                            <Text style={styles.number1}>Number</Text>
                        </Text>
                    </Text>
                </Text>


                <View style={styles.rectangleParent}>
                    <View style={styles.groupChild} />
                    <Text style={[styles.yourUsername, styles.chocoPicantFlexBox]}>your username</Text>
                    <View style={styles.groupItem} />
                    <Text style={[styles.chocoPicant, styles.chocoPicantFlexBox]}>Choco Picant</Text>
                    <View style={styles.circle_profil}>
                        <Image style={styles.groupIcon} resizeMode="cover" source={profil} />
                    </View>
                </View>


                {/* {Partie 3 : Affichage du Button de debut de partie} */}


                <Pressable style={styles.rectangleParent2} onPress={() => {navigation.navigate("Page_de_choix_de_jeu") }}>
                    <View style={styles.playChild} />
                    <Text style={styles.jouer}>Jouer</Text>
                </Pressable>
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
            , backgroundColor: "white",
            borderRadius: 20, padding: 9
            , shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowOffset: {
                width: 0,
                height: 4
            },
            height: 40,
            elevation: 4,
            shadowRadius: 4,

        }, parameter:
        {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "rgba(0, 0, 0, 0.5)",
            elevation: 50
        }
        ,
        text_score:
        {
            fontSize: 14,
            fontFamily: "DIN Black",
            color: "#1e3533",
            textAlign: "center"
        }



        ,
        gue: {
            color: "#fff"
        },
        ss: {
            color: "#ffc700"
        },
        guess1: {
            fontSize: 64
        },
        text1: {
            fontSize: 48
        },
        number1: {
            fontSize: 36,
            lineHeight: 60
        },
        guessNumberTxtContainer: {
            width: "100%"
        },
        guessNumber: {
            fontFamily: "DIN Black",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            width: 214,
            position: 'relative',
            top: 150,
            left: 60
        }

        ,
        chocoPicantFlexBox: {
            textAlign: "center",
            position: "absolute"
        },
        groupChild: {
            top: 0,
            left: 0,
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowOffset: {
                width: 0,
                height: 4
            },
            shadowRadius: 4,
            shadowOpacity: 1,
            borderRadius: 10,
            backgroundColor: "#fff",
            width: 303,
            position: "absolute",
            height: 102
        },
        yourUsername: {
            top: 12,
            left: 88,
            fontSize: 13,
            fontFamily: "DIN Medium",
            color: "#000",
        },
        groupItem: {
            top: 34,
            left: 66,
            borderRadius: 20,
            backgroundColor: "#edecf0",
            width: 209,
            height: 34,
            position: "absolute"
        },
        chocoPicant: {
            top: 38,
            left: 93,
            fontSize: 20,
            fontFamily: "DIN Black",
            color: "#1e3533"
        }
        ,
        rectangleParent: {
            position: 'relative',
            top: 200,
            left: 20,
            flex: 1,
            width: "100%",
            height: 102
        }
        , circle_profil:
        {
            backgroundColor: "#edecf0",
            borderRadius: 100,
            width:80,
            height:80,
            position:"relative",
            top:10,
            left:10,
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }


        ,
        playChild: {
            top: 0,
            left: 0,
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowOffset: {
                width: 0,
                height: 4
            },
            shadowRadius: 4,
            elevation: 4,
            shadowOpacity: 1,
            borderRadius: 20,
            backgroundColor: "#ffc700",
            width: 140,
            position: "absolute",
            height: 54
        },
        jouer: {
            top: 11,
            left: 38,
            fontSize: 24,
            fontFamily: "DIN Black",
            color: "#fff",
            textAlign: "center",
            position: "absolute"
        },
        rectangleParent2: {
            position: "relative",
            top: -110,
            left: 100,
            width: "100%",
            height: 54
        }
    }
)