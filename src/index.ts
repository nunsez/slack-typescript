import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';

import '../assets/application.scss';

if (process.env.NODE_ENV !== 'production') {
    localStorage.debug = 'chat:*';
}

const p: HTMLParagraphElement = document.createElement('p');
p.classList.add('card-text');
p.textContent = 'It works!';

const h5: HTMLHeadElement = document.createElement('h5');
h5.classList.add('card-title');
h5.textContent = 'Project frontend l4 boilerplate';

const cardBody: HTMLDivElement = document.createElement('div');
cardBody.classList.add('card-body');
cardBody.append(h5, p);

const card: HTMLDivElement = document.createElement('div');
card.classList.add('card', 'text-center');
card.append(cardBody);

const container: HTMLDivElement = document.querySelector('#chat');
container.append(card);

console.log('it works!');
