import axios from 'axios';
import {setAlert} from './alert'
import {
    ADD_POST,
    DELETE_POST,
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
} from './types'

export const getPosts = () => async dispatch => {
    try{
        const res = await axios.get('/api/posts');

        dispatch({
            type:GET_POSTS,
            payload: res.data
        });
    }catch(err){
        dispatch({
            type:POST_ERROR,
            payload:{ msg:err.response.statusText, status: err.response.status}
        });      
    }
};

//Add Like
export const addLikes = id => async dispatch => {
    try{
        const res = await axios.put(`/api/posts/like/${id}`);

        dispatch({
            type:UPDATE_LIKES,
            payload: {id, likes: res.data }
        });
    }catch(err){
        dispatch({
            type:POST_ERROR,
            payload:{ msg:err.response.statusText, status: err.response.status}
        });      
    }
};

//remove likes
export const removeLikes = id => async dispatch => {
    try{
        const res = await axios.put(`/api/posts/unlike/${id}`);

        dispatch({
            type:UPDATE_LIKES,
            payload: {id, likes: res.data }
        });
    }catch(err){
        dispatch({
            type:POST_ERROR,
            payload:{ msg:err.response.statusText, status: err.response.status}
        });      
    }
};

//delete posts
export const deletePost = id => async dispatch => {
    try{
        await axios.put(`/api/posts/${id}`);

        dispatch({
            type:DELETE_POST,
            payload:id
        });

        dispatch (setAlert('Post Removed','sucess'));
    }catch(err){
        dispatch({
            type:POST_ERROR,
            payload:{ msg:err.response.statusText, status: err.response.status}
        });      
    }
};

//add posts
export const addPost = (formData) => async (dispatch) => {
        
    try{
        const res = await axios.post('/api/posts', formData);

        dispatch({
            type:ADD_POST,
            payload:res.data
        });

        dispatch (setAlert('Post Created','sucess'));
    }catch(err){
        dispatch({
            type:POST_ERROR,
            payload:{ msg:err.response.statusText, status: err.response.status}
        });      
    }
};