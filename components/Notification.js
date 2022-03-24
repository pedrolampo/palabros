import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const Notification = ({ restartGame, text, notification }) => {
    const showText = () => {
        if (text.includes('win')) {
            return `¡HAS GANADO!\n"${text[1].toUpperCase()}"`;
        } else return `La Palabra era:\n"${text.toUpperCase()}"`;
    };

    return (
        <View style={notification ? styles.screen : styles.hide}>
            <View style={notification ? styles.container : styles.hide}>
                <Text style={styles.text}>{showText()}</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={restartGame}
                    activeOpacity={0.7}
                >
                    <Text style={styles.btnText}>Reiniciar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    container: {
        position: 'absolute',
        width: 280,
        height: 180,
        backgroundColor: 'lightgrey',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    text: {
        fontSize: 25,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'MontserratMedium',
    },
    btn: {
        backgroundColor: Colors.keys,
        padding: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 8,
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'MontserratMedium',
    },
    hide: {
        display: 'none',
    },
});

export default Notification;
