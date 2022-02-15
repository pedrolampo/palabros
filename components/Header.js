import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Wordle Clone</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        top: 30,
    },
    text: {
        color: 'white',
        fontSize: 30,
    },
});

export default Header;