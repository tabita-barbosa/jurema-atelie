import React from 'react';
import Home from './Pages/Home';
import Produtos from './Pages/Produtos';
import Sobre from './Pages/Sobre';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <NavBar></NavBar>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Home{...props}/>}/>
          <Route path="/produtos" render={props => <Produtos{...props}/>}/>
          <Route path="/sobre" render={props => <Sobre{...props}/>}/>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
