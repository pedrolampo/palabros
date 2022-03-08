import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function fetchDailyStats() {
    const [stats, setStats] = useState({});
    const getDailyStats = async () => {
        await AsyncStorage.getItem('@dailyStats').then((res) => {
            let oldStats = JSON.parse(res);
            setStats(oldStats);
        });
    };

    useEffect(() => {
        getDailyStats();
    }, []);

    if (!stats) {
        return {
            played: 0,
            streak: 0,
            maxStreak: 0,
            wins: 0,
        };
    } else return stats;
}

export const storeDailyStats = async (newStats) => {
    await AsyncStorage.setItem('@dailyStats', JSON.stringify(newStats));
};
