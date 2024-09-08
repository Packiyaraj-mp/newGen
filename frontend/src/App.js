
import { Fragment, useEffect, useState } from 'react';
import './App.css';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import Register from './components/user/register';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadUser } from './actions/userAction';
import store from './components/layout/store';
import Login from './components/user/login';

import ResetPassword from './components/user/resetPassword';
import ForgetPassword from './components/user/forgetPassword';
import Home from './components/layout/home';
import Dashboard from './components/admin/dashboard';

function App() {
     useEffect(()=>{ 
             store.dispatch(loadUser(false)).then(success=>success).catch(err=>err)
            
     },[]);

     return(
     <Router>
          <div className='container-fluid p-0 position-relative'>
               <ToastContainer theme='dark' autoClose={3000}/>
             <Routes>
               <Route path='/' element={<Login/>}/>
               <Route path='/register' element={<Register/>}/>
               <Route path='/home' element={<Home/>}/>
               <Route path='/forget/password' element={<ForgetPassword/>}/>
               <Route path='/reset/password/:token' element={<ResetPassword/>}/>
               
             </Routes>
             {/* admin routes */}
              <Routes>
                <Route path='/admin/dashboard' element={<Dashboard/>}/>
              </Routes>
          </div>
       
     </Router>
   
      )
    
}

export default App;
