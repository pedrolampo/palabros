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
            colors={['#39DA80', '#6bdbad', '#48EBE5']}
            style={styles.container}
        >
            <Text style={styles.title}>Palabros</Text>
            <View style={styles.menu}>
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.menuButtons}
                    onPress={() => renderGame('normal')}
                >
                    <Text style={styles.menuText}>Juego Normal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.menuButtons}
                    onPress={() => renderGame('daily')}
                >
                    <Text style={styles.menuText}>Juego Diario</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.menuButtons}
                    onPress={() => renderGame('instructions')}
                >
                    <Text style={styles.menuText}>Cómo jugar</Text>
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
        alignItems: 'center',
        paddingVertical: 80,
        backgroundColor: '#296636',
    },
    title: {
        fontSize: 50,
        color: '#313333',
        fontFamily: 'Roboto',
    },
    menu: {
        marginTop: 100,
    },
    menuButtons: {
        padding: 8,
        paddingHorizontal: 50,
        marginVertical: 10,
        borderWidth: 0.75,
        borderColor: 'grey',
        borderRadius: 10,
        backgroundColor: '#b0e9f7',
    },
    menuText: {
        fontSize: 25,
        textAlign: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: 10,
        color: '#313333',
    },
});
