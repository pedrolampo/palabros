import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

import Colors from '../constants/colors';

const Keyboard = (props) => {
    const keyPressHandler = (key) => {
        if (props.guess.length >= props.wordLength) return;
        props.setGuess((prevGuess) => (prevGuess += key));
        props.setGuessLetter(key);
    };

    const submitGuessHandler = () => {
        if (props.guess.length < props.wordLength) {
            Alert.alert('Error', 'No hay suficientes letras', [
                { text: 'OK', style: 'cancel' },
            ]);
            return;
        }
        props.setGuessNumber((prevGssNmb) => prevGssNmb + 1);
    };

    return (
        <View style={styles.keyboard}>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'Q')}
            >
                <Text style={styles.keyText}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'W')}
            >
                <Text style={styles.keyText}>W</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'E')}
            >
                <Text style={styles.keyText}>E</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'R')}
            >
                <Text style={styles.keyText}>R</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'T')}
            >
                <Text style={styles.keyText}>T</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'Y')}
            >
                <Text style={styles.keyText}>Y</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'U')}
            >
                <Text style={styles.keyText}>U</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'I')}
            >
                <Text style={styles.keyText}>I</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'O')}
            >
                <Text style={styles.keyText}>O</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'P')}
            >
                <Text style={styles.keyText}>P</Text>
            </TouchableOpacity>
            <View></View>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'A')}
            >
                <Text style={styles.keyText}>A</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'S')}
            >
                <Text style={styles.keyText}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'D')}
            >
                <Text style={styles.keyText}>D</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'F')}
            >
                <Text style={styles.keyText}>F</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'G')}
            >
                <Text style={styles.keyText}>G</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'H')}
            >
                <Text style={styles.keyText}>H</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'J')}
            >
                <Text style={styles.keyText}>J</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'K')}
            >
                <Text style={styles.keyText}>K</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'L')}
            >
                <Text style={styles.keyText}>L</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'Ñ')}
            >
                <Text style={styles.keyText}>Ñ</Text>
            </TouchableOpacity>
            <View></View>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.keySpecial}
                onPress={submitGuessHandler}
            >
                <Text style={styles.keyText}>Intro</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'Z')}
            >
                <Text style={styles.keyText}>Z</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'X')}
            >
                <Text style={styles.keyText}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'C')}
            >
                <Text style={styles.keyText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'V')}
            >
                <Text style={styles.keyText}>V</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'B')}
            >
                <Text style={styles.keyText}>B</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'N')}
            >
                <Text style={styles.keyText}>N</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.key}
                onPress={keyPressHandler.bind(this, 'M')}
            >
                <Text style={styles.keyText}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={styles.keySpecial}>
                <Text style={styles.keyText}>DEL</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    keyboard: {
        position: 'absolute',
        bottom: 35,
        width: 400,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    key: {
        width: 34,
        height: 38,
        backgroundColor: Colors.grey,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
    },
    keyText: {
        fontSize: 22,
        color: 'white',
    },
    keySpecial: {
        width: 53,
        height: 38,
        backgroundColor: Colors.grey,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
    },
});

export default Keyboard;