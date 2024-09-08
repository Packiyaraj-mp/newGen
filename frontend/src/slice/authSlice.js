import {createSlice} from '@reduxjs/toolkit';

const authSlice=createSlice({
     name:'auth',
     initialState:{
         loading:false,
         isAuthenticated:false,
        
     },

     reducers:{
          registerRequest(state,action){
               return{
                   ...state,
                   loading:true
                }

          },
          registerSuccess(state,action){
            return{
                ...state,
                loading:false,
                isAuthenticated:true,
                user:action.payload.user

            }

          },
          regsiterFailure(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload

            }
              
          },

          loginRequest(state,action){
            return{
                ...state,
                loading:true
             }

          },

           loginSuccess(state,action){
           return{
             ...state,
             loading:false,
             isAuthenticated:true,
             user:action.payload.user

              }
           },

          loginFailure(state,action){
             return{
             ...state,
             loading:false,
             error:action.payload

            }
           },
       
          loadUserRequest(state,action){
              return{
                  ...state,
                  loading:true,
                  
              }
          },
          loadUserSuccess(state,action){
            return{
                ...state,
                loading:false,
                user:action.payload.user,
                isAuthenticated:true
            }
         },
          loadUserFailure(state,action){
            return{
                ...state,
                error:action.payload,
                notShowEle:true
                
             }
      },
     

      forgetPasswordRequest(state,action){
        return{
             ...state,
             loading:true,
             message:null
         }

      },

       forgetPasswordSuccess(state,action){
       return{
           ...state,
           loading:true,
           message:action.payload

          }
       },

      forgetPasswordFailure(state,action){
         return{
          ...state,
          loading:false,
          error:action.payload
        }
       },
       
      ResetPasswordRequest(state,action){
        return{
             ...state,
             loading:true,
             message:null
         }

      },

       ResetPasswordSuccess(state,action){
       return{
           ...state,
           loading:true,
           message:'Reset password success',
           user:action.payload.user

          }
       },

      ResetPasswordFailure(state,action){
         return{
          ...state,
          loading:false,
          error:action.payload
        }
       },
         authMessageClear(state,action){
            return{
                ...state,
                message:null
            }
         },

          clearError(state,action){
            return{
              ...state,
              error:null

            }
           
          }
     }
});

const {actions,reducer}=authSlice;

export const {registerRequest,
              registerSuccess,
              regsiterFailure,
              loadUserRequest,
              loadUserSuccess,
              loadUserFailure,
              loginRequest,
              loginSuccess,
              loginFailure,
              forgetPasswordRequest,
              forgetPasswordSuccess,
              forgetPasswordFailure,
              clearError,
              authMessageClear,
              ResetPasswordRequest,
              ResetPasswordSuccess,
              ResetPasswordFailure}=actions;

export default reducer;



