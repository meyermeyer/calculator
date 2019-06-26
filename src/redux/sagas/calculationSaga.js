import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* submitCalculation(action) {
    console.log('in submitCalculation saga', action.payload)

    try {
        yield axios.post('/api/calculator', action.payload)

    } 
    catch (error) {
        
    }
}

function* calculationSaga() {
    yield takeEvery('SUBMIT_CALCULATION', submitCalculation);
}

export default calculationSaga;