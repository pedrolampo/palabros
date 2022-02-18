import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const ErrorNotification = ({
    text,
    errorNotification,
    setErrorNotification,
}) => {
    return (
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
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
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
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 10,
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
