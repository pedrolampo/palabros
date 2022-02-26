import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Header from '../components/Header';
import GuessGrid from '../components/GuessGrid';
import Keyboard from '../components/Keyboard';

import { allowDailyWord } from '../functions/allowDailyWord';
import Colors from '../constants/colors';
import targetWords from '../constants/targetWords';
import Notification from '../components/Notification';
import ErrorNotification from '../components/ErrorNotification';
import DailyWordNotification from '../components/DailyWordNotification';

const WORD_LENGTH = 5;
let targetWord;

const newTargetWord = () => {
    const offsetFromDate = new Date(2022, 0, 1);
    const msOffset = Date.now() - offsetFromDate;
    const dayOffset = msOffset / 1000 / 60 / 60 / 24;
    targetWord = targetWords[parseInt(dayOffset)];
};

newTargetWord();

export default function DailyGameScreen({
    renderGame,
    storeData,
    getData,
    dailyWordAllowed,
}) {
    const [gameOver, setGameOver] = useState(false);

    const [notification, setNotification] = useState(false);
    const [notificationText, setNotificationText] = useState('');

    const [errorNotification, setErrorNotification] = useState(false);
    const [errorNotificationText, setErrorNotificationText] = useState('');

    const [guess, setGuess] = useState('');
    const [submitedGuess, setSubmitedGuess] = useState('');
    const [guessNumber, setGuessNumber] = useState(0);

    const [guess1, setGuess1] = useState('');
    const [guess2, setGuess2] = useState('');
    const [guess3, setGuess3] = useState('');
    const [guess4, setGuess4] = useState('');
    const [guess5, setGuess5] = useState('');
    const [guess6, setGuess6] = useState('');

    function errorNotificationHandler(message) {
        setErrorNotification(true);
        setErrorNotificationText(message);
    }

    function customNotification(message) {
        setNotification(true);
        setNotificationText(message);
    }

    function restartGame() {
        setGuess('');
        setGuess1('');
        setGuess2('');
        setGuess3('');
        setGuess4('');
        setGuess5('');
        setGuess6('');
        setSubmitedGuess('');
        setGuessNumber(0);
        setGameOver(false);
        setNotification(false);
        newTargetWord();
    }

    allowDailyWord(dailyWordAllowed, storeData);
    getData();

    // HACER QUE NO TE DEJE JUGAR SI YA LO HICISTE
    if (JSON.stringify(dailyWordAllowed).includes('won')) {
        return (
            <DailyWordNotification
                status="ganaste"
                targetWord={targetWord}
                renderGame={renderGame}
            />
        );
    } else if (JSON.stringify(dailyWordAllowed).includes('lost')) {
        return (
            <DailyWordNotification
                status="perdiste"
                targetWord={targetWord}
                renderGame={renderGame}
            />
        );
    }

    return (
        <View style={styles.screen}>
            <Header renderGame={renderGame} restart={restartGame} />

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
                setNotification={customNotification}
                setErrorNotification={errorNotificationHandler}
                setGuessNumber={setGuessNumber}
                setSubmitedGuess={setSubmitedGuess}
                restartGame={restartGame}
                dailyWordAllowed={dailyWordAllowed}
                storeData={storeData}
            />

            <ErrorNotification
                errorNotification={errorNotification}
                setErrorNotification={setErrorNotification}
                text={errorNotificationText}
            />
            <Notification
                notification={notification}
                restartGame={restartGame}
                text={notificationText.toUpperCase()}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
