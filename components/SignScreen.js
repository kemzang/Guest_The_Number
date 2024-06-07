/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable, ImageBackground, TextInput } from "react-native";
import background from "../assets/images/Group4.png";
import perso from "../assets/images/SignScreen/perso.png";
// import SvgUri from 'react-native-svg';

const AndroidSmall = () => {

    return (
        <View >
            <ImageBackground source={background} style={styles.backgroundImage}>
                <View style={styles.part1} >
                    <Image source={perso} style={styles.persoStyle} />
                    <Text style={styles.rejoignezLaComunauteContainer}>
                        <Text style={styles.rejoignezLaComunauteContainer1}>
                            <Text style={styles.rejoignezLa}>Rejoignez la</Text>
                            <Text style={styles.comunaute}> comunautée</Text>
                        </Text>
                    </Text>
                </View>
                <View style={styles.rectangleView}>
                    <View style={styles.inscriptionParent}>
                        <Text style={styles.inscription}>INSCRIPTION</Text>
                        <View style={styles.textField}>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                                placeholder="Saisissez du texte..."
                            />

                        </View>

                    </View>
                </View>

            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({

    backgroundImage:
    {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
    ,
    part1:
    {
        position: 'absolute',
        top: 80
    }
    ,
    persoStyle:
    {
        width: 350,
        height: 210,
    }
    ,

    rejoignezLa: {
        color: "#fff"
    },
    comunaute: {
        color: "#ffc700"
    },
    rejoignezLaComunauteContainer1: {
        width: "100%"
    },
    rejoignezLaComunauteContainer: {
        fontSize: 27,
        lineHeight: 30,
        fontFamily: "DIN Black",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        marginTop: 30
    }
    ,
    rectangleView: {
        shadowColor: "rgba(0, 0, 0, 0.8)",
        shadowOffset: {
            width: 10,
            height: -400
        },
        shadowRadius: 13.5,
        shadowOpacity: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: "#fff",
        width: "100%",
        height: 400,
        position: 'absolute',
        bottom: 0,
    }


    //Bloc d'input
    ,
    inscription: {
        marginTop: 20,
        fontSize: 19,
        fontFamily: "DIN Black",
        color: "#30c972",
        textAlign: "left",
        lineHeight: 24,
        letterSpacing: 1
    },
    inscriptionParent: {
        width: "100%",
        alignItems: "center",
        flex: 1
    }
});

export default AndroidSmall;
