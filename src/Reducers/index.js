import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as SummonerReducer from './Summoner';

export default combineReducers(
    Object.assign({},
        SummonerReducer,
        {
            routing: routerReducer
        }
    )
);
