import { all } from 'redux-saga/effects';
import calculationSaga from './calculationSaga'

export default function* rootSaga() {
    yield all([
        calculationSaga()
        
    ]);
}