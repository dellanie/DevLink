import { Fragment,useEffect } from 'react';
import { BrowserRouter as Router, Route,Routes, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import AllRoutes from './components/routing/AllRoutes';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import addExperience from './components/profile-form/AddExperience';
import PrivateRoute from './components/routing/PrivateRoute';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEducation';
import Profiles from './components/Profiles/Profiles';
import Profile from './components/Profile/Profile';

if(localStorage.token){
  setAuthToken(localStorage.token)
}


function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  },[]);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar/>
              <Alert/>
              <Routes>
                <Route exact path='/' element={<Landing/>} />
                <Route exact path='/register' element={<Register/>}/>
                <Route exact path='/login' element={<Login/>}/> 
                <Route exact path='/profiles' element={<Profiles/>}/>
                <Route exact path='/profiles/:id' element={<Profile/>}/>
                <Route exact path='/dashboard' element={<Dashboard/>}/>
                <Route exact path='/create-profile' element={<CreateProfile/>}/> 
                <Route exact path='/edit-profile' element={<EditProfile/>}/>
                <Route exact path='/add-experience' element={<AddExperience/>}/>
                <Route exact path='/add-education' element={<AddEducation/>}/>
              </Routes>
          
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;

//if you want user to be logged in to view specific routes. use Privateroute instead of just Routes