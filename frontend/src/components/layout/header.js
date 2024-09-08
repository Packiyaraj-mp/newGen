import { Link, useNavigate } from "react-router-dom";
import {Image,Dropdown} from 'react-bootstrap';

export default function Header(){
  const navigate= useNavigate();
       return(
        <div className="nav-Header bg-light w-100 row ms-0 fixed-top " style={{height:'120px'}}>
          <div className="header-main-list col-12 d-flex">
            <div className="row w-100 m-0 mt-1">
               <div className="header-left-container col-md-3 col-6 ">
                      <div className="left-items h-100 d-flex align-items-center ">
                         <Link className="fs-1 text-dark d-md-none"
                          data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
                          aria-controls="offcanvasTop">
                         <ion-icon name="grid-outline"></ion-icon></Link> 
                         <span className="h1 logo-in-header ms-2">Shomo</span>
                      </div>
                </div>

                <div className="header-center-container d-none d-md-flex col-6">
                      <div className="center-items h-100  d-flex  align-items-center form-group w-100">
                         <input type="text" className="form-control shadow-none" placeholder="Search products.."/>
                      </div>
                </div>

                <div className="header-right-container col-md-3 col-6 ">
                 <div className="right-items h-100  d-flex align-items-center justify-content-end justify-content-md-center ">
                  <Dropdown className="m-0 ">
                     <Dropdown.Toggle  variant='default text-dark ' id='dropdown-basic'>
                     <Image src="/images/user-logo.png" className="profile-pic "/>
                     </Dropdown.Toggle>
                     <Dropdown.Menu>
                         <Dropdown.Item onClick={()=>navigate('/admin/dashboard')}>DashBoard</Dropdown.Item>
                         <Dropdown.Item>Profile</Dropdown.Item>
                         <Dropdown.Item>Orders</Dropdown.Item>
                         <Dropdown.Item>Logout</Dropdown.Item>
                     </Dropdown.Menu>
                    
                  </Dropdown>

                   
                
                   
                     <Link className="fs-4 d-flex d-md-none align-items-center
                                      text-dark  p-1 bg-white
                                      rounded-circle "
                                      data-bs-toggle="offcanvas"
                                      data-bs-target="#offcanvasTop"
                                      aria-controls="offcanvasTop">
                                     <ion-icon name="search-outline"></ion-icon>
                                    </Link>
                     <Link className="fs-4 d-flex align-items-center text-dark ms-3"><ion-icon name="cart-outline"></ion-icon></Link>
                </div>
                    
                </div>

             </div>  
          </div>

            <div className="header-category col-12 mt-1">
              <div className="header-category-container d-flex align-items-center justify-content-center row">
                 <ul className="header-category-list d-flex align-items-center justify-content-around col-md-6 col-12 ">
                  <li className="header-list-home ">Home </li>
                  <li className="header-list-Garden">Garden</li>
                  <li className="header-list-Kitchen">Kitchen</li>
                  <li className="header-list-Handmade">Handmade</li>
                  
                </ul>

                </div>
              
           </div>

       <div className="offcanvas offcanvas-top h-100 bg-light" data-bs-backdrop="false" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
       <div className="offcanvas-header">
         <h1 id="offcanvasTopLabel">Shomo</h1>
         <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
       <div className="offcanvas-body">
              ...
      </div>
      </div>
            
   </div>
       )
}