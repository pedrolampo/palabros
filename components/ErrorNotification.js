import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const ErrorNotification = ({
    text,
    errorNotification,
    setErrorNotification,
}) => {
    return (
        <View style={errorNotification ? styles.screen : styles.hide}>
            <View style={errorNotification ? styles.container : styles.hide}>
                <Text style={styles.text}>{text}</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => setErrorNotification(false)}
                    activeOpacity={0.7}
                >
                    <Text style={styles.btnText}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    container: {
        width: 290,
        height: 150,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.keys,
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    btn: {
        backgroundColor: Colors.keys,
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    hide: {
        display: 'none',
    },
});

export default ErrorNotification;
