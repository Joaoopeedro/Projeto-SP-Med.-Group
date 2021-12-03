import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import Medico from './medico';
import Paciente from './paciente'
import Perfil from './perfil'

const Drawer = createDrawerNavigator();

export default function Main() {
    return (
        <Drawer.Navigator
            initialRouteName="Perfil"
            screenOptions={{
                drawerHideStatusBarOnOpen: true,
                drawerStatusBarAnimation: 'fade',
                drawerStyle: {
                    backgroundColor: "#1D1136",
                    width: 240,
                },
                drawerContentStyle: {
                    alignContent: "center"
                },
                drawerLabelStyle: {
                    textAlign: 'center',
                    color: '#FFF'
                }

            }}
        >
            <Drawer.Screen name="Medico" component={Medico} />
            <Drawer.Screen name="Paciente" component={Paciente} />
            <Drawer.Screen name="Perfil" component={Perfil} />
        </Drawer.Navigator>
    )
}