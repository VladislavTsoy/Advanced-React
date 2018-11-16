// Required Modules
import React from 'react';
import ReactDOM from 'react-dom';
import StateApi from 'state-api';

// Required Components
import App from 'components/App';

const store = new StateApi(window.initialData);

ReactDOM.hydrate(
    <App store={ store }/>, 
    document.getElementById('root')
);