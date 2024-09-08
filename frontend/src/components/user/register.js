
import { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { clearAuthError, registerAction } from '../../actions/userAction';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

export default function Register(){
    const navigate= useNavigate();
    const dispatch=useDispatch();
    const {error,isAuthenticated}=useSelector(state=>state.authState);
    const [userdata,setUserData]=useState({
        name:"",
        email:"",
        password:""
    });

    const [avatar,setAvatar]=useState('');
    const [previosImg,setPreviousImg]=useState('');
    
    const onchageInput=(e)=>{
    if(e.target.name==='avatar' && e.target.files.length!==0){
     const reader= new FileReader();
     reader.onload=()=>{
           if(reader.readyState===2){
                setPreviousImg(reader.result);
                setAvatar(e.target.files[0])
           }
     }
     reader.readAsDataURL(e.target.files[0])
    }else{
    setUserData({...userdata,[e.target.name]:e.target.value});
    
    }
    };
    
    const onSubmit=(e)=>{
    e.preventDefault();
    const formdata= new FormData();
    formdata.append('name',userdata.name);
    formdata.append('email',userdata.email);
    formdata.append('password',userdata.password);
    formdata.append('avatar',avatar);
     dispatch(registerAction(formdata))
    
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
      <div className='register-container w-100 container-fluid d-flex align-items-start justify-content-center bg-light '  style={{height:'100dvh'}}>
        
          <section className='w-100 row justify-content-center'>
          <div className=' text-center p-0'>
          <p className='h1 text-primary p-0'>Shomo</p>
         </div>
          <div className='col-lg-8 col-xl-6 col-md-8 col-12  mt-5 py-2 '>
             <form encType='multi-part/form-data' className='reg-form py-2' onSubmit={onSubmit}>
                       <h2>Register</h2>
                       <div className='form-group mt-1 '>
                            <input className='form-control shadow-none' name='name' onChange={onchageInput} placeholder='enter name..' />
                       </div>
                       <div className='form-group mt-1'>
                            <input className='form-control shadow-none' name='email' onChange={onchageInput} placeholder='enter email..'/>
                       </div>
                       <div className='form-group mt-1'>
                            <input className='form-control shadow-none' name='password' onChange={onchageInput} placeholder='enter password..'/>
                       </div>
  
                       <div className='form-group mt-1'>
                        <div className='d-flex align-items-center bg-light'>
  
                        <div className=' h-100  '>
                             <div className='register-avatar   '>
                                   <img src={previosImg?previosImg:'/images/user-logo.png'} className='rounded-circle ' alt='avatar'/>
                             </div>
                             
                        </div>
                         <div className='d-flex  align-items-center w-100'>
                         
                          <input type='file' 
                           name='avatar'
                           id='avatar-input'
                           className='form-control custom-avatar-input w-75 mx-3'
                           onChange={onchageInput}/>
  
                           <label htmlFor='avatar-input' className='d-md-flex d-none'>Add Profile</label>
                         </div>
  
                        </div>
                        <div>
                      </div>
             
                  </div>
                  <button className='btn btn  btn-info mt-4 w-100'>Register</button>
               </form>

               <Link to={'/'} className='text-decoration-none fs-6 '>Already have an account?</Link>
            

             </div>
               
            
          </section>
          
      </div>
    );

};

