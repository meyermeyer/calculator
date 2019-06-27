import React, { Component } from 'react'
import { connect } from 'react-redux'

import {withStyles, Card, CardContent, Typography} from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';



class History extends Component {
    

    render(){
        let calculations = []
        let history = this.props.reduxState.history
        if (history.length!==0){
            for (let i = history.length - 1; i > 0 && i>history.length-11; i--) {
                console.log(history[i])
                let calc = history[i]
                calculations.push(<ListItem key={i}>{calc.a}{calc.operator}{calc.b}={calc.result}</ListItem>)
            }     
        }
        
        return(
            
            <Card >
                <CardContent>
                    <Typography>
                        Calculation History
                    </Typography>
                    <List>
                        {calculations}
                    </List>
                </CardContent>
            </Card>
            
            
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
})
export default connect(mapStateToProps)(History);