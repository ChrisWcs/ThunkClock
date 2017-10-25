import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import mainReducer from '../reducers/mainReducer';
import ConClock from '../containers/ConClock';

const App = () => (
    <Provider store={createStore( mainReducer, applyMiddleware(thunk) )}>
        <div>
            <ConClock/>
        </div>
    </Provider>
);

export default App;