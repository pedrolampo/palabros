import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../constants/colors';

export default function HowToPlay({ renderGame }) {
    const { width } = useWindowDimensions();

    return (
        <LinearGradient
            colors={['#39DA80', '#6bdbad', '#48EBE5']}
            style={styles.screen}
        >
            <View style={styles.container}>
                <View>
                    <Text style={width < 380 ? styles.titleS : styles.titleL}>
                        Juego Diario
                    </Text>
                    <Text style={width < 380 ? styles.textS : styles.textL}>
                        Adivina la palabra del día!
                    </Text>
                    <Text style={width < 380 ? styles.textS : styles.textL}>
                        Cada día habrá una palabra diferente para adivinar.
                    </Text>
                </View>
                <View>
                    <Text style={width < 380 ? styles.titleS : styles.titleL}>
                        Juego Normal
                    </Text>
                    <Text style={width < 380 ? styles.textS : styles.textL}>
                        Adivina la palabra clave!
                    </Text>
                    <Text style={width < 380 ? styles.textS : styles.textL}>
                        En este modo puedes jugar todas las veces que quieras!
                    </Text>
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={width < 380 ? styles.titleS : styles.titleL}>
                        Código de Colores
                    </Text>
                </View>
                <View style={styles.colorInstructions}>
                    <Text style={width < 380 ? styles.textS : styles.textL}>
                        Si la letra tiene un fondo negro, significa que no
                        pertenece a la palabra clave.
                    </Text>
                    <View
                        style={[
                            width < 380 ? styles.squareS : styles.squareL,
                            styles.black,
                        ]}
                    >
                        <Text
                            style={
                                width < 380
                                    ? styles.exampleTextS
                                    : styles.exampleTextL
                            }
                        >
                            L
                        </Text>
                    </View>
                </View>
                <View style={styles.colorInstructions}>
                    <Text style={width < 380 ? styles.textS : styles.textL}>
                        Si la letra tiene un fondo amarillo, significa que
                        pertenece a la palabra clave, pero en otra posición.
                    </Text>
                    <View
                        style={[
                            width < 380 ? styles.squareS : styles.squareL,
                            styles.yellow,
                        ]}
                    >
                        <Text
                            style={
                                width < 380
                                    ? styles.exampleTextS
                                    : styles.exampleTextL
                            }
                        >
                            L
                        </Text>
                    </View>
                </View>
                <View style={styles.colorInstructions}>
                    <Text style={width < 380 ? styles.textS : styles.textL}>
                        Si la letra tiene un fondo verde, significa que está en
                        su lugar correcto!
                    </Text>
                    <View
                        style={[
                            width < 380 ? styles.squareS : styles.squareL,
                            styles.green,
                        ]}
                    >
                        <Text
                            style={
                                width < 380
                                    ? styles.exampleTextS
                                    : styles.exampleTextL
                            }
                        >
                            L
                        </Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                activeOpacity={0.75}
                style={width < 380 ? styles.buttonS : styles.buttonL}
                onPress={() => renderGame('menu')}
            >
                <Text>VOLVER AL MENÚ</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        backgroundColor: 'hsl(109, 45%, 23%)',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    buttonL: {
        backgroundColor: Colors.buttonBackground,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 8,
        padding: 15,
    },
    buttonS: {
        backgroundColor: Colors.buttonBackground,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
    },
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleL: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 15,
        color: 'black',
        fontFamily: 'MontserratMedium',
    },
    titleS: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 8,
        color: 'black',
        fontFamily: 'MontserratMedium',
    },
    textL: {
        fontSize: 16,
        textAlign: 'center',
        width: 280,
        paddingRight: 10,
        color: '#343838',
        fontFamily: 'MontserratMedium',
    },
    textS: {
        fontSize: 12,
        textAlign: 'center',
        width: 280,
        paddingRight: 8,
        color: '#343838',
        fontFamily: 'MontserratMedium',
    },
    colorInstructions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
    squareL: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    squareS: {
        width: 34,
        height: 34,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    black: {
        backgroundColor: Colors.wrong,
    },
    yellow: {
        backgroundColor: Colors.wrongLocation,
    },
    green: {
        backgroundColor: Colors.correct,
    },
    exampleTextL: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'MontserratMedium',
    },
    exampleTextS: {
        fontSize: 15,
        color: 'white',
        fontFamily: 'MontserratMedium',
    },
});
