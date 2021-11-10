import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  // Redirect,
  Switch,
} from 'react-router-dom';
import './index.css';

import Home from './page/home/App';
import Login from './page/login/login';
import adm_listar from './page/adm/adm_listar';
import adm_usuario from './page/adm/adm_usuario';
import medico from './page/medico/medico';
import paciente from './page/paciente/paciente';


import reportWebVitals from './reportWebVitals';



const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} /> {/* Home */}
        <Route path="/login" component={Login} /> {/* Login */}
        <Route path="/admListar" component={adm_listar} /> {/* Login */}
        <Route path="/admusuario" component={adm_usuario} /> {/* Login */}
        <Route path="/medico" component={medico} /> {/* Login */}
        <Route path="/paciente" component={paciente} /> {/* Login */}
       
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
