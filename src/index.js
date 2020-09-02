import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import thunk from 'redux-thunk';
import dashboardReducer from './store/reducers/DashboardReducer';
import covid19dataReducer from './store/reducers/covid19DataReducer';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {Provider} from "react-redux";
import history from './history';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    covid19: covid19dataReducer
});
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
const app = (
    <Provider store={store}>
        <BrowserRouter  history={history}>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );

serviceWorker.unregister();
