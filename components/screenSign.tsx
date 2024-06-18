/* eslint-disable prettier/prettier */

/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import * as React from "react";
import { StyleSheet, View, Text, Pressable, ImageBackground } from "react-native";

import background from  "../assets/images/Group4.png";

const ScreenSign = ({navigation}) => {
	return (

		<View style={styles.container}>
			<ImageBackground source={background} style={styles.backgroundImage}>
				<Text style={styles.guessNumber}>
					<Text style={styles.guessNumberTxtContainer}>
						<Text style={styles.guess}>
							<Text style={styles.guess1}>
								<Text style={styles.gue}>Gue</Text>
								<Text style={styles.ss}>ss</Text>
							</Text>
						</Text>
						<Text style={styles.gue}>
							<Text style={styles.guess}>
								<Text style={styles.text1}>{` `}</Text>
							</Text>
							<Text style={styles.number1}>Number</Text>
						</Text>
					</Text>
				</Text>
				<Pressable style={[styles.groupParent, styles.groupParentLayout]} onPress={()=>{navigation.navigate("Page_Inscription_connexion")}}>
					<View>
						<View style={[styles.groupChild, styles.groupShadowBox]} />
						<Text style={[styles.signTypo]}>Sign Up</Text>
					</View>
				</Pressable>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	vectorIconPosition: {
		left: "0%",
		position: "absolute"
	},
	vectorIconLayout1: {
		maxHeight: "100%",
		maxWidth: "100%",
		overflow: "hidden"
	},
	groupLayout: {
		width: "10.16%",
		position: "absolute"
	},
	groupIconLayout: {
		height: "11.52%",
		maxHeight: "100%",
		maxWidth: "100%",
		left: "0%",
		right: "0%",
		position: "absolute",
		overflow: "hidden",
		width: "100%"
	},
	vectorIconLayout: {
		width: "3.01%",
		height: "2.22%",
		maxHeight: "100%",
		maxWidth: "100%",
		position: "absolute",
		overflow: "hidden"
	},
	groupParentLayout: {
		height: 36,
		width: 105,
		position: "absolute"
	},
	groupShadowBox: {
		borderRadius: 20,
		shadowOpacity: 1,
		elevation: 4,
		shadowRadius: 4,
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowColor: "rgba(0, 0, 0, 0.5)",
		left: 0,
		height: 36,
		width: 105,
		top: 0,
		right: 0,
		position: "absolute"
	},
	signTypo: {
		top: 8,
		textAlignVertical: 'center',
		fontSize: 14,
		textAlign: "center",
		fontFamily: "DIN Black"
		, color: '#000'
	},
	componentChild: {
		height: "80.1%",
		width: "65.69%",
		right: "20.26%",
		bottom: "19.9%",
		left: "14.05%",
		backgroundColor: "#30c972",
		top: "0%",
		position: "absolute"
	},
	vectorIcon: {
		height: "80.19%",
		width: "95.49%",
		top: "0.68%",
		right: "4.51%",
		bottom: "19.13%",
		left: "0%",
		position: "absolute"
	},
	groupIcon: {
		bottom: "88.48%",
		top: "0%"
	},
	groupIcon1: {
		top: "29.5%",
		bottom: "58.98%"
	},
	groupIcon2: {
		top: "59.01%",
		bottom: "29.48%"
	},
	groupIcon3: {
		top: "88.51%",
		bottom: "-0.03%"
	},
	group: {
		right: "57.93%",
		bottom: "92.64%",
		left: "31.9%",
		height: "7.36%",
		width: "10.16%",
		top: "0%"
	},
	group1: {
		top: "39.05%",
		right: "16.84%",
		bottom: "53.58%",
		left: "72.99%",
		height: "7.36%",
		width: "10.16%"
	},
	vectorIcon1: {
		top: "17.04%",
		right: "71.32%",
		bottom: "80.74%",
		left: "25.67%"
	},
	vectorIcon2: {
		top: "52.98%",
		right: "34.61%",
		bottom: "44.8%",
		left: "62.38%"
	},
	vectorIcon3: {
		height: "11.75%",
		width: "15.93%",
		top: "39.35%",
		right: "75.94%",
		bottom: "48.9%",
		left: "8.13%",
		position: "absolute"
	},
	vectorIcon4: {
		height: "7.74%",
		width: "10.47%",
		top: "28.33%",
		right: "16.58%",
		bottom: "63.93%",
		left: "72.95%",
		position: "absolute"
	},
	vectorIcon5: {
		height: "2.21%",
		width: "2.99%",
		top: "47.87%",
		right: "67.87%",
		bottom: "49.92%",
		left: "29.13%",
		position: "absolute"
	},
	vectorIcon6: {
		height: "0.69%",
		top: "11.93%",
		right: "45.47%",
		bottom: "87.39%",
		left: "44.37%",
		maxHeight: "100%",
		maxWidth: "100%",
		overflow: "hidden"
	},
	vectorIcon7: {
		height: "7.5%",
		width: "0.93%",
		top: "9.88%",
		right: "29.77%",
		bottom: "82.62%",
		left: "69.3%",
		position: "absolute"
	},
	vectorIcon8: {
		height: "37.31%",
		width: "50.55%",
		top: "62.69%",
		right: "0.01%",
		left: "49.45%",
		bottom: "0%",
		position: "absolute"
	},
	modeIsolation: {
		height: "92.99%",
		top: "7.01%",
		bottom: "0%",
		right: "0%",
		left: "0%",
		overflow: "hidden",
		width: "100%"
	},
	// rectangleParent: {
	// 	left: -77,
	// 	width: 548,
	// 	height: 799,
	// 	top: 0,
	// 	position: "absolute"
	// },
	gue: {
		color: "#fff"
	},
	ss: {
		color: "#ffc700"
	},
	guess1: {
		fontSize: 64
	},
	guess: {
		lineHeight: 66
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
		top: 242,
		left: 100,
		display: "flex",
		alignItems: "center",
		width: 184,
		height: 150,
		textAlign: "center",
		fontFamily: "DIN Black",
		position: "absolute"
	},
	groupChild: {
		backgroundColor: "#ffc700"
	},

	groupItem: {
		backgroundColor: "#008144"
	},
	signUp1: {
		left: 29,
		color: "#fff"
	},
	rectangleContainer: {
		top: -10,
		left: -2,
		display: "none"
	},
	groupParent: {
		top: 496,
		left: 139
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	backgroundImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default ScreenSign;
