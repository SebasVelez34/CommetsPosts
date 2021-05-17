import * as postsApi from './Posts';
import * as commentsApi from './Comments';
import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export {
    apiInstance,
    postsApi,
    commentsApi
}