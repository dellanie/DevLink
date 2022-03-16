import { Fragment } from 'react';
import { BrowserRouter as Router, Route,Routes, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
//Redux
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Landing/>} />
          </Routes>
          <section className='container'>
              <Routes>
                <Route exact path='/register' element={<Register/>}/>
                <Route exact path='/login' element={<Login/>}/>
              </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
