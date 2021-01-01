import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';

import set1 from "../../img/set1.jpeg";
import set2 from "../../img/set2.jpg";
import set3 from "../../img/set3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 5,
    paddingRight:50,
    paddingLeft:50,
    backgroundColor:'#151515'
  },
  paper: {
    color: 'purple',
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <div style={{width:'100%',overflow:'hidden'}}>
              <img src={set1} className='gridImg2'/>
          </div>
          <div style={{display:'flex',flexDirection: 'row',justifyContent: 'space-between', width:'95%', margin:'auto'}}>
              <p className={classes.paper}>art</p>
              <p className={classes.paper}>coursea</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <div style={{width:'100%',overflow:'hidden'}}>
              <img src={set2} className='gridImg2'/>
          </div>
          <div style={{display:'flex',flexDirection: 'row',justifyContent: 'space-between', width:'95%', margin:'auto'}}>
              <p className={classes.paper}>art</p>
              <p className={classes.paper}>coursea</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} md={6}>
        <div style={{width:'100%',overflow:'hidden'}}>
              <img src={set3} className='gridImg2'/>
          </div>
          <div style={{display:'flex',flexDirection: 'row',justifyContent: 'space-between', width:'95%', margin:'auto'}}>
              <p className={classes.paper}>art</p>
              <p className={classes.paper}>coursea</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
