import { ADD_ITEM } from '../constants/action-types';

const initialState = {
    item:'',
    list:[]
}

const rootReducer = (state = initialState, action) => { 
    switch (action.type) {
        
        case ADD_ITEM: 
        return {
            ...state,
            list: [...state.list, action.payload]
        }
        default:
        return state
    }
}

export default rootReducer;