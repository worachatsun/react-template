import * as Types from './actions';

const initState = {
    message: 'default',
};

const sample = (state = initState, action) => {
    switch (action.type) {
        case Types.SAMPLE_MESSAGE:
            return Object.assign({}, state, {message: action.message});
    }
    return state;
};
export default sample;