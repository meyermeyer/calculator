import React from 'react';
import Calculator from '../Calculator/Calculator'
import History from '../History/History'
import './App.css';

import {withStyles} from '@material-ui/core'

import { Grid} from '@material-ui/core'


function App() {
  return (
    <div className="App">
      <Grid container spacing={4}>
        <Grid item xs={4}></Grid>
        <Grid className="calc" item xs={4}>
          <Calculator />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <History />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
}

export default App;
