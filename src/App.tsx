import React from 'react';
import Providers from './pages/providers';
import Products from './pages/products';
import BotaoFornecedor from './components/Buttons/btnCadastrarFornecedor';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/fornecedores">
            <Navbar/>
            <Providers />
          </Route>
          <Route path="/produtos">
            <Navbar/>
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

