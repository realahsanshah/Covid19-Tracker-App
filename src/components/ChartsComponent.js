import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../api';
import {Line,Bar} from 'react-chartjs-2';

import styles from './Charts.module.css';

const Charts = ({data:{confirmed,recovered,deaths},country}) => {
    
    const[dailyData,setDailyData]=useState([]);

    const[isFetched,setFetched]=useState(false);

    useEffect(()=>{
        const fetchAPI=async()=>{
            const fetchedData=await fetchDailyData();
            setDailyData(fetchedData);
        }
        if(!isFetched){
            fetchAPI();
            setFetched(true);
        }
        }
    ,[dailyData, isFetched]);

    const LineChart=(
        dailyData.length?
        <Line 
            data={{
                labels:dailyData.map(({date})=>date),
                datasets:[{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label:'Infected',
                    borderColor:'#3333ff',
                    fill:true
                },{
                    data:dailyData.map(({deaths})=>deaths),
                    label:'Deaths',
                    borderColor:'red',
                    backgrounColor:'rgba(255,0,0,0.5)',
                    fill:true
                }]
            }}
            />:null
        );

        
    const BarChart=(
        confirmed?
        (
            <Bar 
            data={{
                labels:['Infected','Recovered','Death'],
                datasets:[{
                    label:'People',
                    backgroundColor:['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)','rgba(255, 0, 0, 0.5)'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }],
                
            }}
            options={{
                legend:{
                    display:false,
                    title:{display:true,text:`Current state in ${country}`},

                }
            }} />
        ):null
    );

    return ( 
        <div className={styles.container}>
            
            {country==='global'?LineChart :country?BarChart:LineChart}
            {/* {country?BarChart:LineChart} */}
        </div>
     );
}
 
export default Charts;