import { useEffect, useState } from "react";
import { clearAuthError, forgetPassword } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { authMessageClear } from "../../slice/authSlice";
import { Link, useNavigate } from "react-router-dom";

export default function ForgetPassword(){
   const [email,setEmail]= useState("");
   const navigate=useNavigate();
   const {message,error,isAuthenticated}=useSelector(state=>state.authState)
   const dispatch=useDispatch("");


        const onchageInput=(e)=>{
           setEmail(e.target.value)
        };

        const onSubmit=(e)=>{
            e.preventDefault();
            const form=new FormData();
            form.append('email',email);
            dispatch(forgetPassword(form));
          
        };
        useEffect(()=>{
            
             if(message){
                 toast(message,{
                   position:'bottom-left',
                   type:'success',
                   onOpen:()=>dispatch(authMessageClear())
                 });
                 return;
             }
             if(error){
               toast(error,{
                 position:'bottom-left',
                 type:'error',
                 onOpen:()=>dispatch(clearAuthError)
               });
               return;
           }
        },[message,error,dispatch]);


         return(
            <div className='register-container w-100 container-fluid d-flex align-items-start justify-content-center bg-light '  style={{height:'100dvh'}}>
           
             <section className='w-100 row justify-content-center'>
             <div className=' text-center p-0'>
             <h1 className='text-primary p-0'>Shomo</h1>
            </div>
             <div className='col-lg-8 col-xl-6 col-md-8 col-12 mt-5 py-2 '>
                <form encType='multi-part/form-data' className='reg-form py-2' onSubmit={onSubmit}>
                          <h2>Forget password</h2>
                        
                          <div className='form-group mt-1'>
                               <input className='form-control shadow-none' name='email' onChange={onchageInput} placeholder='enter email..'/>
                          </div>
                        
     
                     <button type='submit' className='btn btn  btn-info mt-3 w-100'>
                           Send email
                     </button>
                  </form>
                  <Link to={'/'} className='text-decoration-none'>Login here </Link> 
             
                
                </div>
                  
               
             </section>
               
          </div>
         )
}