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
        dispatchEvent(getProfilesById(props.match.params.id));//to get id from url using props.match.....
    },[dispatch,props.match.params.id]);

  return (

    <div className=''>
        Profile
    </div>
  )
}

export default Profile