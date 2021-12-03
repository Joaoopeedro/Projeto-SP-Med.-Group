import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    TextInput,
    Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';


import Paciente from './paciente'
import Perfil from './perfil'

function CustomDrawerContent({ navigation }) {
    return (
        <View style={styles.drawer}>
            <Text style={styles.text}>Inicio</Text>
            <Text style={styles.text}>Consulta</Text>
            <Text style={styles.text}>Contato</Text>
            <Text style={styles.text}>Sair</Text>
        </View>
    )

}

const Drawer = createDrawerNavigator();
export default class Medico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaConsultas: [],
            idConsulta: '',
            nomePaciente: '',
            dataConsulta: '',
            idade: '',
            descricao: '',
            situacao: '',
            erroMensagem: '',
            idConsultaAlterado: 0,
            isLoading: false,
            editando: false,
            keyAtual: 0
        };
    }

    
    if (condition) {
        
    }


    render() {
        return (
            <View style={styles.bory}>
                <View style={styles.header}>
                    <Image
                        source={require('../../assets/img/Logo.png')}
                        style={styles.mainImgheader}
                    />
                    <Drawer.Navigator
                        initialRouteName="Medico"
                        drawerContent={CustomDrawerContent}
                        screenOptions={{
                            drawerHideStatusBarOnOpen: true,
                            drawerStatusBarAnimation: 'fade',
                            drawerStyle: {
                                backgroundColor: "#285EBD",
                                width: 240,
                            },
                            drawerContentStyle: {
                                alignContent: "center"
                            },
                            drawerLabelStyle: {
                                textAlign: 'center',
                                color: '#fff'
                            }

                        }}
                    >

                        <Drawer.Screen name="Medico" component={Paciente} />



                    </Drawer.Navigator>



                </View>


            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        // backgroundColor: 'blue',

        height: '100%',
        justifyContent: 'center'
    },
    mainImgheader: {
        width: 58,
        height: 55,
        marginLeft: 25
    },
    drawer: {
        height: "30%",
        justifyContent: 'space-evenly',
        alignItems: "center",

    },
    text: {
        fontFamily : "OpenSans-SemiBold",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        lineHeight: 20,
        color:"#fff"


    }
    

})