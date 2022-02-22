import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MainScreen({ renderGame }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PALABROS</Text>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => renderGame(true)}>
                    <Text style={styles.menuText}>JUGAR</Text>
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
    },
    title: {
        fontSize: 50,
    },
    menu: {
        marginTop: 30,
    },
    menuText: {
        fontSize: 30,
    },
});
