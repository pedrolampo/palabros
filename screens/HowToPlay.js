import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

export default function HowToPlay({ renderGame }) {
    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => renderGame('menu')}>
                    <Text>VOLVER AL MENÚ</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>JUEGO DIARIO</Text>
                    <Text style={styles.text}>Adivina la palabra del día!</Text>
                    <Text style={styles.text}>
                        Cada día habrá una palabra diferente para adivinar.
                    </Text>
                </View>
                <View>
                    <Text style={styles.title}>JUEGO NORMAL</Text>
                    <Text style={styles.text}>Adivina la palabra clave!</Text>
                    <Text style={styles.text}>
                        En este modo puedes jugar todas las veces que quieras!
                    </Text>
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Código de Colores</Text>
                </View>
                <View style={styles.colorInstructions}>
                    <Text style={styles.text}>
                        Si la letra tiene un fondo negro, significa que no
                        pertenece a la palabra clave.
                    </Text>
                    <View style={styles.black}>
                        <Text style={styles.exampleText}>L</Text>
                    </View>
                </View>
                <View style={styles.colorInstructions}>
                    <Text style={styles.text}>
                        Si la letra tiene un fondo amarillo, significa que
                        pertenece a la palabra clave, pero en otra posición.
                    </Text>
                    <View style={styles.yellow}>
                        <Text style={styles.exampleText}>L</Text>
                    </View>
                </View>
                <View style={styles.colorInstructions}>
                    <Text style={styles.text}>
                        Si la letra tiene un fondo verde, significa que está en
                        su lugar correcto!
                    </Text>
                    <View style={styles.green}>
                        <Text style={styles.exampleText}>L</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        backgroundColor: 'hsla(109, 41%, 23%, 1)',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    header: {
        backgroundColor: Colors.correct,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 100,
        padding: 15,
    },
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 15,
        color: 'black',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        width: 280,
        paddingRight: 10,
        color: 'white',
    },
    colorInstructions: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
    black: {
        width: 40,
        height: 40,
        backgroundColor: Colors.wrong,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    yellow: {
        width: 40,
        height: 40,
        backgroundColor: Colors.wrongLocation,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    green: {
        width: 40,
        height: 40,
        backgroundColor: Colors.correct,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    exampleText: {
        fontSize: 25,
        color: 'black',
    },
});
