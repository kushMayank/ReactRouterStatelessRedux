import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Store from './store'
const MyApp=()=>(
        <Provider store={Store}><App/></Provider>
    
    )

ReactDOM.render(<MyApp/>, document.getElementById('root'));
registerServiceWorker();
