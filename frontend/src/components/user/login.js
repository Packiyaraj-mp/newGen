
import {  useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { clearAuthError, LoginAction } from '../../actions/userAction';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate= useNavigate();
    const dispatch=useDispatch();


    const {error,isAuthenticated}=useSelector(state=>state.authState);

    const [userdata,setUserData]=useState({
        email:"",
        password:""
    });

    
    const onchageInput=(e)=>{
    setUserData({...userdata,[e.target.name]:e.target.value});
    
    };
    
    const onSubmit=(e)=>{
    e.preventDefault();
    dispatch(LoginAction(userdata));
    setUserData({})
  
    };

    useEffect(()=>{
       if(isAuthenticated){
      return navigate('/home')
 
       }
       if(error){
          toast(error,{
               position:"bottom-left",
               type:'error',
               onOpen:()=>dispatch(clearAuthError)
            })
          return;     

       }
      
    },[error,isAuthenticated,dispatch,navigate])
    
    
    return (
      <div className='login-container w-100 container-fluid d-flex align-items-start justify-content-center bg-light '  style={{height:'100dvh'}}>
        
         <section className='w-100 row justify-content-center'>
         <div className=' text-center p-0'>
         <p className='h1 text-primary p-0'>Shomo</p>
        </div>
         <div className='col-lg-8 col-xl-6 col-md-8 col-12 mt-5 py-2 '>
            <form encType='multi-part/form-data' className='reg-form py-2' onSubmit={onSubmit}>
                      <h2>Login</h2>
                    
                      <div className='form-group mt-1'>
                           <input className='form-control shadow-none' value={userdata.email} name='email' onChange={onchageInput} placeholder='enter email..'/>
                      </div>
                      <div className='form-group mt-2'>
                           <input className='form-control shadow-none' value={userdata.password} name='password' onChange={onchageInput} placeholder='enter password..'/>
                      </div>
 
                 <button type='submit' className='btn btn  btn-info mt-3 w-100'>
                    Login
                 </button>
              </form>
               <div className='d-flex align-items-center justify-content-between'>
               <Link to={'/register'} className='text-decoration-none text-success'>Create Account ?</Link> 
               <Link to={'/forget/password'} className='text-decoration-none text-end text-danger'>Forget password </Link>
               </div>
              
            </div>
              
           
         </section>
           
      </div>
    );

};

