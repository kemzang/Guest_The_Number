/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
export interface utilisateur {
    Email: String,
    Nom: String
}

export interface Joueur {
    statut: boolean;
    number: number;
    isEliminate: boolean;
    score: number;
    nom_joueur: string;
    photo_profil: string;
  }

export interface partie{
    Id:Number,
    status:String
}