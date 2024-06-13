/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import * as React from "react";
import { StyleSheet, View, Image, Text, ImageBackground, Pressable, StatusBar } from "react-native";
import { Input } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import background from "../assets/images/Group4.png";
import perso from "../assets/images/SignScreen/perso.png";
import google from "../assets/images/SignScreen/Google.png";
import ImmersiveMode from 'react-native-immersive';

// import SvgUri from 'react-native-svg';

const SignScreen = () => {
    const hideBars = () => {
        ImmersiveMode;
    };


    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden={true} />
            {hideBars()}
            <ImageBackground source={background} style={styles.backgroundImage}>


                {/*Partie 1: L'image de répresentation*/}

                <View style={styles.part1} >
                    <Image source={perso} style={styles.persoStyle} />
                    <Text style={styles.rejoignezLaComunauteContainer}>
                        <Text style={styles.rejoignezLaComunauteContainer1}>
                            <Text style={styles.rejoignezLa}>Rejoignez la</Text>
                            <Text style={styles.comunaute}> comunautée</Text>
                        </Text>
                    </Text>
                </View>


                {/*Partie 2: Les inputs de saisie d'information*/}

                <View style={[styles.rectangleView, { padding: 10 }]}>
                    <View style={styles.inscriptionParent}>
                        <Text style={styles.inscription}>INSCRIPTION</Text>
                        <View style={styles.textField}>
                            {/* <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                                placeholder="Saisissez du texte..."
                            /> */}
                            <Input
                                placeholder="Nom d'utilisateur"
                                style={styles.input1}
                            // leftIcon={<Icon name="google" size={24} />}
                            />

                            <Input
                                placeholder="mot de passe"
                                style={styles.input2}
                            />

                        </View>


                    </View>

                    {/*Partie 3: action des buttons*/}

                    <View style={styles.parent}>
                        <Pressable style={styles.btn_inscription}>
                            <Text style={styles.text_inscription}>
                                S'inscrire
                            </Text>
                        </Pressable>
                        <View style={styles.separator_parent}>
                            <View style={styles.lineView} />
                            <Text style={styles.ou} >ou</Text>
                        </View>
                        <Pressable style={styles.btn_connexion_google} onPress={() => { }}>
                            <Text style={styles.connexion_google}>
                                <Image source={google} />
                                <Text>  Connexion avec google
                                </Text>
                            </Text>
                        </Pressable>

                    </View>


                </View>

            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({

    //Bloc pour le background et la premiere partie

    backgroundImage:
    {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
    ,
    part1:
    {
        position: 'absolute',
        top: 80,
        transition: 'ease-in-out'
    }
    ,
    persoStyle:
    {
        width: 350,
        height: 220,
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
        transition: 'ease-in-out'

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
    ,
    textField:
    {
        width: "80%"
    }
    ,
    input1:
    {
        height: 40,
        borderColor: '#30c972',
        marginBottom: 10,
        paddingHorizontal: 10,
        marginTop: 35,
    },
    input2:
    {
        height: 40,
        borderColor: '#30c972',
        marginBottom: 10,
        paddingHorizontal: 10,
    }



    // Bloc de boutton d'action
    ,

    parent: {
        width: "100%"
        , flex: 1
        , display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    //button d'inscription:

    , btn_inscription:
    {
        backgroundColor: "#FCBD14",
        marginTop: 50,
        padding: '2%'
        , width: '70%'
        ,

        borderRadius: 20
    }

    , text_inscription:
    {
        textAlign: 'center',
        fontSize: 19,
        fontFamily: "DIN Black",
        lineHeight: 24,
        letterSpacing: 1,
        color: 'white'
    }

    // barre de separation:
    ,
    separator_parent:
    {
        width: "100%"
        , display: "flex",
        alignItems: "center"
    }
    ,
    lineView: {
        borderStyle: "solid",
        borderColor: "#928e96",
        borderTopWidth: 1,
        width: "50%",
        marginTop: 20
    }

    , ou:
    {
        top: 2,
        left: 165,
        fontSize: 12,
        fontFamily: "DIN Medium",
        color: "#000",
        textAlign: "center",
        position: "absolute"
        , backgroundColor: 'white',
        padding: '2%'
    }


    //button de connexion avec google:
    ,
    btn_connexion_google:
    {
        backgroundColor: "#30c972",
        padding: '2%'
        , width: '70%'
        ,
        marginTop: 20,
        borderRadius: 20,
        textAlign: "center",
    }
    , connexion_google:
    {
        fontSize: 17,
        fontFamily: "DIN Black",
        color: "#fff",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: 'relative',
        top: -8,
        lineHeight: 39
    }

});

export default SignScreen;
