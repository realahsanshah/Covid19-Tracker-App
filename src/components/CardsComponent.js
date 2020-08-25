import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

// const renderCard=(title,data,date,body)=>{
//    return(
//       <Grid item component={Card}>
//          <h1>Hello</h1>
//       <CardContent>
//          <Typography color="textSecondary" gutterBottom>{title}</Typography>
//          <Typography variant='h5'>{data}</Typography>
//          <Typography color="textSecondary">{date}</Typography>
//          <Typography variant='body'>{body}</Typography>
//       </CardContent>
//       </Grid>
//    );
// }

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {

      if(!confirmed){
         return "Loading"
      }
    return ( 
        <div>
           <Grid container spacing={3} justify="center">
           <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
               <CardContent>
                  <Typography color="textSecondary" gutterBottom>Infected</Typography>
                  <Typography variant='h5'>
                     <CountUp start={0} end={confirmed.value} duration={3} separator="," />
                  </Typography>
                  <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography variant='body'>Active Cases of COVID-19</Typography>
               </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
               <CardContent>
                  <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                  <Typography variant='h5'>
                  <CountUp start={0} end={recovered.value} duration={3} separator="," />
                  </Typography>
                  <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography variant='body'>Recovered Cases of COVID-19</Typography>
               </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
               <CardContent>
                  <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                  <Typography variant='h5'>
                     <CountUp start={0} end={deaths.value} duration={3} separator="," />
                  </Typography>
                  <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography variant='body'>Number of deaths due to COVID-19</Typography>
               </CardContent>
            </Grid>
          
           </Grid>
         
        </div>
     );
}
 
export default Cards;