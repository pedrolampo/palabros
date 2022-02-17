import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import GuessGrid from './components/GuessGrid';
import Keyboard from './components/Keyboard';

import Colors from './constants/colors';
import targetWords from './constants/targetWords';

const WORD_LENGTH = 5;
let targetWord;

const newTargetWord = () => {
    targetWord = targetWords[parseInt(Math.random() * (2315 - 1) + 1)];
    console.log(targetWord);
};

newTargetWord();

export default function App() {
    const [gameOver, setGameOver] = useState(false);

    const [guess, setGuess] = useState('');
    const [submitedGuess, setSubmitedGuess] = useState('');
    const [guessNumber, setGuessNumber] = useState(0);

    const [guess1, setGuess1] = useState('');
    const [guess2, setGuess2] = useState('');
    const [guess3, setGuess3] = useState('');
    const [guess4, setGuess4] = useState('');
    const [guess5, setGuess5] = useState('');
    const [guess6, setGuess6] = useState('');

    return (
        <View style={styles.screen}>
            <Header />

            <GuessGrid
                guess={guess}
                guess1={guess1}
                guess2={guess2}
                guess3={guess3}
                guess4={guess4}
                guess5={guess5}
                guess6={guess6}
                targetWord={targetWord}
                guessNumber={guessNumber}
                submitedGuess={submitedGuess}
            />

            <Keyboard
                wordLength={WORD_LENGTH}
                guess={guess}
                targetWord={targetWord}
                guessNumber={guessNumber}
                gameOver={gameOver}
                setGameOver={setGameOver}
                setGuess={setGuess}
                setGuess1={setGuess1}
                setGuess2={setGuess2}
                setGuess3={setGuess3}
                setGuess4={setGuess4}
                setGuess5={setGuess5}
                setGuess6={setGuess6}
                setGuessNumber={setGuessNumber}
                setSubmitedGuess={setSubmitedGuess}
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
