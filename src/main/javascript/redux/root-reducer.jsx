import {combineReducers} from 'redux'

import sample from '../components/organisms/Sample/reducer';

//  you should add reducer here
const rootReducer = combineReducers({
    sample,
});
export default rootReducer;