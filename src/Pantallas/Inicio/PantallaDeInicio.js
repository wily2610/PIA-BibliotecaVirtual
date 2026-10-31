import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function PantallaDeInicio() {
    return (
        <View style={styles.container}>
            <Text>Pantalla De Inicio</Text>
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