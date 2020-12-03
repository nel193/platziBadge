import React from 'react';
import {Link} from 'react-router-dom'

import './styles/Home.css'
import confLogo from "../images/platziconf-logo.svg"
import Logo from "../images/astronauts.svg"


function Home(){
    return(
        <React.Fragment>
            <div className='Home'>
                <div className='Home__col col-12 col-md-6'>
                    <img className='img-fluid' src={confLogo} alt="platziConf-logo" />
                    <h1>Improve your future, creating your badge</h1>
                    <Link className='btn btn-primary' to="/badges/new">Take me to the future</Link>
                </div>
                <div className='Home__col col-12 col-md-6'>
                    <img className='img-fluid' src={Logo} alt="Logo Astronautas" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home