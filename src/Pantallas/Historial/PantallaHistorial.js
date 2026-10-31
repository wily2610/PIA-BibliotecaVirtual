import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function PantallaHistorial() {
    return (
        <View style={styles.container}>
            <Text>Pantalla De Historial</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});