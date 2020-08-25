import React from 'react';
import './App.css';
import Cards from './components/CardsComponent';
import Charts from './components/ChartsComponent';
import CountriesPicker from './components/CountriesComponent';
import {Container} from '@material-ui/core';

function App() {
  return (
    <div>
      <Container>
      <Cards />
      <CountriesPicker />
      <Charts />
      </Container>
    </div>
  );
}

export default App;
