import React,{useState,useEffect} from 'react';
import './App.css';
import Cards from './components/CardsComponent';
import Charts from './components/ChartsComponent';
import CountriesPicker from './components/CountriesComponent';

import {fetchData} from './api';
import coronaImage from './images/image.png'; 

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
  },[isFetched])

  const handleCountryChange=async (country)=>{
    const fetchedData=await fetchData(country);
    setData(fetchedData);
    setCountry(country);
    console.log(fetchedData);
  }

  return (
    <div className='container'>
        <img className="image" src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountriesPicker handleCountryChange={handleCountryChange} />
        <Charts data={data} country={country} /> 
    </div>
  );
}

export default App;
