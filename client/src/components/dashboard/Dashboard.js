import React,{useEffect,Fragment} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import  DashboardActions  from './DashboardActions';
import Experience from './Experience';
import Education from './Education';


function Dashboard() {

  const {profile,loading} = useSelector(state => state.profile);
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch(); 

  useEffect(() =>{
    dispatch(getCurrentProfile());
  },[dispatch]);

  return  loading && profile === null ? (
     <Spinner/> 
     ):( 
     <section className='container'>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user'></i>Welcome {user && user.name}
        </p>
        {profile !== null ? (
        <Fragment>
          <DashboardActions/>
          <Experience experience={profile.experience}/>
          <Education education={profile.education}/>
        </Fragment>
        ):( 
        <Fragment>
          <p>You have not yet set up a profile</p>
          <Link to='/create-profile' className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
        )} {/* if user has a profile or not */}
    </section>); //loading and profile is null and still loading show the spinner else show test
}

export default Dashboard