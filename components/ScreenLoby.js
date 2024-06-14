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
import User from "../assets/images/Loby/User.png";
import User2 from "../assets/images/Loby/User2.png";
import Settings from "../assets/images/Loby/Settings.png";
import Rules from "../assets/images/Loby/Rules.png";


export default ScreeLoby = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container2} >
                <View style={styles.circle_profil}>
                    <Image style={styles.groupIcon} resizeMode="cover" source={profil} />
                </View>
                <Text style={styles.gojoSatoru}>Gojo Satoru</Text>
            </View>


            <View style={styles.rectangleParent}>
                <View style={styles.rectangleChild}>
                    <Pressable style={styles.btn_select}>
                        <View style={styles.Icon_Text}>
                            <Image source={User} />
                            <Text>Joueurs</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.Icon_Text}>
                            <Image source={Rules} />
                            <Text>Règles</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.Icon_Text}>
                            <Image source={Settings} />
                            <Text>Réglages</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
            <View style={styles.rectangleView}>
                <View style={styles.rectangleParent2}>

                    <View style={[styles.groupChild, styles.Icon_Text]}>
                        <Image source={User2} />
                        <Text>0</Text>
                    </View>
                </View>
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
        marginTop: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    ,

    // partie 1
    container2:
    {
        display: "flex"
        , flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    ,
    gojoSatoru: {
        fontSize: 24,
        marginTop: 10,
        fontFamily: "DIN Black",
        color: "#fff",
    },


    //Partie 2

    rectangleParent:
    {
        backgroundColor: "#fff",
        borderRadius: 20,
        width: "90%",
        position: "relative",
        left: 18
        , marginTop: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    rectangleChild:
    {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "96%",
        padding: 8,
        alignItems: "center",
    },
    Icon_Text:
    {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
    ,
    btn_select:
    {
        borderRadius: 20,
        backgroundColor: "#ffc700",
        height: 34,
        padding: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    , rectangleView: {
        marginTop: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
    }

    , groupChild: {
        borderRadius: 20,
        backgroundColor: "#30c771",
        width: 113,
        height: 35

    },
    rectangleParent2: {
        flex: 1,
        width: "100%",
        height: 35,
        position: "relative",
        top: -10
        , display: "flex",
        alignItems: "center"
    }

});
