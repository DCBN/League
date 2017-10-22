import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Layout from './Components/Layout';
import Landing from './Components/Landing';
import SummonerPage from './Components/SummonerPage';

const routes = (
    <Layout>
        <Route exact path="/" component={ Landing } />
        <Route exact path="/:Region/:Name" component={ SummonerPage } />
    </Layout>
);

export default routes;