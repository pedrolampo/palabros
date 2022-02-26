import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    useWindowDimensions,
} from 'react-native';

const Header = ({ renderGame, restart }) => {
    const { width } = useWindowDimensions();

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => renderGame('menu')}>
                <Text style={width < 380 ? styles.textS : styles.textL}>
                    Menú
                </Text>
            </TouchableOpacity>
            <Text style={width < 380 ? styles.titleS : styles.titleL}>
                Palabros
            </Text>
            <TouchableOpacity onPress={restart}>
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
});

export default Header;
