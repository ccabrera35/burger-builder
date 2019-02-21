import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-b84eb.firebaseio.com/'
});

export default instance;