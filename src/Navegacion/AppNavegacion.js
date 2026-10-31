import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PantallaDeInicio from '../Pantallas/Inicio/PantallaDeInicio';
import PantallaAgregar from '../Pantallas/AgregarLibro/PantallaAgregar';
import VentanaLibreria from '../Pantallas/Libreria/VentanaLibreria';
import PantallaHistorial from '../Pantallas/Historial/PantallaHistorial';

const Tab = createBottomTabNavigator();

export default function AppNavegacion() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={PantallaDeInicio} />
            <Tab.Screen name="Agregar" component={PantallaAgregar} />
            <Tab.Screen name="Libreria" component={VentanaLibreria} />
            <Tab.Screen name="Historial" component={PantallaHistorial} />
        </Tab.Navigator>
    );
}

