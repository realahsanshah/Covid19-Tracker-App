import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl,Grid} from '@material-ui/core';
import {fetchCountries} from '../api';

import styles from './CountryPicker.module.css';

const CountriesPicker = ({handleCountryChange}) => {

    const [fetchedCountries,setFetchedCountries]=useState([]);
    const [isFetched,setFetched]=useState(false);


    useEffect(()=>{
        const fetchApi=async()=>{
            setFetchedCountries(await fetchCountries());
        }

        

        if(!isFetched){
            fetchApi();
            setFetched(true);
            console.log(fetchedCountries)
        }
    },[fetchedCountries,isFetched]);


    return ( 
        <Grid container justify="center">
            <Grid item xs={12} md={6}>
                <FormControl className={styles.formControl}>
                    <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                        <option value='global'>Global</option>
                        {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
                    </NativeSelect>
                </FormControl>
        </Grid>
        </Grid>
     );
}
 
export default CountriesPicker;