import React,{useState,useEffect} from 'react';
import './App.css';
import Cards from './components/CardsComponent';
import Charts from './components/ChartsComponent';
import CountriesPicker from './components/CountriesComponent';
import {Container,Grid} from '@material-ui/core';
import {fetchData} from './api';

function App() {

  const [data,setData]=useState({});

   useEffect(()=>{
    const getData=async ()=>{
      const fetchedData=await fetchData();
      setData(fetchedData);
    }
    getData();
  })

  return (
    <div>
      <Container>
        <Grid justify="center">
          <Grid item justify="center">
            <h1>COVID-19 Tracker</h1>
          </Grid>
          <Cards data={data}/>
          <CountriesPicker />
          <Charts />
      </Grid>
      </Container>
    </div>
  );
}

export default App;
