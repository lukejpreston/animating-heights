import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/js/all'
import 'bulma/css/bulma.css'

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
