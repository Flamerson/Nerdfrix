import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import CadastroVideo from './Pages/cadastro/video';
import CadastroCategoria from './Pages/cadastro/categoria/Index';


ReactDOM.render(
  <BrowserRouter>
  <Switch>

  <Route path="/" component={App} exact />
  <Route path="/cadastro/video" component={CadastroVideo} exact />
  <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
  <Route component={ () => (<div>Página 404</div>) }/>


  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
