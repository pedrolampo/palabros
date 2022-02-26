import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainScreen from './screens/MainScreen';
import GameScreen from './screens/GameScreen';
import DailyGameScreen from './screens/DailyGameScreen';
import HowToPlay from './screens/HowToPlay';

import { myFonts } from './constants/fonts';
import { allowDailyWord } from './functions/allowDailyWord';
import Colors from './constants/colors';

export default function App() {
    const [normalGame, setNormalGame] = useState('menu');
    const dailyWordAllowed = useRef('true');
    myFonts();

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => true
        );
        return () => backHandler.remove();
    }, []);

    const storedData = async () => {
        await AsyncStorage.setItem(
            '@dailyWordAllowed',
            JSON.stringify(dailyWordAllowed)
        );
    };

    const getData = async () => {
        const isAllowed = await AsyncStorage.getItem('@dailyWordAllowed');
        dailyWordAllowed.current = isAllowed;
    };

    allowDailyWord(dailyWordAllowed, storedData);
    getData();

    const RenderGame = () => {
        if (normalGame === 'normal') {
            return <GameScreen renderGame={setNormalGame} />;
        }
        if (normalGame === 'daily') {
            return (
                <DailyGameScreen
                    renderGame={setNormalGame}
                    storeData={storedData}
                    getData={getData}
                    dailyWordAllowed={dailyWordAllowed}
                />
            );
        }
        if (normalGame === 'instructions') {
            return <HowToPlay renderGame={setNormalGame} />;
        } else {
            return <MainScreen renderGame={setNormalGame} />;
        }
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
