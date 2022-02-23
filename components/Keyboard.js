import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { SizeContext } from '../App';
import Colors from '../constants/colors';
import targetWords from '../constants/targetWords';

const Keyboard = (props) => {
    const { width } = useContext(SizeContext);

    const keyPressHandler = (key) => {
        if (props.gameOver === true) return;
        if (props.guess.length >= props.wordLength) return;
        props.setGuess((prevGuess) => (prevGuess += key));
    };

    const submitGuessHandler = () => {
        if (props.gameOver === true) return;

        if (props.guess.length < props.wordLength) {
            props.setErrorNotification('No hay suficientes letras');
            return;
        }

        if (!targetWords.includes(props.guess.toLowerCase())) {
            props.setErrorNotification('No está en la lista de palabras');
            return;
        }

        if (props.guessNumber === 0) props.setGuess1(props.guess);
        if (props.guessNumber === 1) props.setGuess2(props.guess);
        if (props.guessNumber === 2) props.setGuess3(props.guess);
        if (props.guessNumber === 3) props.setGuess4(props.guess);
        if (props.guessNumber === 4) props.setGuess5(props.guess);
        if (props.guessNumber === 5) props.setGuess6(props.guess);

        if (props.targetWord === props.guess.toLowerCase()) {
            props.setGameOver(true);
            props.setNotification('Has ganado!');
            return;
        }

        if (props.guessNumber >= 5) {
            props.setNotification(props.targetWord);
            return;
        }

        props.setGuessNumber((prevGssNmb) => prevGssNmb + 1);
        props.setSubmitedGuess(props.guess);
        props.setGuess('');
    };

    const deleteLetterHandler = () => {
        if (props.gameOver === true) return;
        props.setGuess((prevGuess) => prevGuess.slice(0, -1));
    };

    return (
        <View style={width < 380 ? styles.keyboardS : styles.keyboardL}>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'Q')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    Q
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'W')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    W
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'E')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    E
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'R')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    R
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'T')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    T
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'Y')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    Y
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'U')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    U
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'I')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    I
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'O')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    O
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'P')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    P
                </Text>
            </TouchableOpacity>
            <View></View>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'A')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    A
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'S')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    S
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'D')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    D
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'F')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    F
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'G')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    G
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'H')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    H
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'J')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    J
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'K')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    K
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'L')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    L
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'Ñ')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    Ñ
                </Text>
            </TouchableOpacity>
            <View></View>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keySpecialS : styles.keySpecialL}
                onPress={submitGuessHandler}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    Enter
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'Z')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    Z
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'X')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    X
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'C')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    C
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'V')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    V
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'B')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    B
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'N')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    N
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keyS : styles.keyL}
                onPress={keyPressHandler.bind(this, 'M')}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    M
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={width < 380 ? styles.keySpecialS : styles.keySpecialL}
                onPress={deleteLetterHandler}
            >
                <Text style={width < 380 ? styles.keyTextS : styles.keyTextL}>
                    DEL
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    keyboardL: {
        position: 'absolute',
        bottom: 35,
        width: 400,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    keyboardS: {
        position: 'absolute',
        bottom: 10,
        width: 350,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    keyL: {
        width: 34,
        height: 42,
        backgroundColor: Colors.keys,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
    },
    keyS: {
        width: 30,
        height: 38,
        backgroundColor: Colors.keys,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
    },
    keyTextL: {
        color: 'white',
        fontSize: 22,
    },
    keyTextS: {
        color: 'white',
        fontSize: 18,
    },
    keySpecialL: {
        width: 54,
        height: 42,
        backgroundColor: Colors.keys,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
    },
    keySpecialS: {
        width: 47,
        height: 38,
        backgroundColor: Colors.keys,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
    },
});

export default Keyboard;
