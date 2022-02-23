import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

export default function MainScreen({ renderGame }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PALABROS</Text>
            <View style={styles.menu}>
                <TouchableOpacity
                    style={styles.menuButtons}
                    onPress={() => renderGame('normal')}
                >
                    <Text style={styles.menuText}>JUEGO NORMAL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuButtons}
                    onPress={() => renderGame('daily')}
                >
                    <Text style={styles.menuText}>JUEGO DIARIO</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuButtons}
                    onPress={() => renderGame('instructions')}
                >
                    <Text style={styles.menuText}>CÓMO JUGAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 80,
        backgroundColor: Colors.correct,
    },
    title: {
        fontSize: 50,
    },
    menu: {
        marginTop: 30,
    },
    menuButtons: {
        padding: 10,
    },
    menuText: {
        fontSize: 30,
        textAlign: 'center',
    },
});
