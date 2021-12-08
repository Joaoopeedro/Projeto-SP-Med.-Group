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
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';


import AdmTela from '../component/admTela'


function CustomDrawerContent({ navigation }) {
    return (
        <View style={styles.drawer}>
            <Text style={styles.text1}>Administrador</Text>

            <Text style={styles.text}>Inicio</Text>
            <Text style={styles.text}>Consulta</Text>
            <Text style={styles.text}>Contato</Text>
            <TouchableOpacity
                onPress={ async() => {
                    await AsyncStorage.removeItem('userToken');
                    navigation.navigate('Login');
                }}
            >
                <Text style={styles.text} >Logout</Text>
            </TouchableOpacity>

        </View>
    )

}

const Drawer = createDrawerNavigator();

export default class Adm extends Component {
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





    render() {
        return (
            <View style={styles.bory}>
                <View style={styles.header}>
                    <View style={styles.org_header}>
                        <Image
                            source={require('../../assets/img/Logo.png')}
                            style={styles.mainImgheader}

                        />

                        <TouchableOpacity
                            onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
                        >
                            <Image
                                source={require('../../assets/img/menu.png')}
                                style={styles.menu}
                            />
                        </TouchableOpacity>

                    </View>


                    <Drawer.Navigator
                        initialRouteName="Medico"
                        drawerContent={CustomDrawerContent}
                        
                        screenOptions={{
                            drawerHideStatusBarOnOpen: false,
                            drawerStatusBarAnimation: 'fade',
                            drawerPosition: 'right',
                            headerTransparent: true,
                            headerShown: false,

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
                            },

                        }}
                    >

                        <Drawer.Screen name="Medico" component={AdmTela} />



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
        justifyContent: 'center',


    },
    org_header: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mainImgheader: {
        width: 58,
        height: 55,
        marginLeft: 25
    },
    drawer: {
        height: "50%",
        justifyContent: 'space-evenly',
        alignItems: "center",

    },
    text: {
        fontFamily: "OpenSans-SemiBold",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        lineHeight: 20,
        color: "#fff"


    },
    text1: {
        fontFamily: "OpenSans-Bold",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        lineHeight: 20,
        color: "#fff",
        marginBottom: 13

    },
    menu: {
        width: 50,
        height: 40,
        marginLeft: 25,


    }



})