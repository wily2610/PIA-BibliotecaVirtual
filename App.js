import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavegacion from './src/Navegacion/AppNavegacion';

export default function App() {
    return (
        <NavigationContainer>
            <AppNavegacion />
        </NavigationContainer>
    );
}


