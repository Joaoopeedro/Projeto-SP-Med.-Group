import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    TextInput,
    Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import api from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { color } from 'react-native-reanimated';

export default class MedicoTela extends Component {
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


    buscarConsultas = async () => {
        const token = await AsyncStorage.getItem('userToken')

        console.warn(token)

        const resposta = await api.get('/Consultas/Consulta',
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            },
        );


        if (resposta.status == 200) {

            const dadosDaApi = resposta.data;

            this.setState({ listaConsultas: dadosDaApi })
        }



    }

    componentDidMount() {
        this.buscarConsultas();
    }


    render() {
        return (
            <View style={styles.body}>
                {/* <View style={styles.header}>
                    <Image
                        source={require('../../assets/img/Logo.png')}
                        style={styles.mainImgheader}
                    />

                    <Image
                        source={require('../../assets/img/menu.png')}
                        style={styles.menuHanburger}

                    />
                </View> */}
                <ImageBackground
                    source={require('../../assets/img/paciente.jpg')}
                    style={StyleSheet.absoluteFillObject}
                    style={styles.mainImagem}>
                    <View style={styles.overlay} />
                    <View style={styles.titulo}>
                        <Text style={styles.Titulo1}>Consultas</Text>
                    </View>
                    <View style={styles.mainBody}>
                        <FlatList
                            contentContainerStyle={styles.mainBodyContent}
                            data={this.state.listaConsultas}
                            keyExtractor={item => item.idConsulta}
                            renderItem={this.renderItem}

                        />
                    </View>

                </ImageBackground>
            </View>
        )
    }

    renderItem = ({ item }) => (
        <View style={styles.organizacao}>
            <View style={styles.flatItemRow}>
                <View style={styles.flatItemContentRow}>
                    <Text style={styles.item}>Médico:</Text>
                    <Text style={styles.flatItemContent}>{item.idMedicoNavigation.nomeMedico}</Text>

                </View>

                <View style={styles.flatItemContentRow}>
                    <Text style={styles.item}>Data da Consulta:</Text>
                    <Text style={styles.flatItemContent}>{Intl.DateTimeFormat("pt-BR", {
                        year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'
                    }).format(new Date(item.dataConsulta))}</Text>
                </View>

                

                <View style={styles.flatItemContentRow}>
                    <Text style={styles.item}>Situação:</Text>
                    <Text style={styles.flatItemContent}>{item.idSituacaoNavigation.situacao1}</Text>
                </View>

                <View style={styles.flatItemContentRow}>
                    <Text style={styles.item}>Descrição: </Text>
                    <Text style={styles.flatItemContent}>{item.descricao} </Text>


                </View>
            </View>
            <View style={styles.barra} />


        </View>
    )
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        // alignItems: 'center'
    },
    header: {
        // backgroundColor: 'blue',

        height: '100%',
        justifyContent: 'center',
        flexDirection: 'row'

    },
    mainImgheader: {
        width: 58,
        height: 55,
        marginLeft: 25
    },
    menuHanburger: {
        width: 58,
        height: 55,
    },

    mainImagem: {
        flex: 1,

    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(11,160,254,0.26)'
    },
    titulo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 28,
        marginBottom: 28
    },
    Titulo1: {
        fontFamily: "OpenSans-Bold",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 30,
        lineHeight: 34,
        color: "#fff",

    },
    mainBody: {
        flex: 4,
        alignItems: 'center'
    },
    flatItemRow: {
        borderRadius: 20,
        width: 380,
        // height: 140,
        borderWidth: 1,
        padding: 10,
        marginBottom: 30,
        marginTop: 30,
        backgroundColor: '#fff',


    },
    flatItemContentRow: {
        flexDirection: 'row'
    },
    item: {
        fontFamily: "OpenSans-Bold",
        fontSize: 18,
        lineHeight: 20,
        marginBottom: 6,
        color: 'black'
    },
    flatItemContent: {
        fontFamily: "OpenSans-SemiBold",
        fontSize: 18,
        lineHeight: 20,
        marginLeft: 2

    },
    iconeDescricao: {
        height: 20,
        width: 20
    },
    organizacao: {
        flex: 4,
        alignItems: 'center'
    },
    barra: {
        backgroundColor: '#000',
        width: 280,
        borderWidth: 2,


    }
})