import React from 'react';

import { Header } from './components/Header';
import { App } from './App';

export const InitApp = (socket: SocketIOClient.Socket): JSX.Element => {
    console.log(socket);
    return (
        <div className="d-flex flex-column h-100">
            <Header />
            <App />
        </div>
    );
};
