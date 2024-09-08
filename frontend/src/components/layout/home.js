import { Fragment, useEffect } from "react";
import Header from "./header";
import {useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
export default function Home(){
      const navigate= useNavigate()
      const {error,isAuthenticated}=useSelector(state=>state.authState);

      useEffect(()=>{
         
           if(!isAuthenticated){
              return navigate('/')
           }
      },[isAuthenticated,navigate])
      return(
          <Fragment>
            {isAuthenticated &&  <div className="home-container">
              <Header/>
              
           </div>
             }
           

          </Fragment>
           

        
        
      )
}