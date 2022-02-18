import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/colors';

const Notification = ({ restartGame, text, notification }) => {
    const showText = () => {
        if (text === 'HAS GANADO!') {
            return text;
        } else return `LA PALABRA ERA: ${text}`;
    };

    return (
        <View style={notification ? styles.container : styles.hide}>
            <Text style={styles.text}>{showText()}</Text>
            <Button
                onPress={restartGame}
                title="Reiniciar"
                color={Colors.keys}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: 250,
        height: 150,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.keys,
    },
    text: {
        fontSize: 25,
        marginBottom: 10,
        textAlign: 'center',
    },
    hide: {
        display: 'none',
    },
});

export default Notification;
