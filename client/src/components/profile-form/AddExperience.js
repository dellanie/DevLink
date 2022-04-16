import React,{Fragment,useState} from 'react';
import {useDispatch} from "react-redux";
import {Link,useNavigate} from "react-router-dom";
import { addExperience } from '../../actions/profile';

const AddExperience = () => {

    const [formData,setFormData] = useState({
        company:'',
        title:'',
        location:'',
        from:'',
        to:'',
        curent:false,
        description:''
    });

    const navigate = useNavigate();
    const [toDataDisabled,toggleDisabled] = useState(false);
    const dispatch = useDispatch();
    const {company, title, location, from, to, current, description} = formData;

     const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});
  return (
    <Fragment>
        <h1 class="large text-primary">
       Add An Experience
      </h1>
      <p class="lead">
        <i class="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form class="form" onSubmit={e => {e.preventDefault(); dispatch(addExperience(formData,navigate))}}>
        <div class="form-group">
          <input type="text" placeholder="* Job Title" name="title" value={title}  onChange={e =>onChange(e)} required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="* Company" name="company" value={company}  onChange={e =>onChange(e)} required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Location" name="location" value={location}  onChange={e =>onChange(e)} />
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from}  onChange={e =>onChange(e)}/>
        </div>
         <div class="form-group">
          <p><input type="checkbox" checked={current} name="current" value={current}  onChange={e => 
          {setFormData({...formData,current:!current});
          toggleDisabled(!toDataDisabled)        
        }} />{' '} Current Job</p>
        </div>
        <div class="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" value={to}  onChange={e =>onChange(e)} disabled={toDataDisabled? 'disabled': ''}/> {/* if current job is checked add a disabled to prevent from adding anymore*/}
        </div>
        <div class="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}  onChange={e =>onChange(e)}
          ></textarea>
        </div>
        <input type="submit" class="btn btn-primary my-1" />
        <a class="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>

    </Fragment>
  )
}

export default AddExperience