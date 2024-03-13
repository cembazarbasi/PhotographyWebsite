import React from 'react'; 
import { Link } from "react-router-dom"
import "./Home.css"
import backgroundHomeImage from '../images/background-home.jpg';

export const Home = () => {
    return (
        <div className="page-container position-relative">
            <div className="content position-absolute top-50 start-50 translate-middle animated fadeIn">
                <div className="links d-flex justify-content-center align-items-center">
                    <div className="row">
                        <div className="about">
                            <Link className="about-text" to="/about">ABOUT</Link>
                        </div>
                    </div>
                    <div class="dropdown gallery">
                        <h4 className="dropdown-toggle gallery-text mb-0"  type="button" data-bs-toggle="dropdown"  aria-expanded="false">GALLERY</h4>
                        <ul className="dropdown-menu" style={{backgroundColor:"transparent", border:"none"}}>
                            <li><Link className="about-text" to="/black&white">Black and White</Link></li>
                            <li><Link className="about-text" to="/n.parks">National Parks</Link></li>                         
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}