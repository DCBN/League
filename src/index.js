import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { AppContainer } from 'react-hot-loader'

import configureStore from './Store/configureStore';
import './index.css';
import './Styles/css/animate.css';
import './Styles/fonts/ostrich-sans/ostrich-sans.css';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
    SummonerData: {},
    Loading: false
}
const history = createBrowserHistory();
const store = configureStore(history, initialState)

let Routes = routes;

const renderApp = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={ store }>
                <ConnectedRouter history={ history } children={ Routes } />
            </Provider>
        </AppContainer>,
    document.getElementById('root'));
};

renderApp();

if(module.hot) {
    module.hot.accept('./routes', () => {
        Routes = require('./routes').default;
        renderApp();
    });
}
registerServiceWorker();
