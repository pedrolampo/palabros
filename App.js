import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import GuessGrid from './components/GuessGrid';
import Keyboard from './components/Keyboard';
import Colors from './constants/colors';
import targetWords from './targetWords';

export default function App() {
    const WORD_LENGTH = 5;
    const targetWord = targetWords[parseInt(Math.random() * (2315 - 1) + 1)];

    const [guess, setGuess] = useState('');
    const [guessLetter, setGuessLetter] = useState('');
    const [guessNumber, setGuessNumber] = useState(0);

    return (
        <View style={styles.screen}>
            <Header />

            <GuessGrid
                guess={guess}
                guessLetter={guessLetter}
                guessNumber={guessNumber}
            />

            <Keyboard
                wordLength={WORD_LENGTH}
                guess={guess}
                setGuess={setGuess}
                setGuessLetter={setGuessLetter}
                setGuessNumber={setGuessNumber}
                guessNumber={guessNumber}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
