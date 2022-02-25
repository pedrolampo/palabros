import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Linking,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MainScreen({ renderGame }) {
    return (
        <LinearGradient
            colors={['#296636', '#419152', '#001c01']}
            style={styles.container}
        >
            <Text style={styles.title}>PALABROS</Text>
            <View style={styles.menu}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.menuButtons}
                    onPress={() => renderGame('normal')}
                >
                    <Text style={styles.menuText}>JUEGO NORMAL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.menuButtons}
                    onPress={() => renderGame('daily')}
                >
                    <Text style={styles.menuText}>JUEGO DIARIO</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.menuButtons}
                    onPress={() => renderGame('instructions')}
                >
                    <Text style={styles.menuText}>CÓMO JUGAR</Text>
                </TouchableOpacity>
            </View>
            <Text
                onPress={() => Linking.openURL('https://github.com/pedrolampo')}
                style={styles.footer}
            >
                Made by Pedrolampo
            </Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 80,
        backgroundColor: '#296636',
    },
    title: {
        fontSize: 50,
    },
    menu: {
        marginTop: 30,
    },
    menuButtons: {
        padding: 8,
        paddingHorizontal: 25,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'white',
    },
    menuText: {
        fontSize: 25,
        textAlign: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: 10,
        color: 'white',
    },
});
