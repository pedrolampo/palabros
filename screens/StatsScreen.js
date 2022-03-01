import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    useWindowDimensions,
} from 'react-native';

import { fetchStats } from '../functions/fetchStats';
import { LinearGradient } from 'expo-linear-gradient';

export default function Stats({ renderGame, stats }) {
    const { width } = useWindowDimensions();
    fetchStats();

    return (
        <LinearGradient
            colors={['#39DA80', '#6bdbad', '#48EBE5']}
            style={styles.screen}
        >
            <Text style={styles.title}>Estadísticas</Text>
            <View style={styles.mainContent}>
                <View style={styles.statsRow}>
                    <View style={styles.statsContainer}>
                        <Text style={styles.statNumber}>
                            {stats.current.played ? stats.current.played : 0}
                        </Text>
                        <Text style={styles.statTitle}>Nº Jugados</Text>
                    </View>
                    <View style={styles.statsContainer}>
                        <Text style={styles.statNumber}>
                            {(
                                (stats.current.wins / stats.current.played) *
                                100
                            ).toFixed(2)}
                            %
                        </Text>
                        <Text style={styles.statTitle}>% Victorias</Text>
                    </View>
                </View>
                <View style={styles.statsRow}>
                    <View style={styles.statsContainer}>
                        <Text style={styles.statNumber}>
                            {stats.current.streak ? stats.current.streak : 0}
                        </Text>
                        <Text style={styles.statTitle}>Racha Actual</Text>
                    </View>
                    <View style={styles.statsContainer}>
                        <Text style={styles.statNumber}>
                            {stats.current.maxStreak
                                ? stats.current.maxStreak
                                : 0}
                        </Text>
                        <Text style={styles.statTitle}>Mayor Racha</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                style={width < 380 ? styles.backBtnS : styles.backBtnL}
                onPress={() => renderGame('menu')}
            >
                <Text style={styles.btnText}>Volver al Menú</Text>
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
    title: {
        fontFamily: 'MontserratMedium',
        fontSize: 45,
    },
    mainContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    statsContainer: {
        marginVertical: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    statNumber: {
        fontFamily: 'MontserratMedium',
        fontSize: 30,
    },
    statTitle: {
        fontFamily: 'MontserratMedium',
        fontSize: 20,
    },
    backBtnL: {
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 40,
        backgroundColor: '#b0e9f7',
    },
    backBtnS: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    btnText: {
        fontFamily: 'MontserratBold',
        fontSize: 15,
    },
});