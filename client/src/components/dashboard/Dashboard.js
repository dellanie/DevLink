import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

function Dashboard() {

  const dispatch = useDispatch();
  const {profile} = useSelector(state => state.profile);
  const {user} = useSelector(state => state.auth);

  useEffect(() =>{
    dispatch(getCurrentProfile());
  },[dispatch]);

  return (
    <section className='container'>
      <div>
        <h1>
        Dashboard
        </h1>
        
      </div>
    </section>  
  )
}

export default Dashboard