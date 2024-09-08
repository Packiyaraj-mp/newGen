import axios from "axios"
import { clearError, forgetPasswordFailure, forgetPasswordRequest, forgetPasswordSuccess, loadUserFailure, loadUserRequest, loadUserSuccess, loginFailure, loginRequest, loginSuccess, registerRequest, registerSuccess, regsiterFailure, ResetPasswordFailure, ResetPasswordRequest, ResetPasswordSuccess } from "../slice/authSlice";

export const registerAction= (userData)=>async(dispatch)=>{

     const config={
        headers:{
            'Content-type':'multipart/form-data'
        }

      };
      try{
        dispatch(registerRequest());

        const {data}=  await axios.post('/register',userData,config);
        dispatch(registerSuccess(data))
        
      }catch(err){
       dispatch(regsiterFailure(err.response.data.msg))

      }
      
};

export const LoginAction= (userData)=>async(dispatch)=>{


   try{
     dispatch(loginRequest());

     const {data}=  await axios.post('/login',userData);
  
     dispatch(loginSuccess(data));
     
   }catch(err){
    
    dispatch(loginFailure(err.response.data.msg))
  
   }
   
};

export const forgetPassword=(formData)=>async(dispatch)=>{
try{
  const config={
    headers:{
        "Content-type":"application/json"
    }
  };
 dispatch(forgetPasswordRequest());
 
 const {data}= await axios.post('/password/forget',formData,config);
 dispatch(forgetPasswordSuccess(data.message))


}catch(err){
 dispatch(forgetPasswordFailure(err.response.data.msg))
};
   
};


export const restPassword=(formData,token)=>async(dispatch)=>{
      
       try{
         const config={
            headers:{
              'Content-type':'application/json'
            }
          };
        dispatch(ResetPasswordRequest())
        const {data}= await axios.post(`/password/reset/${token}`,formData,config);
        dispatch(ResetPasswordSuccess(data))

         
       }catch(err){
        dispatch(ResetPasswordFailure(err.response.data.msg) )
       }
}



export const loadUser=(access)=>async(dispatch)=>{
  try{
    dispatch(loadUserRequest());
    const {data}= await axios.get('/getProfile');
    dispatch(loadUserSuccess(data))
  }catch(err){
  
      if(!access){
         return
      }

    dispatch(loadUserFailure(err.response.data.msg))
    
  }
  
}

export const clearAuthError=(dispatch)=>{
       dispatch(clearError());
}