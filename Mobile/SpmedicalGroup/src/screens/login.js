import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";

import api from '../services/api';
import { parse } from '@babel/core';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'roberto.possarle@spmedicalgroup.com.br',
            senha: 'roberto123',
        };
    }

    realizarLogin = async () => {
        
    
        const resposta = await api.post('/Login/login', {
          email: this.state.email, 
          senha: this.state.senha, 
        });
    
        const token = resposta.data.token;
        await AsyncStorage.setItem('userToken', token);
    
        
        if (resposta.status == 200) {
           var decoded = jwt_decode(token)

           if (decoded.role == 2) {
            this.props.navigation.navigate('Paciente');
               
           }
           if (decoded.role == 3) {
            this.props.navigation.navigate('Medico');
        
           }
        }
        
            
    }

    render() {
        return (
            <ImageBackground
                source={require('../../assets/img/bem_vindo.jpg')}
                style={StyleSheet.absoluteFillObject}
                style={styles.mainImagem}>
                <View style={styles.overlay} />
                <View style={styles.main}>
                    <Image
                        source={require('../../assets/img/Logo.png')}
                        style={styles.mainImgLogin}
                    />
                    <View style={styles.Inputs}>
                        <TextInput
                            style={styles.inputLogin}
                            placeholder="E-mail"
                            placeholderTextColor="rgba(0, 0, 0, 0.53);"
                            keyboardType="email-address"
                            onChangeText={email => this.setState({ email })}
                        />

                        <TextInput
                            style={styles.inputLogin}
                            placeholder="Senha"
                            placeholderTextColor="rgba(0, 0, 0, 0.53);"
                            keyboardType="default"
                            secureTextEntry={true}
                            onChangeText={senha => this.setState({ senha })}
                        />
                    </View>


                    <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={this.realizarLogin}>
                        <Text style={styles.btnLoginText}>Logar</Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>
        )
    }


}
const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(11,160,254,0.20)',
    },
    mainImagem:{
        height:"100%",
        justifyContent:"center"
    },
    main: {
        height:"70%",
        justifyContent: "space-evenly",
        alignItems: "center"


    },
    Inputs:{
        // height:"20%"
        marginTop:20,
        
    },
    mainImgLogin: {
        width: 134,
        height: 130,
        tintColor: "#fff"
    },
    inputLogin:{
        width: 236,
        height: 40,
        backgroundColor:"#fff" ,
        marginBottom:37,
        borderRadius:15, 
        paddingLeft:10    
    },
    btnLogin:{
        width: 152,
        height: 42,
        backgroundColor:"#108EE9",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    btnLoginText:{
        color:"#fff",
        fontSize:20,
        lineHeight:27,
        fontFamily : "OpenSans-SemiBold"
        
    }

    


});
