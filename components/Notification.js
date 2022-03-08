import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const Notification = ({ restartGame, text, notification }) => {
    const showText = () => {
        if (text === 'HAS GANADO!') {
            return text;
        } else return `LA PALABRA ERA: ${text}`;
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
        width: 250,
        height: 150,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
    },
    text: {
        fontSize: 25,
        marginBottom: 10,
        textAlign: 'center',
    },
    btn: {
        backgroundColor: Colors.keys,
        padding: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    hide: {
        display: 'none',
    },
});

export default Notification;
