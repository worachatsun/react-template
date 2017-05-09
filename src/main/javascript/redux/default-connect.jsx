import {bindActionCreators} from 'redux';
import {connect as originalConnect} from 'react-redux';

import * as sampleActions from '../components/organisms/Sample/actions'

export const connect = (component, actions = {}) => {
    const createState = (state) => Object.assign({}, state);

    const createAction = (dispatch) => {
        //  you can add default actions
        let allActions = {
            sampleActions,
        };
        for (const key in actions) {
            allActions[key] = bindActionCreators(actions[key], dispatch);
        }
        return allActions;
    };

    return originalConnect(createState, createAction)(component);
};