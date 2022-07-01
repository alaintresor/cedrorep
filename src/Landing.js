import React from 'react';
// import Todo from "./Todo";

import mypicc from "./images/foo1.jpg";
// import mypic2 from "./images/me2.png";
// import * as FaIcons from "react-icons/fa";
import './main.css';
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';

const Landing = () => {
   
    return ( 

        
          <div className="row">

<br></br><br></br><br/><br/><br/>
              <div className='col-md-12 bio1'>
               <center><h2 className='wel'><b className='welcome'>welcame to My world ! coding for life!</b></h2><br/>
                <p>“Computers are fast; programmers keep it slow.” ( source) “When I wrote this code, only God and I understood what I did. Now only God knows.”
                   ( source) “A son asked his father (a programmer) why the sun rises in the east, and sets in the west.</p></center> 
              </div>
              <br/>
              {/* <div className='col-md-4 bio2'></div> */}
              


              {/* <Todo/> */}
              <br/><br/><br/> <div className="col-md-4">
               <center>
               <br/> <br/><br/><div className="photo"> <img src={mypicc} alt="" width={350} height={250}/>;  </div>
             </center>
              </div>
              <div className="col-md-4">
              <br/> <br/><br/>Hello My name is <b><i className='ix'>Cedrick Hakuzimana.</i> </b> 
              I'm happy to see you here. 
I am a Full-stack software engineer.
 I can convert any project idea into useful software,
  and I can help you to add new features to pre-existing software. <br/><br/>
  <i ><b className='ixx'>
  Collaborative, responsible, detail-oriented, and growth mindset are the top four adjectives that best define my aptitude towards work
              </b></i></div>
             
              <div className="col-md-4">
              <br/>  <br/><br/><h2 className='expx'>working Experiance</h2> 
           <p>i spend 3 years in coding, inaddition to different certificate from different trainings like TVET trainings, online certificates in differance programming languages </p>
            <button className='btn btn-success col-md-12' >more info</button>
              </div>
{/* <div className='col-md-12 bio'>
<center>
<br/><br/>  <div className="photo"> <img src={mypic} alt="" width={1100} height={450}/>;  </div>
             </center>

</div> */}


           
         
<br/><br/><br/><br/>           
<br/>
<br/><br/><br/> <br/><br/><br/>     <br/>  <br/>     <br/>      


<div className='col-md-12 bio'>
<center>
<Footer/>
             </center>

</div>


             
              
          
          </div>
        
     );
}
 
export default Landing;