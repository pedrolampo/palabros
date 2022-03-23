import { useWindowDimensions } from 'react-native';

import Colors from '../constants/colors';

const styles = {
    keyL: {
        width: 34,
        height: 42,
        backgroundColor: Colors.keys,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
    },
    keyS: {
        width: 30,
        height: 38,
        backgroundColor: Colors.keys,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
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

function updateKeyColor(lettersArray, targetWord, letter) {
    const { width } = useWindowDimensions();

    let guessLetters = [];
    lettersArray.forEach((word) => {
        guessLetters.push(...word.split(''));
    });

    const isInPosition = (targetWord, letter) => {
        for (let i = 0; i < 5; i++) {
            if (targetWord[i] === letter) {
                for (let index = 0; index < lettersArray.length; index++) {
                    if (lettersArray[index][i] === letter.toUpperCase()) {
                        return true;
                    }
                }
            }
        }
    };

    if (lettersArray.length !== 0) {
        if (guessLetters.includes(letter.toUpperCase())) {
            if (
                targetWord.includes(letter) &&
                isInPosition(targetWord, letter)
            ) {
                return [
                    width < 380 ? styles.keyS : styles.keyL,
                    styles.correct,
                ];
            } else if (targetWord.includes(letter)) {
                return [
                    width < 380 ? styles.keyS : styles.keyL,
                    styles.wrongLocation,
                ];
            } else
                return [width < 380 ? styles.keyS : styles.keyL, styles.wrong];
        } else return styles.keyL;

        // if letra está en letterArray esto, else key comun
        // [width < 380 ? styles.keyS : styles.keyL, styles.wrong];
    } else return width < 380 ? styles.keyS : styles.keyL;
}

export function updateKeyTextColor() {
    const { width } = useWindowDimensions();
}

export default updateKeyColor;
