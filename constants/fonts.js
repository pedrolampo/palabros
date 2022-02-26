import { useFonts } from 'expo-font';

export const myFonts = () => {
    const [loaded] = useFonts({
        MontserratLight: require('../assets/Montserrat-Light.ttf'),
        MontserratMedium: require('../assets/Montserrat-Medium.ttf'),
        MontserratBold: require('../assets/Montserrat-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }
};
