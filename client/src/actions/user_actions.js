import axios from 'axios';
import {
    LOGIN_USER
} from './types';

import { USER_SERVER } from '../components/utils/misc';

export function loginUser(dataSubmit) {
    const request = axios.post(`${USER_SERVER}/login`, dataSubmit)
    .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}