import React from "react";
import {Link} from 'react-router-dom'

import './styles/Badges.css'
import '../components/styles/BadgesList.css'

import confLogo from '../images/platziconf-logo.svg'
import BadgesList from "../components/BadgesList"
import PageLoading from "../components/PageLoading"
import MiniLoader from "../components/MiniLoader"
import PageError from "../components/PageError"
import Skeleton from "../components/Skeleton"




import api from "../api"


class Badges extends React.Component {
    state = {
        loading:true,
        error:null,
        data:undefined,
    }

    componentDidMount () {
        this.fetchData()
        this.intervalId = setInterval(this.fetchData, 5000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    fetchData = async () =>{
        this.setState ({ loading:true, error:null })

        try{
            const data = await api.badges.list();
            this.setState ({ loading:false, data: data })
        }catch(error){
            this.setState ({ loading:false, error:error })
        }
    }

    render(){
        if(this.state.loading === true && !this.state.data) {
            return (
                //  
            <PageLoading />

            )
        }
        if(this.state.error){
            return <PageError error={this.state.error}/>
        }
        return (
            <React.Fragment>
                <div className='Badges'>
                    <div className='Badges__hero'>
                        <div className='Badges__container'>
                            <img className='Badges__conf-logo' src={confLogo} alt="" />
                        </div>
                    </div>
                </div>

                <div className='Badges__container'>
                    <div className='Badges__buttons'>
                        <Link to="/badges/new" className='btn btn-primary'>
                            New Badge
                        </Link>
                    </div>
                    <div className='BadgesList'>
                        <BadgesList loading={this.state.loading} badges={this.state.data} />
                    {this.state.loading && (
                        <div className='d-flex justify-content-center'>
                            <MiniLoader />
                        </div>
                    )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges