import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav } from 'mdbreact';
import Anasayfa from './pages/Anasayfa';
import Basvuru from './pages/Basvuru';
import DahaFazla from './pages/DahaFazla';

function App() {
  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Bir Fikir Bir Proje</strong>
        </MDBNavbarBrand>
        <MDBNavbarNav right>
          <Link to="/" className="btn btn-outline-default">Anasayfa</Link>
          <Link to="/basvuru-yap" className="btn btn-outline-danger">Başvuru Yap</Link>
        </MDBNavbarNav>
      </MDBNavbar>
      <Switch>
        <Route path="/basvuru-yap">
          <Basvuru />
        </Route>
        <Route path="/daha-fazla">
          <DahaFazla />
        </Route>
        <Route path="/">
          <Anasayfa />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
