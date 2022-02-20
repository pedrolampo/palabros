import Colors from '../constants/colors';

const styles = {
    mainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: 312,
        marginTop: -100,
    },
    tile: {
        margin: 5,
        width: 52,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1,
        borderColor: 'hsl(240, 2%, 23%)',
        borderWidth: 1,
    },
    guessLetter: {
        color: 'black',
        fontSize: 35,
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
    whiteLetter: {
        color: 'white',
        fontSize: 35,
    },
};

function updateTileColor(guessCAPS, targetWord, index) {
    let guess = guessCAPS.toLowerCase();

    if (guess.length !== 0) {
        if (guess.charAt(index) === targetWord.charAt(index)) {
            return [styles.tile, styles.correct];
        } else if (targetWord.includes(guess.charAt(index))) {
            return [styles.tile, styles.wrongLocation];
        } else return [styles.tile, styles.wrong];
    } else return styles.tile;
}

export function updateTextColor(guessCAPS) {
    let guess = guessCAPS.toLowerCase();

    if (guess.length !== 0) {
        return styles.whiteLetter;
    } else return styles.guessLetter;
}

export default updateTileColor;
