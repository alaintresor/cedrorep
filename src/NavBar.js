import React from "react";
import { Link } from "react-router-dom";
import './main.css';
// import './subMain.css';
const NavBar = () => {
    return ( 


       
    <section className="header navbar">
     <center>  <div className="navbar">
            <table>
               <tr>
                     
                     <td><label id="logo_text"></label></td>
                 </tr>
            </table>
           <p className="pp"></p> <ul>

               <li><Link to="/">Home</Link> </li>
                
                {/* <li><Link to="/contact">About</Link> </li>
                 <li><Link to="/About">Contact</Link> </li> */}
                 <li><Link to="/Todo">To-do</Link> </li>
                 {/* <li><Link to="/Api">comments</Link> </li>
                 <li><Link to="/Countryapi">Country</Link> </li> */}
                 <li><Link to="/search">Update</Link> </li>
                 <li><Link to="/Login" id="admin_login">login</Link> </li>
            </ul>
</div></center>

</section>




     );
}
 
export default NavBar;