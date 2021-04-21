import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';
import io from 'socket.io-client';
import { render } from 'react-dom';

import { InitApp } from './init';

import '../assets/application.scss';

if (process.env.NODE_ENV !== 'production') {
    localStorage.debug = 'chat:*';
}

console.log('it works!');

const container: HTMLDivElement = document.querySelector('#chat');
const socket: SocketIOClient.Socket = io({ multiplex: false });
const vdom: JSX.Element = InitApp(socket);

render(vdom, container);
