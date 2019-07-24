import {
    LOGIN_USER,
    REGISTER_USER
} from '../actions/types.js';
 

export default function(state={},action){
    switch(action.type){
        case LOGIN_USER:
            return { ...state, registerSuccess: action.payload };
        case REGISTER_USER:
                return { ...state, loginSuccess: action.payload }
        default:
            return state;
    }
}