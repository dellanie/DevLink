import { combineReducers } from "redux";
import alert from './alerts';
import auth from './auth';
import profile from './Profile';


export default combineReducers({
    alert,auth,profile
});

// changed Profile to profile