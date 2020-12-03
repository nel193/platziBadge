import React from "react";

import "../components/styles/Badge.css"
import confLogo from "../images/badge-header.svg"
import Gravatar from "./Gravatar"

class Badge extends React.Component{
    render(){
        return(
            <div className='Badge'>
                <div className='Badge__header'>
                    <img src={confLogo} alt="Logo de la Documenta" />
                </div>
                <div className='Badge__section-name'>
                    <Gravatar 
                        className='Badge__avatar' 
                        email={this.props.avatarUrl}
                        alt="Avatar" 
                    />
                    <h1>
                        {this.props.firstName} <br/>{this.props.lastName}
                    </h1>
                </div>
                <div className='Badge__section-info'>
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className='Badge__footer'>
                    #DocumentaKassel
                </div>
            </div>
        )
    }
}

export default Badge;