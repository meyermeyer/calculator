import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* submitCalculation(action) {
    console.log('in submitCalculation saga', action.payload)

    try {
        yield axios.post('/api/calculator', action.payload)
        yield put({type:'FETCH_CALCULATION'})

    } 
    catch (error) {
        console.log('error in submitCalculation saga', error)
    }
}

function* fetchCalculation() {
    console.log('in fetchCalculation')
    try {
        let allCalculations = yield axios.get('/api/calculator')
        yield put({type:'STORE_CALCULATIONS', payload: allCalculations.data})
    }
    catch(error){
        console.log('error in fetchCalculation', error)
    }
}


function* calculationSaga() {
    yield takeEvery('SUBMIT_CALCULATION', submitCalculation);
    yield takeEvery('FETCH_CALCULATION', fetchCalculation)
}

export default calculationSaga;