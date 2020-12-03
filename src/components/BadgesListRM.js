import React from "react";

import './styles/BadgesList.css'


class BadgesList extends React.Component{
    render(){
        return (
            <ul className='list-unstyled'>
                {this.props.badges.map((badge)=>{
                    return (
                        <li className='BadgesListItem' key={badge.id}>
                            <img className='BadgesListItem__avatar' src={badge.image} alt="Avatar" />
                            <div className='ml-2'>
                                <p className='mb-0'><b>{badge.name}</b></p>
                                <a href='/'>@{badge.species}</a>
                                <p className='mb-0'>{badge.location.name}</p>
                            </div>
                        </li>
                    )
                })}
                
            </ul>
        )
    }
}

export default BadgesList