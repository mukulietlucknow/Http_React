import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',


});

instance.defaults.headers.common['Authorization'] = 'Auth token';

export default instance;