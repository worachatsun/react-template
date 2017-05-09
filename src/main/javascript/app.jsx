import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createFinalStore} from './redux/final-store';

import Sample from './components/organisms/Sample'

ReactDOM.render(
    <Provider store={createFinalStore()}>
        <Sample/>
    </Provider>,
    document.getElementById('app')
);
