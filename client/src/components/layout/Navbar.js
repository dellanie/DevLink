import React from 'react';
import { Fragment } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link,NavLink } from 'react-router-dom';
import { logout } from '../../actions/auth';


const Navbar = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const {isAuthenticated, loading} = auth;

  const onLogout = e => {
    e.preventDefault();
    dispatch(logout());
  };

  const authLinks = (
    <ul>
      <li>
        <Link to ='/profiles'>
          Developers
        </Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user'></i>{" "}
          <span className='hide-sm'>Dashboard</span> 
          {/* add span just to make sure icon shows on mobile devices */}
        </Link>
      </li>
      <li>
        <a href='/logout' onClick={onLogout}>
          <i className='fas fa-sign-out-alt'></i>{" "}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li><Link to ='/profiles'>Developers</Link></li>
      <li><Link to = '/register'>Register</Link></li>
      <li><Link to = '/login' >Login</Link></li>
    </ul>

  )


  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to='/'>
          <i className="fas fa-code"></i> DevLink
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
    </nav>
      
  )
}

export default Navbar