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
import link from "../assets/images/ScreenChoice/Link.png";
import background from "../assets/images/Group4.png";
import arrow_right from "../assets/images/ScreenChoice/arrow_right.png";
import arrow_left from "../assets/images/ScreenChoice/arrow_left.png";
import approval from "../assets/images/SignScreen/Approval.png";
import join from "../assets/images/ScreenChoice/join.png";


const ScreenChoice2 = ({ changeNavigate }) => {
    return (
        <View style={{ flex: 1 }} >
            <ImageBackground source={background} style={{ flex: 1, alignItems: "center", padding: 10 }}>

                <Text style={styles.devenezLeMaitreContainer}>
                    <Text style={styles.jeu}>{`Rejoignez `}</Text>
                    <Text style={styles.devenezLeMaitre}>la partie</Text>
                </Text>

                <Image resizeMode="cover" style={styles.groupIcon2} source={join} />

                <View style={styles.frameParent}>
                    <View style={styles.sortRightParent}>
                        <Pressable style={styles.sortRight} onPress={() => {changeNavigate(true) }}>
                            <Image style={styles.sortRightIcon} resizeMode="cover" source={arrow_left} />
                        </Pressable>
                        <View style={styles.container_side}>
                            <View style={styles.disabled_side2}><Text>{''}</Text></View>
                            <View style={styles.active_side2}><Text>{''}</Text></View>
                        </View>
                        <Image style={styles.iconLayout} resizeMode="cover" source={arrow_right} />
                    </View>
                    <View style={styles.text_explicatif}>
                        <Text style={styles.creerVotrePropre}>Connectez-vous a une partie existante et attendez le crie de guerre pour commencez a établir votre strategie</Text>
                    </View>
                    <View style={[styles.vectorParent]}>
                        <Pressable style={styles.vectorParentPressable} >
                            <Text style={[styles.dmarrez, styles.dmarrezFlexBox]}>Rejoindre</Text>
                            <Image style={styles.approvalIcon} resizeMode="cover" source={approval} />
                        </Pressable>
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}

const ScreeChoice1 = ({ changeNavigate,navigation }) => {

    return (
        <View style={{ flex: 1 }} >
            <ImageBackground source={background} style={{ flex: 1, alignItems: "center", padding: 10 }}>

                <Text style={styles.devenezLeMaitreContainer}>
                    <Text style={styles.devenezLeMaitre}>{`Devenez le maitre du `}</Text>
                    <Text style={styles.jeu}>jeu</Text>
                </Text>

                <Image resizeMode="cover" style={styles.groupIcon} source={link} />

                <View style={styles.frameParent}>
                    <View style={styles.sortRightParent}>
                        <Image style={styles.sortRightIcon} resizeMode="cover" source={arrow_left} />
                        <View style={styles.container_side}>
                            <View style={styles.active_side}><Text>{''}</Text></View>
                            <View style={styles.disabled_side}><Text>{''}</Text></View>
                        </View>
                        <Pressable style={styles.sortRight} onPress={() => { changeNavigate(false) }}>
                            <Image style={styles.iconLayout} resizeMode="cover" source={arrow_right} />
                        </Pressable>
                    </View>
                    <View style={styles.text_explicatif}>
                        <Text style={styles.creerVotrePropre}>Creer votre propre partie et attendez vos participants et lancer la</Text>
                    </View>
                    <View style={[styles.vectorParent]}>
                        <Pressable style={styles.vectorParentPressable} onPress={()=>{navigation.navigate("Loby")}}>
                            <Text style={[styles.dmarrez, styles.dmarrezFlexBox]}>Démarrez</Text>
                            <Image style={styles.approvalIcon} resizeMode="cover" source={approval} />
                        </Pressable>
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}

export default Main_Choice = ({navigation}) => {
    const [navigate, SetNavigate] = React.useState(true);
    return (
        <>
            {
                navigate ? <ScreeChoice1 changeNavigate={SetNavigate} navigation={navigation}/> : <ScreenChoice2 changeNavigate={SetNavigate} navigation={navigation} />
            }
        </>
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
        devenezLeMaitre: {
            color: "#fff"
        },
        jeu: {
            color: "#ffc700"
        },
        devenezLeMaitreContainer: {
            fontSize: 24,
            lineHeight: 22,
            letterSpacing: 2,
            fontFamily: "DIN Black",
            textAlign: "center",
            marginTop: 90,
            marginBottom: 50
        }

        ,
        groupIcon: {
            width: 300,
            height: 300,
            position: "relative",
            left: 26
        }
        ,
        groupIcon2: {
            width: 360,
            height: 300,
            position: "relative",
            left: 15
        }

        ,
        frameParent:
        {
            padding: 2
            , flex: 1, position: "relative", bottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
        ,
        sortRightParent:
        {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            marginBottom: 50
        }

        , container_side:
        {
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: 'center',

        }
        , active_side:
        {
            backgroundColor: "#ffc700",
            borderRadius: 100,
            width: 10,
            height: 10,
            marginRight: 40
        }
        ,
        disabled_side:
        {
            backgroundColor: "#fff",
            width: 10,
            borderRadius: 100,
            height: 10
        }
        , active_side2:
        {
            backgroundColor: "#ffc700",
            borderRadius: 100,
            width: 10,
            height: 10,
        }
        ,
        disabled_side2:
        {
            backgroundColor: "#fff",
            width: 10,
            borderRadius: 100,
            height: 10,
            marginRight: 40

        }

        , creerVotrePropre:
        {
            textAlign: "center",
            fontFamily: "DIN Black",
            fontSize: 15
            , color: "white"
        }
        , text_explicatif:
        {
            padding: 2
        }


        ,
        vectorParent:
        {
            backgroundColor: "#ffc700",
            width: 200,
            borderRadius: 40,
            marginTop: 30
        }
        ,
        vectorParentPressable:
        {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 6
        }

        ,
        dmarrez:
        {
            fontFamily: "DIN Black",
            fontSize: 17, marginRight: 9,
            color: "white"

        }
    }
)