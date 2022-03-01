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
    return stats;
}

export const storeStats = async (newStats) => {
    await AsyncStorage.setItem('@stats', JSON.stringify(newStats));
};
