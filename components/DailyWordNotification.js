import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function DailyWordNotification({
    status,
    targetWord,
    renderGame,
}) {
    return (
        <LinearGradient
            colors={['#39DA80', '#6bdbad', '#48EBE5']}
            style={styles.screen}
        >
            <View style={styles.card}>
                <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    <Text style={styles.title}>¡{status.toUpperCase()}!</Text>
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
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 30,
        fontFamily: 'MontserratBold',
    },
    text: {
        fontSize: 22,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'MontserratMedium',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 15,
        paddingHorizontal: 30,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
    },
    btnText: {
        color: 'black',
        paddingHorizontal: 10,
        fontSize: 18,
        fontFamily: 'MontserratMedium',
    },
});
