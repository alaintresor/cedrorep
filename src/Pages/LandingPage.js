import Landing from "../Landing";
import NavBar from "../NavBar";
// import Footer from "../Footer";

import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
    return ( 
        <><NavBar/> 
        <div className="container-fluid">
        <div className="container">
            <div className="col-md-12">
               
            </div>
            

            <div className="col-md-12">
                <Landing/>
            </div></div>



        </div>
        </>
     );
}
 
export default Home;