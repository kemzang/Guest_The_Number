/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import * as React from "react";
import { StyleSheet, View, Text, Image, ImageBackground, Pressable, StatusBar, TouchableOpacity } from "react-native";
import { TextInput, Provider as PaperProvider } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

import { Input } from "react-native-elements";
import background from "../assets/images/Group4.png";
import perso from "../assets/images/SignScreen/perso.png";
import google from "../assets/images/SignScreen/Google.png";
import ImmersiveMode from 'react-native-immersive';
import { ToastModule, showToast } from './components_material/toast.js';
import { addUser, addPlayer } from '../services/firestoreService';
// import SvgUri from 'react-native-svg';

const SignScreen = ({ navigation }) => {
    const [error, setError] = React.useState(false);
    const [error_pass, setErrorPass] = React.useState(false);

    const [text, setText] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [nom, setNom] = React.useState("");

    const validation = (email: string, password: string, name: string) => {
        if (email.length < 1 || password.length < 1 || name.length < 1) {
            showToast("error", "Notification", "Veuillez entrer votre email , nom et  mot de passe ");
        } else {
            if (password.length >= 6) {
                try {
                    auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then(() => {
                            addUser(name, email);
                            const player = {
                                statut: false,
                                number: 0,
                                isEliminate: false,
                                score: 0,
                                nom_joueur: name,
                            };
                            addPlayer(player)

                            console.log('User account created & signed in!');
                            setError(false);
                            navigation.navigate("Page_si_Pas_de_connexion");
                        })
                        .catch(error => {
                            if (error.code === 'auth/email-already-in-use') {
                                console.log('That email address is already in use!');
                                showToast("error", "Notification", "Cet email est déjà utilisé !");
                            }

                            if (error.code === 'auth/invalid-email') {
                                console.log('That email address is invalid!');
                                showToast("error", "Notification", "Cet email est invalide !");
                            }
                            setError(true);
                            console.error(error);
                        });
                } catch (e) {
                    setError(true);
                    showToast("error", "Notification", "Une erreur est survenue. Veuillez réessayer.");
                }
            } else {
                setErrorPass(true);
                showToast("error", "Notification", "Le mot de passe doit contenir au moins 6 caractères.");
            }
        }
    }

    const Connexion = (email: string, password: string, name: string) => {
        if (email.length < 1 || password.length < 1 || name.length < 1) {
            showToast("error", "Notification", "Veuillez entrer votre email , nom et  mot de passe ");
        } else {
            if (password.length >= 6) {
                try {
                    auth()
                        .signInWithEmailAndPassword(email, password)
                        .then(() => {
                            console.log('User account created & signed in!');
                            setError(false);
                            navigation.navigate("Page_si_Pas_de_connexion");
                        })
                        .catch(error => {
                            if (error.code === 'auth/email-already-in-use') {
                                console.log('That email address is already in use!');
                                showToast("error", "Notification", "Cet email est déjà utilisé !");
                            }

                            if (error.code === 'auth/invalid-email') {
                                console.log('That email address is invalid!');
                                showToast("error", "Notification", "Cet email est invalide !");
                            }
                            setError(true);
                            console.error(error);
                        });
                } catch (e) {
                    setError(true);
                    showToast("error", "Notification", "Une erreur est survenue. Veuillez réessayer.");
                }
            } else {
                setErrorPass(true);
                showToast("error", "Notification", "Le mot de passe doit contenir au moins 6 caractères.");
            }
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden={true} />
            <ImageBackground source={background} style={styles.backgroundImage}>
                <View style={styles.part1}>
                    <Image source={perso} style={styles.persoStyle} />
                    <Text style={styles.rejoignezLaComunauteContainer}>
                        <Text style={styles.rejoignezLaComunauteContainer1}>
                            <Text style={styles.rejoignezLa}>Rejoignez la</Text>
                            <Text style={styles.comunaute}> comunautée</Text>
                        </Text>
                    </Text>
                </View>
                <View style={[styles.rectangleView, { padding: 10 }]}>
                    <View style={styles.inscriptionParent}>
                        <Text style={styles.inscription}>INSCRIPTION</Text>
                        <View style={[styles.textField]}>
                            <TextInput
                                label="Email"
                                value={text}
                                onChangeText={text_val => setText(text_val)}
                                style={styles.input}
                                mode="outlined"
                                keyboardType="email-address"
                            />
                            <TextInput
                                label="Nom de joueur"
                                value={nom}
                                onChangeText={name_val => setNom(name_val)}
                                style={styles.input}
                                mode="outlined"
                            />

                            <TextInput
                                label="Mot de passe"
                                value={password}
                                onChangeText={password_val => setPassword(password_val)}
                                style={styles.input}
                                mode="outlined"
                                secureTextEntry
                            />
                        </View>
                    </View>
                    <View style={styles.parent}>
                        <TouchableOpacity style={styles.btn_inscription} onPress={() => validation(text, password, nom)}>
                            <Text style={styles.text_inscription}>
                                S'inscrire
                            </Text>
                        </TouchableOpacity>
                        {/* <View style={styles.separator_parent}>
                            <View style={styles.lineView} />
                            <Text style={styles.ou} >ou</Text>

                        </View> */}
                        <Text >ou</Text>

                        <TouchableOpacity style={styles.btn_connexion_google} onPress={() => { Connexion(text, password, nom) }}>
                            <Text style={{ color: "white", fontFamily: "DIN Black", fontSize: 20, textAlign: "center" }}>  Connexion</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ToastModule />

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
        width: "80%",

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
    },

    input: {
        marginTop: 20,
    }

    // Bloc de boutton d'action
    ,

    parent: {
        width: "100%"
        , flex: 1
        , display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
        , justifyContent: "space-around",
        marginTop: 180
    }
    //button d'inscription:

    , btn_inscription:
    {
        backgroundColor: "#FCBD14",
        padding: '2%'
        , width: '40%'
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
        , width: '40%'
        ,
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
