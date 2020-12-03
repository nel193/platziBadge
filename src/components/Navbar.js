import React from "react";
import {Link} from 'react-router-dom'
import "./styles/Navbar.css"
import Logo from "../images/logo.svg"

class Navbar extends React.Component {
    render(){
        return(
            <div className='Navbar'>
                <div className='container-fluid'>
                    <Link className='Navbar__brand' to="/">
                        <img className='Navbar__logo' src={Logo} alt="" />
                        <span className='font-weight-light'>Documenta</span>
                        <span className='font-weight-bold'>Kassel</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;