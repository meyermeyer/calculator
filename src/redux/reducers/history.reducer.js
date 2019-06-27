const historyReducer = (state = [], action) => {
    
    if (action.type === 'STORE_CALCULATIONS') {
        console.log('in historyReducer', action.payload)
        return action.payload
    }
    else {
        return state
    }
};



export default historyReducer;