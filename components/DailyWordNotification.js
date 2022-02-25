import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../constants/colors';

export default function DailyWordNotification({
    status,
    targetWord,
    renderGame,
}) {
    return (
        <LinearGradient
            colors={['#296636', '#419152', '#001c01']}
            style={styles.screen}
        >
            <View style={styles.card}>
                <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    <Text style={styles.title}>{status.toUpperCase()}!</Text>
                    <Text style={styles.text}>
                        La palabra de hoy era: {targetWord.toUpperCase()}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => renderGame('menu')}
                >
                    <Text style={styles.btnText}>Volver al Menú</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        height: 300,
        width: 300,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Colors.keys,
        padding: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
    },
    title: {
        fontSize: 30,
    },
    text: {
        fontSize: 22,
        marginTop: 10,
        textAlign: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.wrong,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
    },
    btnText: {
        color: 'white',
        paddingHorizontal: 10,
        fontSize: 15,
    },
});
