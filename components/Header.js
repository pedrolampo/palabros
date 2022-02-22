import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Text style={styles.text}>Menu</Text>
            </TouchableOpacity>
            <Text style={styles.title}>PALABROS</Text>
            <TouchableOpacity>
                <Text style={styles.text}>Reset</Text>
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
    text: {
        color: 'black',
        fontSize: 20,
    },
    title: {
        fontSize: 30,
        color: 'black',
    },
});

export default Header;
