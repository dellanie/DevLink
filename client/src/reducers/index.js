import { combineReducers } from "redux";
import alert from './alerts';
import auth from './auth';
import Profile from './Profile';

export default combineReducers({
    alert,auth,Profile
});