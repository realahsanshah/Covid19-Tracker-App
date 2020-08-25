import React,{useState,useEffect} from 'react';
import './App.css';
import Cards from './components/CardsComponent';
import Charts from './components/ChartsComponent';
import CountriesPicker from './components/CountriesComponent';
import {Container,Grid} from '@material-ui/core';
import {fetchData} from './api';

function App() {

  const [data,setData]=useState({});
  const [country,setCountry]=useState('');
  const [isFetched,setFetched]=useState(false);

   useEffect(()=>{
    const getData=async ()=>{
      const fetchedData=await fetchData();
      setData(fetchedData);
    }

    if(!isFetched){
      getData();
      setFetched(true);
    }
  })

  const handleCountryChange=async (country)=>{
    const fetchedData=await fetchData(country);
    setData(fetchedData);
    setCountry(country);
    console.log(fetchedData);
  }

  return (
    <div>
      <Container>
        <Grid justify="center">
          <Grid item justify="center">
            <h1>COVID-19 Tracker</h1>
          </Grid>
          <Grid item justify="center">
          <Cards data={data}/>
          </Grid>
          <Grid item justify="center">
          <CountriesPicker handleCountryChange={handleCountryChange} />
          </Grid>
          <Grid item justify="center">
          <Charts data={data} country={country}/>
          </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default App;
