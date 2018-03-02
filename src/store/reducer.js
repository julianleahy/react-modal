import * as Actions from './actions';

const initState = {
    showModal : false
}

const reducer = (state=initState, action) => {
    switch (action.type) {
        case Actions.TOGGLE_MODAL:
            return{
                ...state,
                showModal : !state.showModal
            }
   
        default:
            return state;
    }
    
}

export default reducer;