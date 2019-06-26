import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Grid, Button, Card, CardContent} from '@material-ui/core'

class Calculator extends Component{
    state={
        valueA: [],
        valueB: [],
        operator: ''
    }
    
    handleSubmit = () => {
        console.log('submit', parseFloat(this.state.valueA))
        this.props.dispatch({type:'SUBMIT_CALCULATION', 
                            payload:
                                {

                                }
                            })
    }

    handleClickFor(param){
        console.log(param)
        if (param === '/' || param === 'x' || param === '-' || param === '+'){
            console.log('operator', param)
            //store the operator in local state
            this.setState({
                ...this.state,
                operator: param
            })
        }
        //if no operator has been set, number inputs affect valueA
        else if (!this.state.operator){
            console.log('number', param)
            let a = [...this.state.valueA, param]
            this.setState({
                ...this.state,
                valueA: a
            })
        }
        //once operator is selected, buttons effect valueB
        else {
            let b = [...this.state.valueB, param]
            this.setState({
                ...this.state,
                valueB: b
            })
        }
        
    }

    render(){
        console.log('state', this.state)
        return(
            <Grid container spacing={2}>
                <Grid container item xs={4} spacing={2}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                {this.state.valueA} {this.state.operator} {this.state.valueB}
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid container item spacing={1}>
                        <Grid item xs={3}>
                            <Button variant="contained" onClick={() => { this.handleClickFor(7) }}>7</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" onClick={() => { this.handleClickFor(8) }}>8</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" onClick={() => { this.handleClickFor(9) }}>9</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" onClick={() => { this.handleClickFor('/') }}>/</Button>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                        <Grid item xs={3}>
                            <Button variant="contained" onClick={() => { this.handleClickFor(4) }}>4</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" onClick={() => { this.handleClickFor(5) }}>5</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" onClick={() => { this.handleClickFor(6) }}>6</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" onClick={() => { this.handleClickFor('x') }}>x</Button>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                        <Grid item xs={3}>
                            <Button variant="contained" onClick={() => { this.handleClickFor(1) }}>1</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" onClick={() => { this.handleClickFor(2) }}>2</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" onClick={() => { this.handleClickFor(3) }}>3</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" onClick={() => { this.handleClickFor('-') }}>-</Button>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                        <Grid item s={3}>
                            <Button variant="contained" onClick={this.handleSubmit}>=</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" onClick={() => { this.handleClickFor(0) }}>0</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" onClick={() => { this.handleClickFor('.') }}>.</Button>
                        </Grid>
                        <Grid item s={3}>
                            <Button variant="contained" onClick={() => { this.handleClickFor('+') }}>+</Button>
                        </Grid>
                    </Grid>
                </Grid>               
            </Grid>

        )
    }
}
const mapStateToProps = reduxState=>({
    reduxState
})
export default connect(mapStateToProps)(Calculator);