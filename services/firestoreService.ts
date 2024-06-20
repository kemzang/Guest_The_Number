/* eslint-disable prettier/prettier */
import firestore from '@react-native-firebase/firestore';

// Ajouter un utilisateur
export const addUser = async (nom: string, email: string) => {
  try {
    await firestore().collection('utilisateur').add({
      Nom: nom,
      Email: email,
    });
    console.log('Utilisateur ajouté avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'utilisateur: ', error);
  }
};

// Ajouter un joueur
export const addPlayer = async (playerData:any) => {
  try {
    await firestore().collection('joueur').add(playerData);
    console.log('Joueur ajouté avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'ajout du joueur: ', error);
  }
};

// Ajouter une partie
export const addGame = async (gameData:any) => {
  try {
    await firestore().collection('partie').add(gameData);
    console.log('Partie ajoutée avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la partie: ', error);
  }
};

// Ajouter une devinette
export const addRiddle = async (riddleData:any) => {
  try {
    await firestore().collection('devinette').add(riddleData);
    console.log('Devinette ajoutée avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la devinette: ', error);
  }
};
