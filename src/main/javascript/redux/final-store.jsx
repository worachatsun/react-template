import {createStore, compose} from 'redux';
import rootReducer from './root-reducer'

export const createFinalStore = () => {
    //  you can apply middleware
    const finalCreateStore = compose()(createStore);
    return finalCreateStore(rootReducer);
};