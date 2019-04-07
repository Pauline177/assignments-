import React, { Component } from 'react'
import AuthForm from '../AuthForm.js'
import { withAdmin } from '../../context/adminProvider.js'
import Navbar from './Navbar.js'
import Description from './Description.js'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            adminname: "",
            password: "",
            formToggle: false
        }
    }

    formToggler = () => {
        this.setState(prevState => ({ formToggle: !prevState.formToggle }))
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSignupSubmit = e => {
        e.preventDefault()
        const credentials = {
            adminname: this.state.adminname,
            password: this.state.password
        }
        this.props.signup(credentials)

        this.setState({
            adminname: "",
            password: ""
        })
    }

    handleLoginSubmit = e => {
        e.preventDefault()
        const credentials = {
            adminname: this.state.adminname,
            password: this.state.password
        }
        this.props.login(credentials)

        this.setState({
            adminname: "",
            password: ""
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="authBox">
                    {this.state.formToggle ?
                        <>
                            <span className="line">
                                <h2>Signup</h2> or 
                                <h2 onClick={this.formToggler}>Login</h2>
                            </span>

                            <AuthForm
                                adminname={this.state.adminname}
                                password={this.state.password}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSignupSubmit}
                                buttonText="signup"
                                placeholder="create admin name" />
                        </>
                        :
                        <>
                            <span className="line">
                            <h2 onClick={this.formToggler}>Signup</h2> or 
                            <h2>Login</h2>
                            </span>
                            
                            <AuthForm
                                adminname={this.state.adminname}
                                password={this.state.password}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleLoginSubmit}
                                buttonText="Login"
                                placeholder="enter admin name" />
                        </>
                    }
                </div>
                <Description  /> 
            </div>

        )
    }
}
export default withAdmin(Home)