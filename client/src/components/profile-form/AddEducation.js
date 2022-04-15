import React,{Fragment,useState} from 'react';
import {useDispatch} from "react-redux";
import {Link,useNavigate} from "react-router-dom";
import { addEducation } from '../../actions/profile';

const AddEducation = () => {

    const [formData,setFormData] = useState({
        school:'',
        degree:'',
        fieldsofstudy:'',
        from:'',
        to:'',
        curent:false,
        description:''
    });

    const navigate = useNavigate();
    const [toDataDisabled,toggleDisabled] = useState(false);
    const dispatch = useDispatch();
    const {school, degree, fieldsofstudy, from, to, current, description} = formData;

     const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});
  return (
    <Fragment>
        <h1 class="large text-primary">
       Add An Education
      </h1>
      <p class="lead">
        <i class="fas fa-code-branch"></i> Add any school/boot camp
         you have had in the past
      </p>
      <small>* = required field</small>
      <form class="form" onSubmit={e => {e.preventDefault(); dispatch(addEducation(formData,navigate))}}>
        <div class="form-group">
          <input type="text" placeholder="* School" name="school" value={school}  onChange={e =>onChange(e)} required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="* Degree" name="degree" value={degree}  onChange={e =>onChange(e)} required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Field of Study" name="fieldsofstudy" value={fieldsofstudy}  onChange={e =>onChange(e)} />
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
            placeholder="Program Description"
            value={description}  onChange={e =>onChange(e)}
          ></textarea>
        </div>
        <input type="submit" class="btn btn-primary my-1" />
        <Link class="btn btn-light my-1" to="dashboard.html">Go Back</Link>
      </form>

    </Fragment>
  )
}

export default AddEducation 