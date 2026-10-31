import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function VentanaLibreria() {
    return (
        <View style={styles.container}>
            <Text>Libreria</Text>
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