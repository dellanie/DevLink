import axios from "axios";
import { setAlert } from "./alert";

import {
    ACCOUNT_DELETED,
    CLEAR_PROFILE,
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    GET_PROFILES,
    GET_REPOS
} from './types';

//get current users profile
export const getCurrentProfile = () => async dispatch => {
    try {
       const res = await axios.get('/api/profiles/me') 

       dispatch({
           type:GET_PROFILE,
           payload: res.data
       });
    } catch (err) {
        dispatch({
            type:PROFILE_ERROR,
            payload:{ msg:err.response.statusText, status: err.response.status}
        });       
    }
};

//Get all profiles
export const getProfiles = () => async dispatch => {
    dispatch({type:CLEAR_PROFILE});
    try {
       const res = await axios.get('/api/profiles') 

       dispatch({
           type:GET_PROFILES,
           payload: res.data
       });
    } catch (err) {
        dispatch({
            type:PROFILE_ERROR,
            payload:{ msg:err.response.statusText, status: err.response.status}
        });       
    }
};

//Get profile by ID
export const getProfilesById = userId => async dispatch => {
    try {
       const res = await axios.get(`/api/profiles/${userId}`) 

       dispatch({
           type:GET_PROFILE,
           payload: res.data
       });
    } catch (err) {
        dispatch({
            type:PROFILE_ERROR,
            payload:{ msg:err.response.statusText, status: err.response.status}
        });       
    }
};

//Get Github repos
export const getGithubRepos = username => async dispatch => {
    try {
       const res = await axios.get(`/api/profiles/github/${username}`) 

       dispatch({
           type:GET_REPOS,
           payload: res.data
       });
    } catch (err) {
        dispatch({
            type:PROFILE_ERROR,
            payload:{ msg:err.response.statusText, status: err.response.status}
        });       
    }
};

//Create or update profile -- history to redirect
export const createProfile = (formData, navigate, edit =false) => async dispatch => {
    try {
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        const res = await axios.post('api/profiles', formData, config); 
        dispatch({
            type:GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Profile Updated':'Profile Created'));

        if(!edit){
            navigate('/dashboard');
        }
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type:PROFILE_ERROR,
            payload:{ msg:err.response.statusText, status: err.response.status}
        }); 
    }
}

//Add Experience
export const addExperience = (formData,navigate) => async dispatch => {
    try {
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        const res = await axios.put('api/profiles/experience', formData, config); 
        dispatch({
            type:UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Experience Added', 'success'));

        navigate('/dashboard');
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type:PROFILE_ERROR,
            payload:{ msg:err.response.statusText, status: err.response.status}
        }); 
    }
}

//Add Education
export const addEducation = (formData,navigate) => async dispatch => {
    try {
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        const res = await axios.put('api/profiles/education', formData, config); 
        dispatch({
            type:UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Experience Added', 'success'));

        navigate('/dashboard');
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type:PROFILE_ERROR,
            payload:{ msg:err.response.statusText, status: err.response.status}
        }); 
    }
};

//Delete experience
export const deleteExperience = id => async dispatch => {
    try{
        const res = await axios.delete(`/api/profiles/experience/${id}`);

        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        });

        dispatch(setAlert('Experience Removed', 'success'));

    } catch (err){
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:err.response.statusText,status:err.response.status}
        });
    }
};

//Delete Education
export const deleteEducation = id => async dispatch => {
    try{
        const res = await axios.delete(`/api/profiles/education/${id}`);

        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        });

        dispatch(setAlert('Education Removed', 'success'));

    } catch (err){
        dispatch({
            type:PROFILE_ERROR,
            payload:{msg:err.response.statusText,status:err.response.status}
        });
    }
}

//Delete account and profile
export const deleteAccount = () => async dispatch => {

    if(window.confirm('Are you sure?')){
        try{
            dispatch({type:CLEAR_PROFILE});
            dispatch({type:ACCOUNT_DELETED});

            dispatch(setAlert('Your account has been deleted'));

        } catch (err){
            dispatch({
                type:PROFILE_ERROR,
                payload:{msg:err.response.statusText,status:err.response.status}
            });
        }
    }
}