import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    useWindowDimensions,
} from 'react-native';

import Colors from '../constants/colors';

const Header = ({ renderGame, restart, title }) => {
    const { width } = useWindowDimensions();

    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => renderGame('menu')}
            >
                <Text style={width < 380 ? styles.textS : styles.textL}>
                    Menú
                </Text>
            </TouchableOpacity>
            <Text style={width < 380 ? styles.titleS : styles.titleL}>
                {title}
            </Text>
            <TouchableOpacity style={styles.button} onPress={restart}>
                <Text style={width < 380 ? styles.textS : styles.textL}>
                    Reset
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
        paddingHorizontal: 10,
    },
    textL: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'MontserratMedium',
    },
    textS: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'MontserratMedium',
    },
    titleL: {
        fontSize: 30,
        color: 'black',
        width: 200,
        textAlign: 'center',
        fontFamily: 'MontserratMedium',
    },
    titleS: {
        fontSize: 20,
        color: 'black',
        width: 200,
        textAlign: 'center',
        fontFamily: 'MontserratMedium',
    },
    button: {
        backgroundColor: Colors.buttonBackground,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
    },
});

export default Header;
