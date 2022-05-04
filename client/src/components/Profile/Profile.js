import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import {getProfilesById} from '../../actions/profile';
import { useDispatch, useSelector } from 'react-redux';



const Profile = props => {

    const {
        profile:{profile,loading},
        auth
    } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getProfilesById(props.match));//to get id from url using props.match.....
    },[dispatch,props.match]);

  return (

    <div className=''>
        Profile
    </div>
  )
}

export default Profile