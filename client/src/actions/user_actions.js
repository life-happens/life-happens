import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER
} from './types';

import { USER_SERVER } from '../components/utils/misc';

export function registerUser(dataSubmit){

    const request = axios.post(`${USER_SERVER}/register`, dataSubmit)
    .then(response => response.data);

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataSubmit) {
    const request = axios.post(`${USER_SERVER}/login`, dataSubmit)
    .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}