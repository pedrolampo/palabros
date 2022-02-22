import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, BackHandler } from 'react-native';

import MainScreen from './screens/MainScreen';
import GameScreen from './screens/GameScreen';

import Colors from './constants/colors';

export default function App() {
    const [normalGame, setNormalGame] = useState(false);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => true
        );
        return () => backHandler.remove();
    }, []);

    const RenderGame = () => {
        if (normalGame) return <GameScreen renderGame={setNormalGame} />;
        else return <MainScreen renderGame={setNormalGame} />;
    };

    return (
        <View style={styles.screen}>
            <RenderGame />
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
