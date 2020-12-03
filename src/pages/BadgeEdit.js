import React from "react";
import {Route} from 'react-router-dom'


import "./styles/BadgeEdit.css"
import Header from "../images/platziconf-logo.svg"
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"
import PageLoading from "../components/PageLoading"
import api from "../api"

class BadgeEdit extends React.Component {
    state= {
        loading:true,
        error:null,
        form : {
            firstName:"",
            lastName:"",
            jobTitle:"",
            email:"",
            twitter:"",
        } 
    };

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading:true, error: null})
        try{
            const data =  await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading:false, form: data})
        }catch (error){
            this.setState({loading:false, error: error})
        }
    }

    handleChange = (e) => {
        const nextForm = this.state.form
        nextForm[e.target.name] = e.target.value;
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }
    handleSubmit= async (e) => {
        e.preventDefault()
        this.setState({loading:true, error: null })
        try{
            await api.badges.create(this.state.form)
            this.setState({loading:false})
            this.props.history.push("/badges")
        }catch(error){
            this.setState({loading:false, error: error })
        }
    }

    render(){
        if(this.state.loading){
            return <PageLoading/>
        }
        return(
            <React.Fragment>
                <div className='BadgeEdit__hero'>
                    <img className='img-fluid BadgeEdit__hero-image' src={Header} alt="Logo" />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Badge 
                            firstName={this.state.form.firstName || "FIRST_NAME"}
                            lastName={this.state.form.lastName || "LAST_NAME"}
                            jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                            twitter={this.state.form.twitter || "TWITTER"}
                            avatarUrl={this.state.form.email}
                            />
                            
                        </div>
                        <div className='col-6'>
                            <BadgeForm
                            title="Edit Attendant"
                            onSubmit={this.handleSubmit} 
                            onChange={this.handleChange} 
                            formValues={this.state.form}
                            error={this.state.error}
                            />
                        </div>
                    </div>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit;