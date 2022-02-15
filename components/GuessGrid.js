import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const GuessGrid = (props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>K</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: 312,
        marginTop: -100,
    },
    tile: {
        margin: 5,
        width: 52,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1,
        borderColor: Colors.grey,
        borderWidth: 1,
    },
    guessLetter: {
        color: 'white',
        fontSize: 35,
    },
});

export default GuessGrid;
