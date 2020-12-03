import React from "react";
import {Link} from 'react-router-dom'

import './styles/Badges.css'
import '../components/styles/BadgesList.css'

import confLogo from '../images/platziconf-logo.svg'
import BadgesList from "../components/BadgesList"


class Badges extends React.Component {
    // state = {
    //     data:{
    //         results:[],
    //     }
    // }

    constructor(props){
        super(props);
        console.log('1. constructor()')
        this.state={
            nextPage:1,
            loading:true,
            data:{
                results:[],
            },
            error:null,
        }
    }
    
    componentDidMount(){
        console.log("3. componentDidMount")
        // this.timeoutId = setTimeout(()=>{
            this.fetchCharacters()
            // }, 3000)        
        }
        
        // rickAndMortyApi ='https://rickandmortyapi.com/api/character/'
        fetchCharacters = async () => {
            this.setState({loading:true, error:null})
            try{
                const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
                const data = await response.json();
                this.setState({
                    loading:false,
                    data: {
                        info: data.info,
                        results: [].concat(
                            this.state.data.results, data.results
                        ),
                    },
                    nextPage: this.state.nextPage + 1,
                })
            } catch(error){
                this.setState({loading:false, error:error})
            }
        }

    componentDidUpdate(prevProps, prevState){
        console.log("5. componentDidUpdate()")
        console.log({
            prevProps: prevProps,
            prevState: prevState,
        })
        console.log({
            props: this.props.state,
            state: this.state,
        })
    }

    componentWillUnmount(){
        console.log('6. componentWillUnmount()')
        // clearTimeout(this.timeoutId)
    }

    render(){
        console.log('2/4. render')
        {if(this.state.error){
            return `Error ${this.state.error.message}`
        }}
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
                        <BadgesList badges={this.state.data.results} />
                    </div>
                </div>
                {this.state.loading && (
                    <div>
                        <h1>Este es tu loader por ahora</h1>
                    </div>
                )}
                {!this.state.loading && (
                    <div className="d-flex justify-content-center my-5">
                        <button onClick={() => this.fetchCharacters()} className='btn btn-primary'>
                            Carga mas amiguitos
                        </button>
                    </div>
                )}
            </React.Fragment>
        )
    }
}

export default Badges

/*this.setState({
                data:[
                    {
                        id:"2de30c42-9deb-40fc-a41f-05e62b5939a7",
                        firstName:"Freda",
                        lastName:"Grady",
                        email:"Leann_Berge@gmail.com",
                        jobTitle:"Legacy Brand Director",
                        twitter:"FredaGrady22221-7573",
                        avatarUrl:
                        "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                    },
                    {
                        id:"d00d3614-101a-44ca-b6c2-0be075aeed3d",
                        firstName:"Major",
                        lastName:"Rodriguez",
                        email:"Ilene66@hotmail.com",
                        jobTitle:"Human Research Architect",
                        twitter:"MajorRodriguez61545",
                        avatarUrl:
                        "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                    },
                    {
                        id:"63c03386-33a2-4512-9ac1-354ad7bec5e9",
                        firstName:"Daphney",
                        lastName:"Torphy",
                        email:"Ron61@hotmail.com",
                        jobTitle:"National Markets Officer",
                        twitter:"DaphneyTorphy96105",
                        avatarUrl:
                        "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                    }
                ],
            })*/