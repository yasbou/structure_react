/*
*Npm import
*/

/*
* local import
*/
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import {render} from 'react-dom';

/*
* Code
*/

const Hello = () => (<div>hello Wordl)</div>);

const node = document.getElementById('root');

ReactDOM.render(<Hello />, node);


// render(<Hello />, node);
