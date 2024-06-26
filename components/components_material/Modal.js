/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import React from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';

const ModalCard = ({ visible, onClose, title, message,onPress }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={[styles.modalTitle,{color:"black"}]}>{title}</Text>
                    <Text style={[styles.modalMessage,{color:"black"}]}>{message}</Text>
                    <View style={{ display: "flex", flexDirection: "row", width: 200, justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity
                            style={styles.openButton}
                            onPress={onPress}
                        >
                            <Text style={styles.closeButtonText}>Oui</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={onClose}
                        >
                            <Text style={styles.closeButtonText}>Non</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 60,
        alignItems: 'center',
        elevation: 5,
    },
    modalTitle: {
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    modalMessage: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    closeButton: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#c93039',
    },
    openButton: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#ffc700',
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ModalCard;
