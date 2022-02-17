import { styles } from '../components/GuessGrid';

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
