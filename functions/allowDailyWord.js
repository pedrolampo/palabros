import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function allowDailyWord(dailyWordAllowed, storedData) {
    const todaysDate = new Date();
    const fullDate = `${todaysDate.getFullYear()}${todaysDate.getMonth()}${todaysDate.getDate()}`;

    let date = '';
    const storeDate = async () => {
        await AsyncStorage.setItem('@date', date);
    };

    const getDate = async () => {
        const today = await AsyncStorage.getItem('@date');
        date = JSON.stringify(today);

        if (date.includes(fullDate)) {
            return;
        } else {
            date = fullDate;
            dailyWordAllowed.current = 'true';
        }
        storedData();
        storeDate();
    };

    useEffect(() => {
        getDate();
    }, []);
}
