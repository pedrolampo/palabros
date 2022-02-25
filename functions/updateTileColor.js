import { useWindowDimensions } from 'react-native';

import Colors from '../constants/colors';

const styles = {
    tileL: {
        margin: 5,
        width: 52,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1,
        borderColor: 'hsl(240, 2%, 23%)',
        borderWidth: 1,
    },
    tileS: {
        margin: 5,
        width: 46,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1,
        borderColor: 'hsl(240, 2%, 23%)',
        borderWidth: 1,
    },
    guessLetterL: {
        color: 'black',
        fontSize: 35,
    },
    guessLetterS: {
        color: 'black',
        fontSize: 25,
    },
    whiteLetterL: {
        color: 'white',
        fontSize: 35,
    },
    whiteLetterS: {
        color: 'white',
        fontSize: 25,
    },
    wrong: {
        backgroundColor: Colors.wrong,
    },
    wrongLocation: {
        backgroundColor: Colors.wrongLocation,
    },
    correct: {
        backgroundColor: Colors.correct,
    },
};

function updateTileColor(guessCAPS, targetWord, index) {
    const { width } = useWindowDimensions();

    let guess = guessCAPS.toLowerCase();

    if (guess.length !== 0) {
        if (guess.charAt(index) === targetWord.charAt(index)) {
            return [width < 380 ? styles.tileS : styles.tileL, styles.correct];
        } else if (targetWord.includes(guess.charAt(index))) {
            return [
                width < 380 ? styles.tileS : styles.tileL,
                styles.wrongLocation,
            ];
        } else return [width < 380 ? styles.tileS : styles.tileL, styles.wrong];
    } else return width < 380 ? styles.tileS : styles.tileL;
}

export function updateTextColor(guessCAPS) {
    const { width } = useWindowDimensions();

    let guess = guessCAPS.toLowerCase();

    if (guess.length !== 0) {
        return width < 380 ? styles.whiteLetterS : styles.whiteLetterL;
    } else return width < 380 ? styles.guessLetterS : styles.guessLetterL;
}

export default updateTileColor;
