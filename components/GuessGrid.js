import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import updateTileColor, { updateTextColor } from '../functions/updateTileColor';

import Colors from '../constants/colors';

const GuessGrid = (props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={updateTileColor(props.guess1, props.targetWord, 0)}>
                <Text style={updateTextColor(props.guess1)}>
                    {(props.guessNumber === 0 && props.guess.charAt(0)) ||
                        (props.guessNumber !== 0 && props.guess1.charAt(0))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess1, props.targetWord, 1)}>
                <Text style={updateTextColor(props.guess1)}>
                    {(props.guessNumber === 0 && props.guess.charAt(1)) ||
                        (props.guessNumber !== 0 && props.guess1.charAt(1))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess1, props.targetWord, 2)}>
                <Text style={updateTextColor(props.guess1)}>
                    {(props.guessNumber === 0 && props.guess.charAt(2)) ||
                        (props.guessNumber !== 0 && props.guess1.charAt(2))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess1, props.targetWord, 3)}>
                <Text style={updateTextColor(props.guess1)}>
                    {(props.guessNumber === 0 && props.guess.charAt(3)) ||
                        (props.guessNumber !== 0 && props.guess1.charAt(3))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess1, props.targetWord, 4)}>
                <Text style={updateTextColor(props.guess1)}>
                    {(props.guessNumber === 0 && props.guess.charAt(4)) ||
                        (props.guessNumber !== 0 && props.guess1.charAt(4))}
                </Text>
            </View>

            <View style={updateTileColor(props.guess2, props.targetWord, 0)}>
                <Text style={updateTextColor(props.guess2)}>
                    {(props.guessNumber === 1 && props.guess.charAt(0)) ||
                        (props.guessNumber !== 1 && props.guess2.charAt(0))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess2, props.targetWord, 1)}>
                <Text style={updateTextColor(props.guess2)}>
                    {(props.guessNumber === 1 && props.guess.charAt(1)) ||
                        (props.guessNumber !== 1 && props.guess2.charAt(1))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess2, props.targetWord, 2)}>
                <Text style={updateTextColor(props.guess2)}>
                    {(props.guessNumber === 1 && props.guess.charAt(2)) ||
                        (props.guessNumber !== 1 && props.guess2.charAt(2))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess2, props.targetWord, 3)}>
                <Text style={updateTextColor(props.guess2)}>
                    {(props.guessNumber === 1 && props.guess.charAt(3)) ||
                        (props.guessNumber !== 1 && props.guess2.charAt(3))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess2, props.targetWord, 4)}>
                <Text style={updateTextColor(props.guess2)}>
                    {(props.guessNumber === 1 && props.guess.charAt(4)) ||
                        (props.guessNumber !== 1 && props.guess2.charAt(4))}
                </Text>
            </View>

            <View style={updateTileColor(props.guess3, props.targetWord, 0)}>
                <Text style={updateTextColor(props.guess3)}>
                    {(props.guessNumber === 2 && props.guess.charAt(0)) ||
                        (props.guessNumber !== 2 && props.guess3.charAt(0))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess3, props.targetWord, 1)}>
                <Text style={updateTextColor(props.guess3)}>
                    {(props.guessNumber === 2 && props.guess.charAt(1)) ||
                        (props.guessNumber !== 2 && props.guess3.charAt(1))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess3, props.targetWord, 2)}>
                <Text style={updateTextColor(props.guess3)}>
                    {(props.guessNumber === 2 && props.guess.charAt(2)) ||
                        (props.guessNumber !== 2 && props.guess3.charAt(2))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess3, props.targetWord, 3)}>
                <Text style={updateTextColor(props.guess3)}>
                    {(props.guessNumber === 2 && props.guess.charAt(3)) ||
                        (props.guessNumber !== 2 && props.guess3.charAt(3))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess3, props.targetWord, 4)}>
                <Text style={updateTextColor(props.guess3)}>
                    {(props.guessNumber === 2 && props.guess.charAt(4)) ||
                        (props.guessNumber !== 2 && props.guess3.charAt(4))}
                </Text>
            </View>

            <View style={updateTileColor(props.guess4, props.targetWord, 0)}>
                <Text style={updateTextColor(props.guess4)}>
                    {(props.guessNumber === 3 && props.guess.charAt(0)) ||
                        (props.guessNumber !== 3 && props.guess4.charAt(0))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess4, props.targetWord, 1)}>
                <Text style={updateTextColor(props.guess4)}>
                    {(props.guessNumber === 3 && props.guess.charAt(1)) ||
                        (props.guessNumber !== 3 && props.guess4.charAt(1))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess4, props.targetWord, 2)}>
                <Text style={updateTextColor(props.guess4)}>
                    {(props.guessNumber === 3 && props.guess.charAt(2)) ||
                        (props.guessNumber !== 3 && props.guess4.charAt(2))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess4, props.targetWord, 3)}>
                <Text style={updateTextColor(props.guess4)}>
                    {(props.guessNumber === 3 && props.guess.charAt(3)) ||
                        (props.guessNumber !== 3 && props.guess4.charAt(3))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess4, props.targetWord, 4)}>
                <Text style={updateTextColor(props.guess4)}>
                    {(props.guessNumber === 3 && props.guess.charAt(4)) ||
                        (props.guessNumber !== 3 && props.guess4.charAt(4))}
                </Text>
            </View>

            <View style={updateTileColor(props.guess5, props.targetWord, 0)}>
                <Text style={updateTextColor(props.guess5)}>
                    {(props.guessNumber === 4 && props.guess.charAt(0)) ||
                        (props.guessNumber !== 4 && props.guess5.charAt(0))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess5, props.targetWord, 1)}>
                <Text style={updateTextColor(props.guess5)}>
                    {(props.guessNumber === 4 && props.guess.charAt(1)) ||
                        (props.guessNumber !== 4 && props.guess5.charAt(1))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess5, props.targetWord, 2)}>
                <Text style={updateTextColor(props.guess5)}>
                    {(props.guessNumber === 4 && props.guess.charAt(2)) ||
                        (props.guessNumber !== 4 && props.guess5.charAt(2))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess5, props.targetWord, 3)}>
                <Text style={updateTextColor(props.guess5)}>
                    {(props.guessNumber === 4 && props.guess.charAt(3)) ||
                        (props.guessNumber !== 4 && props.guess5.charAt(3))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess5, props.targetWord, 4)}>
                <Text style={updateTextColor(props.guess5)}>
                    {(props.guessNumber === 4 && props.guess.charAt(4)) ||
                        (props.guessNumber !== 4 && props.guess5.charAt(4))}
                </Text>
            </View>

            <View style={updateTileColor(props.guess6, props.targetWord, 0)}>
                <Text style={updateTextColor(props.guess6)}>
                    {(props.guessNumber === 5 && props.guess.charAt(0)) ||
                        (props.guessNumber !== 5 && props.guess6.charAt(0))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess6, props.targetWord, 1)}>
                <Text style={updateTextColor(props.guess6)}>
                    {(props.guessNumber === 5 && props.guess.charAt(1)) ||
                        (props.guessNumber !== 5 && props.guess6.charAt(1))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess6, props.targetWord, 2)}>
                <Text style={updateTextColor(props.guess6)}>
                    {(props.guessNumber === 5 && props.guess.charAt(2)) ||
                        (props.guessNumber !== 5 && props.guess6.charAt(2))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess6, props.targetWord, 3)}>
                <Text style={updateTextColor(props.guess6)}>
                    {(props.guessNumber === 5 && props.guess.charAt(3)) ||
                        (props.guessNumber !== 5 && props.guess6.charAt(3))}
                </Text>
            </View>
            <View style={updateTileColor(props.guess6, props.targetWord, 4)}>
                <Text style={updateTextColor(props.guess6)}>
                    {(props.guessNumber === 5 && props.guess.charAt(4)) ||
                        (props.guessNumber !== 5 && props.guess6.charAt(4))}
                </Text>
            </View>
        </View>
    );
};

export const styles = StyleSheet.create({
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
});

export default GuessGrid;
