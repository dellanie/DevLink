import React,{ Fragment, useState} from 'react';
import { Link,Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../../actions/auth';

const Login = () => {

    const [formData, setFormData] = useState({
        email:'',
        password:'',
    }); // using an object to store register  form

    const { email, password, } = formData; //destructure form data

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const dispatch = useDispatch();

    const onChange = e => setFormData({...formData, [e.target.name]:e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        console.log('success')
        dispatch(login(email,password));        
    }

    //Redirect if logged in
    if (isAuthenticated){
        return <Navigate to="/dashboard"/>
    }

  return (
    <section className='container'>
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead"><i className="fas fa-user"></i> Sign IntoYour Account</p>
        <form className="form" onSubmit={e => onSubmit(e)}>
            
            <div className="form-group">
            <input 
                type="email"   
                placeholder="Email Address" 
                name="email" 
                value={email} 
                onChange={e => onChange(e)}
                required /> 
            </div>
            <div className="form-group">
            <input
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                value={password} 
                onChange={e => onChange(e)}

            />
            </div>
            <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
            Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
    </section>
  )
};

export default Login