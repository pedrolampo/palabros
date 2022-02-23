import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { SizeContext } from '../App';

const Header = ({ renderGame, restart }) => {
    const { width } = useContext(SizeContext);

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => renderGame('menu')}>
                <Text style={width < 380 ? styles.textS : styles.textL}>
                    MENU
                </Text>
            </TouchableOpacity>
            <Text style={width < 380 ? styles.titleS : styles.titleL}>
                PALABROS
            </Text>
            <TouchableOpacity onPress={restart}>
                <Text style={width < 380 ? styles.textS : styles.textL}>
                    RESET
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        top: 50,
    },
    textL: {
        color: 'black',
        fontSize: 20,
    },
    textS: {
        color: 'black',
        fontSize: 15,
    },
    titleL: {
        fontSize: 30,
        color: 'black',
    },
    titleS: {
        fontSize: 25,
        color: 'black',
    },
});

export default Header;
