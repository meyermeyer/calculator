import React, {Component} from 'react'

import {Grid, Button, Card, CardContent} from '@material-ui/core'

class Calculator extends Component{
    render(){
        return(
            <Grid container xs={4} spacing={2}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            Calculation display here
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container item spacing={1}>
                    <Grid item xs={3}>
                        <Button variant="contained">7</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained">8</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained">9</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained">/</Button>
                    </Grid>
                </Grid>
                <Grid container item spacing={1}>
                    <Grid item xs={3}>
                        <Button variant="contained">4</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained">5</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained">6</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained">x</Button>
                    </Grid>
                </Grid>
                <Grid container item spacing={1}>
                    <Grid item xs={3}>
                        <Button variant="contained">1</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained">2</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained">3</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained">-</Button>
                    </Grid>
                </Grid>
                <Grid container item spacing={1}>
                    <Grid item xs={6}>
                        <Button variant="contained">0</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained">.</Button>
                    </Grid>
                    <Grid item s={3}>
                        <Button variant="contained">+</Button>
                    </Grid>
                </Grid>
            </Grid>

        )
    }
}

export default Calculator;