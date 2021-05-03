import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { App } from './App';
import { Chat } from './components/Chat';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { PageNotFound } from './components/PageNotFound';


export const InitApp = (socket: SocketIOClient.Socket): JSX.Element => {
    console.log(socket);

    return (
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path="/" component={Chat} />

                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />

                    <Route path="*" component={PageNotFound} />
                </Switch>
            </App>
        </BrowserRouter>
    );
};
