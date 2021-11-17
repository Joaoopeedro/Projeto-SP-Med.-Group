import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from './services/auth';
import './index.css';

import Home from './page/home/App';
import Login from './page/login/login';
import adm_listar from './page/adm/adm_listar';
import adm_usuario from './page/adm/adm_usuario';
import medico from './page/medico/medico';
import paciente from './page/paciente/paciente';
import NotFound from './page/notFound/notFound';


import reportWebVitals from './reportWebVitals';

const PermissaoAdm = ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJwt().role === '1' ? (
        // operador spread
        <Component {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);
const PermissaoMedico= ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJwt().role === '3' ? (
        // operador spread
        <Component {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);
const PermissaoPaciente = ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJwt().role === '2' ? (
        // operador spread
        <Component {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} /> {/* Home */}
        <Route path="/login" component={Login} /> {/* Login */}
        <PermissaoAdm path="/admListar" component={adm_listar} /> {/* Login */}
        <PermissaoAdm path="/admusuario" component={adm_usuario} /> {/* Login */}
        <PermissaoMedico path="/medico" component={medico} /> {/* Login */}
        <PermissaoPaciente path="/paciente" component={paciente} /> {/* Login */}
        <Route path="/notFound" component={NotFound} /> {/* Not Found */}
        <Redirect to="/notFound" /> 
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
