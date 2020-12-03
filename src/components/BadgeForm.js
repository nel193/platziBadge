import React from "react"

class BadgeForm extends React.Component {
    state={};

    // handleChange= (e) => {
    //     // console.log({ 
    //     //     name: e.target.name,
    //     //     value: e.target.value
    //     //     })

    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }

    handleClick= (e) => {
        console.log("Button was clicked")
    }

    // handleSubmit= (e) => {
    //     e.preventDefault();
    //     console.log("Form wasnt submitted")
    //     console.log(this.state)
    // }
    
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input value={this.props.formValues.firstName} onChange={this.props.onChange} className='form-control' type="text" name='firstName' />
                    </div>
                    <div className='form-group'>
                        <label>Last Name</label>
                        <input value={this.props.formValues.lastName} onChange={this.props.onChange} className='form-control' type="text" name='lastName' />
                    </div>
                    <div className='form-group'>
                        <label>E-Mail</label>
                        <input value={this.props.formValues.email} onChange={this.props.onChange} className='form-control' type="email" name='email' />
                    </div>
                    <div className='form-group'>
                        <label>Job Title</label>
                        <input value={this.props.formValues.jobTitle} onChange={this.props.onChange} className='form-control' type="text" name='jobTitle' />
                    </div>
                    <div className='form-group'>
                        <label>Twitter</label>
                        <input value={this.props.formValues.twitter} onChange={this.props.onChange} className='form-control' type="text" name='twitter' />
                    </div>
                    <button onClick={this.handleClick} onSubmit={this.props.onSubmit} className='btn btn-primary'>
                        Save
                    </button>
                    {
                        this.props.error &&(
                            <p className='text-danger'>{this.props.error.message}</p>
                        )
                    }
                </form>
            </div>
        )
    }
}

export default BadgeForm;