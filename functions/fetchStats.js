import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function fetchStats() {
    const [stats, setStats] = useState({});
    const getStats = async () => {
        await AsyncStorage.getItem('@stats').then((res) => {
            let oldStats = JSON.parse(res);
            setStats(oldStats);
        });
    };

    useEffect(() => {
        getStats();
    }, []);

    if (Object.keys(stats).length === 0) {
        return {
            played: 0,
            streak: 0,
            maxStreak: 0,
            wins: 0,
        };
    } else return stats;
}

export const storeStats = async (newStats) => {
    await AsyncStorage.setItem('@stats', JSON.stringify(newStats));
};
