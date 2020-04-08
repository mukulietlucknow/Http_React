import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
// axios.defaults.headers.common['Authorization'] = 'Auth token';
axios.defaults.headers.post['content-type'] = 'json';
axios.interceptors.request.use(request => {
    console.log(request);
    return request;
}, error  => {
    console.log(error);
    return Promise.reject(error);
})

//axios.interceptors.response.use()

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
