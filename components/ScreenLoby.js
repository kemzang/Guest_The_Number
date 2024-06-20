/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable no-shadow */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable semi */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import * as React from "react";
import { useRoute } from '@react-navigation/native';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, Animated, TextInput, SafeAreaView } from "react-native";
import * as Animatable from 'react-native-animatable';
import profil from "../assets/images/ScreeToBegin/profil.png"; // Example image
import User from "../assets/images/Loby/User.png";
import Settings from "../assets/images/Loby/Settings.png";
import Rules from "../assets/images/Loby/Rules.png";
import El8 from "../assets/images/Loby/Ellipse9.png"; // Example image
import El9 from "../assets/images/Loby/Ellipse10.png";
import El10 from "../assets/images/Loby/Ellipse11.png";
import PlayImg from "../assets/images/Loby/Play.png";
import Exit from "../assets/images/Loby/EmergencyExit.png";
import Modal from "./components_material/Modal.js";

const UserCard = ({ name, status, profil_picture, own }) => {
    return (
        <View style={cardStyle.card}>
            <View style={cardStyle.profilePicContainer}>
                <Image
                    style={cardStyle.profilePic}
                    source={profil_picture} // Remplacez par l'URL de votre image
                />
            </View>
            <View style={cardStyle.textContainer}>
                <Text style={cardStyle.userName}>{name}  {own && (<Text style={{ color: "#ffc700", fontFamily: "DIN Black" }}>{"(Createur)"}</Text>)}</Text>
                <View style={cardStyle.statusContainer}>
                    <View style={status === "Hors ligne" ? cardStyle.statusDotOff : cardStyle.statusDot}></View>
                    <Text style={cardStyle.statusText}>{status}</Text>
                </View>
            </View>
        </View>
    );
};

const TouchableBtn = ({ isActive, text, onPress, Icon, badge, style, styletext }) => {
    return (
        <TouchableOpacity style={style ? [styles.btn, ...style] : [styles.btn, isActive ? styles.btn_select : null]} onPress={onPress}>
            <View style={styles.Icon_Text}>
                <Image source={Icon} />
                <Text style={styletext ? [...styletext] : null}>{text}</Text>
                {
                    badge && (
                        <View style={[styles.badge, { marginLeft: 4 }]}>
                            <Text style={{ padding: 2, color: "white" }}>
                                {badge}
                            </Text>
                        </View>
                    )
                }
            </View>
        </TouchableOpacity>
    );
};

const ScreeLoby = ({ navigation }) => {
    const [activeButton, setActiveButton] = React.useState(1);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalVisible2, setModalVisible2] = React.useState(false);
    const [isEnabled, setIsEnabled] = React.useState(false);
    const [activeBtn, setActiveBtn] = React.useState(true);
    const [nbJoeur, setNbJoueur] = React.useState(7);
    const route = useRoute();
    const { user } = route.params;
    const translateX = React.useState(new Animated.Value(0))[0];

    const toggleSwitch = () => {
        Animated.timing(translateX, {
            toValue: isEnabled ? 0 : 24, // Adjust the value according to your switch size
            duration: 200,
            useNativeDriver: true,
        }).start();
        setIsEnabled(previousState => !previousState);
    };

    const handlePress = (buttonId) => {
        setActiveButton(buttonId);
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const openModal2 = () => {
        setModalVisible2(true);
    };

    const closeModal2 = () => {
        setModalVisible2(false);
    };
    const users = [
        { name: "AlFonso Elminio", status: "En ligne", profil_picture: El8 },
        { name: "Gojo Satoru", status: "Hors ligne", profil_picture: profil },
        { name: "Negoue Tchinda Patrick", status: "En ligne", profil_picture: El10 },
        { name: "Negoue Mafok", status: "Hors ligne", profil_picture: El9 },
    ];

    const users2 = [
        { name: "AlFonso Elminio", status: "En ligne", profil_picture: El8 },
        { name: "Choco Picant", status: "En ligne", profil_picture: profil, own: true },
        { name: "Negoue Mafok", status: "Hors ligne", profil_picture: El9 },
        { name: "Negoue Tchinda Patrick", status: "En ligne", profil_picture: El10 },

    ].sort((a, b) => {
        if (a.own && !b.own) {
            return -1;
        }
        else if (!a.own && b.own) {
            return 1;
        }
        else {
            return 0;
        }
    });


    const renderContent = () => {
        switch (activeButton) {
            case 1:
                return (
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        {user.own ? users.map((user, index) => (
                            <UserCard
                                key={index}
                                name={user.name}
                                status={user.status}
                                profil_picture={user.profil_picture}
                            />
                        )) :
                            users2.map((user, index) => (
                                <UserCard
                                    key={index}
                                    name={user.name}
                                    status={user.status}
                                    profil_picture={user.profil_picture}
                                    own={user.own}
                                />
                            ))
                        }
                    </ScrollView>
                );
            case 2:
                return (
                    <View style={styles.rulesContainer}>
                        <Text style={styles.rulesText}>Voici les règles du jeu 🎲</Text>
                        <Text style={{color:"#595450"}}>Le jeu consiste a choisir dans un intervalle de nombre un nombre et de le garder secret ,
                            ensuite vous devez tout faire pour trouver le nombre d’un autre joueur afin de l’éliminer de la partie ,
                            après un joueur éliminer tout les joueurs rechoisissent un nombre ainsi
                            de suite jusqu'à ce qu’il ne reste plus qu’une personne .</Text>
                    </View>
                );
            case 3:
                return (
                    <View style={settingsStyle.container}>
                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 41 }}>
                            <Text style={{color:"#595450"}}>Activation des notifications  </Text>
                            <TouchableOpacity style={settingsStyle.switch} onPress={toggleSwitch}>
                                <Animated.View
                                    style={[
                                        settingsStyle.thumb,
                                        { transform: [{ translateX }] },
                                        isEnabled ? settingsStyle.thumbEnabled : settingsStyle.thumbDisabled,
                                    ]}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{color:"#595450"}}>Nombre maximum de joueur  </Text>
                            <SafeAreaView>
                                <TextInput
                                    style={[settingsStyle.input,{color:"black",textAlign:"center"}]}
                                    keyboardType="numeric"
                                    maxLength={9}
                                    value={7}

                                />

                            </SafeAreaView>
                        </View>


                    </View>
                );
            default:
                return null;
        }
    };


    const OwnerPartie = () => {
        return (
            <View style={styles.container}>
                <View style={styles.container2}>
                    <View style={styles.circle_profil}>
                        <Image style={styles.groupIcon} resizeMode="cover" source={profil} />
                    </View>
                    <Text style={styles.gojoSatoru}>Choco Picant</Text>
                </View>

                <View style={styles.rectangleParent}>
                    <View style={styles.rectangleChild}>
                        <TouchableBtn
                            text="Joueurs"
                            isActive={activeButton === 1}
                            Icon={User}
                            badge={nbJoeur}
                            onPress={() => handlePress(1)}
                            styletext={[{color:"black"}]}
                        />
                        <TouchableBtn
                            text="Règles"
                            isActive={activeButton === 2}
                            Icon={Rules}
                            onPress={() => handlePress(2)}
                            styletext={[{color:"black"}]}

                        />
                        <TouchableBtn
                            text="Réglages"
                            isActive={activeButton === 3}
                            Icon={Settings}
                            onPress={() => handlePress(3)}
                            styletext={[{color:"black"}]}

                        />
                    </View>
                </View>

                <Animatable.View
                    animation="fadeIn"
                    duration={500}
                    style={styles.rectangleView}
                >
                    {renderContent()}
                    {activeBtn && (
                        <View style={{
                            display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10, position: "absolute",
                            bottom: 5, left: 40, width: 300
                        }}>
                            <TouchableBtn
                                text="Jouer"
                                Icon={PlayImg}
                                onPress={() => { handlePress(1); openModal2(); }}
                                style={[{ backgroundColor: '#ffc700', elevation: 4 }]}
                                styletext={[{ color: "white", fontFamily: "DIN Black", marginLeft: 8 }]}
                            />
                            <TouchableBtn
                                text="Exit"
                                Icon={Exit}
                                onPress={() => { handlePress(1); openModal(); }}
                                style={[{ backgroundColor: '#c93039', elevation: 4 }]}
                                styletext={[{ color: "white", fontFamily: "DIN Black", marginLeft: 8 }]}
                            />
                            <Modal
                                visible={modalVisible}
                                onClose={closeModal}
                                message="Êtes-vous sure de vouloir quitter la partie ?."
                                onPress={() => { navigation.navigate("Page_de_choix_de_jeu") }}
                                
                            />
                            <Modal
                                visible={modalVisible2}
                                onClose={closeModal2}
                                message="Êtes-vous prêt ?."
                            />

                        </View>)}
                </Animatable.View>

            </View>)
    };

    const NotOwnerPartie = () => {
        return (

            <View style={styles.container}>
                <View style={styles.container2}>
                    <View style={styles.circle_profil}>
                        <Image style={styles.groupIcon} resizeMode="cover" source={El10} />
                    </View>
                    <Text style={styles.gojoSatoru}>{user.name}</Text>
                    <Text style={{ color: "white", marginTop: 5 }}>La partie commencera apres validation du createur</Text>
                </View>

                <View style={styles.rectangleParent}>
                    <View style={styles.rectangleChild}>
                        <TouchableBtn
                            text="Joueurs"
                            isActive={activeButton === 1}
                            Icon={User}
                            badge={nbJoeur}
                            onPress={() => handlePress(1)}
                        />
                        <TouchableBtn
                            text="Règles"
                            isActive={activeButton === 2}
                            Icon={Rules}
                            onPress={() => handlePress(2)}
                        />
                    </View>
                </View>

                <Animatable.View
                    animation="fadeIn"
                    duration={500}
                    style={styles.rectangleView}
                >
                    {renderContent()}
                    {activeBtn && (
                        <View style={{
                            display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10, position: "absolute",
                            bottom: 5, left: 40, width: 300
                        }}>
                            <Text>{''}</Text>
                            <TouchableBtn
                                text="Exit"
                                Icon={Exit}
                                onPress={() => { handlePress(1); openModal(); }}
                                style={[{ backgroundColor: '#c93039', elevation: 4 }]}
                                styletext={[{ color: "white", fontFamily: "DIN Black", marginLeft: 8 }]}
                            />
                            <Modal
                                visible={modalVisible}
                                onClose={closeModal}
                                message="Êtes-vous sure de vouloir quitter la partie ?."
                                onPress={() => { navigation.navigate("Page_de_choix_de_jeu") }}

                            />

                        </View>)}
                </Animatable.View>

            </View>)

    }

    return (
        <>
            {!user.own ? (<NotOwnerPartie />) : (<OwnerPartie />)}

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#30C972",
        flex: 1,
    },
    circle_profil: {
        backgroundColor: "#edecf0",
        borderRadius: 100,
        width: 80,
        height: 80,
        marginTop: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container2: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    gojoSatoru: {
        fontSize: 24,
        marginTop: 10,
        fontFamily: "DIN Black",
        color: "#fff",
        width: 190,
        textAlign: "center"
    },
    rectangleParent: {
        backgroundColor: "#fff",
        borderRadius: 20,
        width: "90%",
        position: "relative",
        left: 18,
        marginTop: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    rectangleChild: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "96%",
        padding: 8,
        alignItems: "center",
    },
    Icon_Text: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    btn: {
        borderRadius: 20,
        padding: 9,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    btn_select: {
        backgroundColor: "#ffc700",
    },
    rectangleView: {
        marginTop: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: "#fff",
        overflow: "hidden",
        flex: 1,
        width: "100%",
        paddingLeft: 10,
        paddingRight: 10

    },
    scrollViewContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    rulesContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginBottom: 120,
    },
    rulesText: {
        fontSize: 18,
        color: "#000",
        marginBottom: 20
    },
    settingsContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    settingsText: {
        fontSize: 18,
        color: "#000",
    },
    badge: {
        backgroundColor: "#595450",
        borderRadius: 50,
        paddingHorizontal: 4,
        paddingVertical: 2,
        color: "black",
        textAlign: "center",
        overflow: "hidden", // Ensure the circle shape
    },
});

const cardStyle = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00C775',
        padding: 25,
        borderRadius: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    profilePicContainer: {
        marginRight: 10,
    },
    profilePic: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    textContainer: {
        flex: 1,
    },
    userName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    statusDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginRight: 5,
    },
    statusDotOff: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'red',
        marginRight: 5,
    },
    statusText: {
        fontSize: 14,
        color: '#fff',
    },
});

const settingsStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
    },
    switch: {
        width: 60,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#30C972',
        padding: 4,
        justifyContent: 'center',
    },
    thumb: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: '#fff',
    },
    thumbEnabled: {
        backgroundColor: '#0F9449',
    },
    thumbDisabled: {
        backgroundColor: '#f4f3f4',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default ScreeLoby;
