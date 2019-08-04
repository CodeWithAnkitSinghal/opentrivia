import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../component/Header'
import DashboardPage from '../component/DashboardPage';
import NotFoundPage from '../component/NotFoundPage';
import CreateGamePage from '../component/CreateGamePage';
import LobbyPage from '../component/LobbyPage';
import JoinGamePage from '../component/JoinGamePage';
import QuestionPage from '../component/QuestionPage';
import RenderWithHeader from './RenderWithHeader';


export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route exact={true} path="/" component={DashboardPage} />
                <RenderWithHeader  path="/create" component={CreateGamePage} />
                <RenderWithHeader path="/join" component={JoinGamePage} />
                <RenderWithHeader  path="/lobby" component={LobbyPage} />
                <RenderWithHeader  path="/play" component={QuestionPage} />
                <RenderWithHeader component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;