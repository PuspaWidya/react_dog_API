'react-redux'
import {React} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
  import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

import Dog from '../components/logo/dog.png'

function Navbar(){

    return(
         <>
         <div id="navbar">

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            {/* <a className= "text-white">Wellcome</a> */}
            <img id="doglogo" src={Dog}></img>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active text-white">
                <a class="nav-link" href="#">
                <Link className= "text-white"  to="/">Home</Link>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <Link className= "text-white"  to="/dogs">Show Dogs</Link>
                </a>      
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"> <Link className= "text-white"  to="/favorite">Favorite</Link></a>
            </li>
            </ul>   
            </div>
            </nav>
         </div>
            </>
  
    )
}

export default Navbar