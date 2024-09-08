import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom"
import { clearAuthError, restPassword } from "../../actions/userAction";
import { toast } from "react-toastify";
import { authMessageClear } from "../../slice/authSlice";

export default function ResetPassword(){
   const {token}= useParams();
   const dispatch=useDispatch();
   const [password,setPassword]=useState('');
   const [confirmPassword,setChangePassword]=useState('');
   const navigate=useNavigate();

   const {error,message}=useSelector(state=>state.authState);
   
   const onSubmit=(e)=>{
        e.preventDefault();
       const form= new FormData();
       form.append('password',password);
       form.append('confirmPassword',confirmPassword);
     
       dispatch(restPassword(form,token));
       setChangePassword('');
       setPassword('');
   };

   useEffect(()=>{
        
         if(message){
           toast(message,{
               position:"bottom-left",
               type:"success",
               onOpen:()=>dispatch(authMessageClear())
           })
         }

         if(error){
          toast(error,{
               position:"bottom-left",
               type:"error",
               onOpen:()=>dispatch(clearAuthError)
           })

         }
   },[message,error,dispatch])



    return(
        <div className='register-container w-100 container-fluid d-flex align-items-start justify-content-center bg-light '  style={{height:'100dvh'}}>
        
         <section className='w-100 row justify-content-center'>
         <div className=' text-center p-0'>
         <p className='h1 text-primary p-0'>Shomo</p>
        </div>
         <div className='col-lg-8 col-xl-6 col-md-8 col-12 mt-5 py-2 '>
            <form encType='multi-part/form-data' className='reg-form py-2' onSubmit={onSubmit}>
                      <h2>Reset password</h2>
                    
                      <div className='form-group mt-1'>
                           <input className='form-control shadow-none' value={password} name='password' onChange={(e)=>setPassword(e.target.value)} placeholder='password..'/>
                      </div>
                      <div className='form-group mt-2'>
                           <input className='form-control shadow-none' value={confirmPassword} name='ChangePassword' onChange={(e)=>setChangePassword(e.target.value)} placeholder='confirm password..'/>
                      </div>
 
                 <button type='submit' className='btn btn  btn-info mt-3 w-100'>
                      Reset Password
                 </button>
              </form>
              <Link to={'/'} className='text-decoration-none'>Login here </Link> 
            </div>
         </section>
           
      </div>
    )
}