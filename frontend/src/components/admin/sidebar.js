import { Link, useNavigate } from "react-router-dom";
import {NavDropdown} from "react-bootstrap"
export default function Sidebar(){
   const navigate= useNavigate();
      return(
           <div className="sidebar-wrap bg-success  ">
            <nav id="sidebar">
                <ul className="list-unstyled componets">
                    <li>
                        <Link to={'/admin/dashboard'}> <ion-icon name="snow-outline"></ion-icon>Dashboard</Link>
                    </li>
                    <li>
                        <NavDropdown title={
                        <Link><ion-icon name="bag-remove-outline" ></ion-icon>Product</Link>  
                        } className="bg-white ">
                        <NavDropdown.Item  onClick={()=>navigate('/admin/products')}> <Link ><ion-icon name="bag-remove-outline" ></ion-icon>All</Link>  </NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>navigate('/admin/create')}><Link><ion-icon name="add-circle-outline"></ion-icon>Create</Link></NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li>
                        <Link to={'/admin/orders'}>  <ion-icon name="clipboard-outline"></ion-icon></Link>
                       
                    </li>
                    <li>
                        <Link to={'/admin/users'}>Users</Link>
                    </li>
                    <li>
                        <Link to={'/admin/reviews'}>Reviews</Link>
                    </li>
                   
                </ul>
            </nav>
           </div>
      )
}