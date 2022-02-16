import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GuessGrid = (props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 0 && props.guess.charAt(0)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 0 && props.guess.charAt(1)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 0 && props.guess.charAt(2)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 0 && props.guess.charAt(3)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 0 && props.guess.charAt(4)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 1 && props.guess.charAt(0)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 1 && props.guess.charAt(1)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 1 && props.guess.charAt(2)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 1 && props.guess.charAt(3)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 1 && props.guess.charAt(4)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 2 && props.guess.charAt(0)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 2 && props.guess.charAt(1)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 2 && props.guess.charAt(2)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 2 && props.guess.charAt(3)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 2 && props.guess.charAt(4)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 3 && props.guess.charAt(0)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 3 && props.guess.charAt(1)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 3 && props.guess.charAt(2)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 3 && props.guess.charAt(3)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 3 && props.guess.charAt(4)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 4 && props.guess.charAt(0)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 4 && props.guess.charAt(1)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 4 && props.guess.charAt(2)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 4 && props.guess.charAt(3)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 4 && props.guess.charAt(4)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 5 && props.guess.charAt(0)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 5 && props.guess.charAt(1)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 5 && props.guess.charAt(2)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 5 && props.guess.charAt(3)}
                </Text>
            </View>
            <View style={styles.tile}>
                <Text style={styles.guessLetter}>
                    {props.guessNumber === 5 && props.guess.charAt(4)}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default GuessGrid;
