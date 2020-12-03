import React from "react";
import {Link} from "react-router-dom";

import Gravatar from "../components/Gravatar"

import './styles/BadgesList.css'

function useSearchBadges(badges){
    // const [state, setState] =
    const [query, setQuery] = React.useState("")

    const [filteredBadges, setFilteredBadges] = React.useState(badges)

    React.useMemo(() => {
        const result = badges.filter(badge =>{
            return `${badge.firstName} ${badge.lastName}`
            .toLowerCase()
            .includes(query.toLowerCase())
        });

        setFilteredBadges(result)

    }, [badges, query])

    return { query, setQuery, filteredBadges }
}

function BadgesList(props){
    const badges= props.badges
    const [query, setQuery, filteredBadges] = useSearchBadges(badges)

    
        if(filteredBadges.length === 0){
            return(
                <div>
                    <div className="form-group">
                        <label>Filter Badges</label>
                        <input className="form-control" type="text"
                        value={query}
                        onChange={(e) =>{
                            setQuery(e.target.value)

                        }}
                        />
                    </div>
                    <h3>Any badge found</h3>
                    <Link to='/badges/new' className='btn btn-primary'>Create a new Badge</Link>
                </div>
            )
        }

        return (
            <div className='BadgesList'>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input className="form-control" type="text"
                    value={query}
                    onChange={(e) =>{
                        setQuery(e.target.value)

                    }}
                    />
                </div>
                <ul className='list-unstyled'>
                    {
                    filteredBadges.map((badge)=>{
                        return (
                            <li key={badge.id}>
                                <Link className='text-reset text-decoration-none' to={`/badges/${badge.id} `}>
                                    <div className='BadgesListItem'>    
                                        <Gravatar 
                                            className='BadgesListItem__avatar' 
                                            email={badge.email} 
                                            alt="Avatar" 
                                        />
                                        <div className='ml-2'>
                                            <p className='mb-0'><b>{badge.firstName} {badge.lastName}</b></p>
                                            <a href='/'>@{badge.twitter}</a>
                                            <p className='mb-0'>{badge.jobTitle}</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        )
}

export default BadgesList