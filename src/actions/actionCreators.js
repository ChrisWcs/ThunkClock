import {TICK} from './actions';

export const createTick = () => ({
    type: TICK
});


export const asyncStart = () => (dispatch) => {
    setInterval( () => {
        dispatch(createTick());
    }, 500);
};