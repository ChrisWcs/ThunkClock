import { TICK } from '../actions/actions';
import initialState from './initialState';

const mainReducer = (state = initialState(), action) => {
    switch(action.type){
        case TICK:
            return {
                time: new Date()
            };
        default:
            return state;
    }
};

export default mainReducer;