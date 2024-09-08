import { Fragment } from "react";
import Header from "../layout/header";
import Sidebar from "./sidebar";
import { Link, useNavigate } from "react-router-dom";
import {NavDropdown} from "react-bootstrap";
export default function Dashboard(){
 const navigate=useNavigate();
      
       return(
        <Fragment>
            <Header/>
            <div className="dashBoard-container container-fluid p-0 bg-success ">
                <div className="row bg-white">
                <div className="sideBar-box col-12 col-md-2 ">
                <nav id="sidebar">
                <ul className="list-unstyled componets ">
                    <li>
                        <Link to={'/admin/dashboard'}> <ion-icon name="snow-outline"></ion-icon>Dashboard</Link>
                    </li>
                    <li>
                        <NavDropdown title={
                        <Link><ion-icon name="bag-remove-outline" ></ion-icon>Product</Link>  
                        } >
                        <NavDropdown.Item  onClick={()=>navigate('/admin/products')}> <Link ><ion-icon name="bag-remove-outline" ></ion-icon>All</Link>  </NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>navigate('/admin/create')}><Link><ion-icon name="add-circle-outline"></ion-icon>Create</Link></NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li>
                        <Link to={'/admin/orders'}><ion-icon name="clipboard-outline"></ion-icon>Orders</Link>
                    </li>
                    <li>
                        <Link to={'/admin/users'}><ion-icon name="person-outline"></ion-icon>Users</Link>
                    </li>
                    <li>
                        <Link to={'/admin/reviews'}><ion-icon name="star-half-outline"></ion-icon>Reviews</Link>
                    </li>
                   
                </ul>
            </nav>
         </div>


                <div className="dash-board-box col-12 col-md-10">
                        <h1>hgreghhhjdksdhsdkfjf</h1>
                        <h1>hgreghhhjdksdhsdkfjf</h1>
                        <h1>hgreghhhjdksdhsdkfjf</h1>
                        variantv
                        variantv
                        variantv
                        variantv
                        variantv
                        variantv
                        variant <h1>hgreghhhjdksdhsdkfjf</h1>
                        <h1>hgreghhhjdksdhsdkfjf</h1>
                        v
                        <h1>hgreghhhjdksdhsdkfjf</h1>
                        <h1>hgreghhhjdksdhsdkfjf</h1>
                        variantv
                        <h1>hgreghhhjdksdhsdkfjf</h1>
                        <h1>hgreghhhjdksdhsdkfjf</h1>
                        <h1>hgreghhhjdksdhsdkfjf</h1>
                        <h1>hgreghhhjdksdhsdkfjf</h1>

               </div>

               </div>
                  
            </div>

        </Fragment>
       
          
       )
}