import React, { Component } from 'react'
import { connect } from 'react-redux'



class History extends Component {
    
    

    // componentDidMount(){
    //     this.props.dispatch({type:'FETCH_CALCULATION'})
    // }

    render(){
        let calculations = []
        let history = this.props.reduxState.history
        if (history.length!==0){
            for (let i = history.length - 1; i > 0 && i>history.length-11; i--) {
                console.log(history[i])
                let calc = history[i]
                calculations.push(<li key={i}>{calc.a}{calc.operator}{calc.b}={calc.result}</li>)
            }     
        }
        
        return(
            
            <ul>
                {calculations}
            </ul>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
})
export default connect(mapStateToProps)(History);