import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { Component } from "react";
import axios from "axios";

import Footer from "../../components/footer/footer";
import logo from '../../assets/img/Logo_2-removebg-preview.png'

class Localizacao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaLocalizacoes: [],
            showingInfoWindow: false,
            marcadorAtivo: {},
            local: {},
        }
    };
    BuscarLocalizacoes = () => {
        axios("http://localhost:5000/api/Localizacoes")
            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({ listaLocalizacoes: resposta.data });
                }
            }).catch(erro => console.log(erro))
    }

    cliqueMarcador = (props, marker, e) =>
        this.setState({
            local: props,
            marcadorAtivo: marker,
            showingInfoWindow: true
        });

    componentDidMount() {
        this.BuscarLocalizacoes()
    }

    render() {
        return (
            <div>
                <header className=" container header_Home" id="header">
                    <div className=" div_header container">
                        <div>
                            <a href="#header">
                                <img className="img_header" src={logo} alt="" />
                            </a>
                        </div>
                        <div className="org_heade_adm">
                            <a href="/">Home</a>
                            <a href="/paciente">Consultas</a>
                            <a href="/">Agendar</a>
                            <a href="/paciente">Paciente</a>


                        </div>
                    </div>
                </header>
                <main>
                    <Map google={this.props.google} zoom={12}
                        initialCenter={{
                            lat: -23.53620139908343,
                            lng: -46.64622506172682
                        }}>

                        {

                            this.state.listaLocalizacoes.map((item) => {
                                // console.log(item);

                                return (
                                    <Marker onClick={this.cliqueMarcador}
                                        id={item.id}
                                        title={item.id}
                                        name={item.latitude}
                                        position={{ lat: item.latitude, lng: item.longitude }} />
                                )
                            })
                        }

                        <InfoWindow
                            marker={this.state.marcadorAtivo}
                            visible={this.state.showingInfoWindow}>
                            <div>
                                <h1 style={{ fontSize: 14, color: "#247DBD" }}>{this.state.local.name},{this.state.longitude}</h1>
                            </div>
                        </InfoWindow>
                        

                    </Map>
                </main>
                <Footer />
            </div>
        )
    }

}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyDBAKlR7YNlROT-q03Ra_Qpl_n_NiQRmdQ")
})(Localizacao)