const {ADD_TO_CART} = require('../constants');

const initialState = {
    cardData : []
}

export default function cardITem(state = initialState, action){

    switch(action.type){
        case 'ADD_TO_CART' :
            return {
                ...state,
                cardData : action.data
            }
            break;

        default:
            return state
    }

}