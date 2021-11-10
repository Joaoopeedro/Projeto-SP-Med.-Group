import { Component } from "react";
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import axios from 'axios';
// import { Link } from 'react-router-dom';


import logo from '../../assets/img/Logo_2-removebg-preview.png'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            erroMensagem: '',
            isLoading: false,
        };
    }

    efetualogin = (log) => {
        log.preventDefault();

        this.setState({ erroMensagem: '', isLoading: true });

        axios.post('http://localhost:5000/api/login', {
            email: this.state.email,
            senha: this.state.senha,

        }).then((resposta) => {
            // verifico se o status code dessa resposta é igual a 200
            if (resposta.status === 200) {

                localStorage.setItem('usuario-login', resposta.data.token);

                this.setState({ isLoading: false });


                let base64 = localStorage.getItem('usuario-login').split('.')[1];

                console.log(base64);

                console.log(this.props);
                if (parseJwt().role === '1') {
                    this.props.history.push('/tiposeventos');
                    console.log('estou logado: ' + usuarioAutenticado());
                } else {
                    this.props.history.push('/meusEventos');
                }
            }
        })
            .catch(() => {
                // define o valor do state erroMensagem com uma mensagem personalizada
                this.setState({
                    erroMensagem: 'E-mail e/ou senha inválidos!',
                    isLoading: false,
                });
            });
    }

    atualizaStateCampo = (campo) => {

        this.setState({ [campo.target.name]: campo.target.value });
    };

    render() {
        return (
            <div>
                <section class="container-login flex">
                    <div class="img__login"><div class="img__overlay"></div></div>

                    <div class="item__login">
                        <div class="row">
                            <div class="item">
                                <img src={logo} class="icone__login" alt="logo do SpMedical" />
                            </div>
                            <div class="item" id="item__title">
                                <p class="text__login" id="item__description">
                                    Bem-vindo! Faça login para acessar sua conta.
                                </p>
                            </div>
                            <form>
                                <div class="item">
                                    <input
                                        class="input__login"
                                        placeholder="E-mail"
                                        type="text"
                                        name="email"
                                        id="login__email"
                                        value={this.state.email}
                                        onChange={this.atualizaStateCampo}
                                    />
                                </div>
                                <div class="item">
                                    <input
                                        class="input__login"
                                        placeholder="Senha"
                                        type="password"
                                        name="senha"
                                        id="login__senha"
                                        value={this.state.senha}
                                        onChange={this.atualizaStateCampo}
                                    />
                                </div>
                                <div class="item">
                                    {
                                        this.state.isLoading === true && (
                                            <button
                                                type="submit"
                                                disabled
                                                className="btn btn__login"
                                                id="btn__login"
                                            >
                                                Loading...
                                            </button>
                                        )

                                    }
                                    {
                                        this.state.isLoading === false && (
                                            <button
                                                className="btn btn__login"
                                                id="btn__login"
                                                type="submit"
                                                disabled={
                                                    this.state.email === '' || this.state.senha === ''
                                                        ? 'none'
                                                        : ''
                                                }
                                            >
                                                Login
                                            </button>
                                        )
                                    }


                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}