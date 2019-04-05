import React, { Component } from 'react'
import AuthForm from './AuthForm.js'
import { withUser } from '../../context/UserProvider.js'


class AuthContainer extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            authToggle: false
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            authToggle: !prevState.authToggle
        }))
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignup = e => {
        e.preventDefault()

        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.signup(credentials)
    }

    handleLogin = e => {
        e.preventDefault()

        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(credentials)
    }


    render() {
        return (
            <div>
                {this.state.authToggle
                    ?
                    <>
                        <h3>Signup</h3>
                        <AuthForm
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSignup}
                            username={this.state.username}
                            password={this.state.password}
                            btnText="Signup" />

                        <p style={{color: 'firebrick'}}>{this.props.errMsg}</p>
                        <p onClick={this.toggler}>alredy a user?</p>
                    </>
                    :
                    <>
                        <h3>login</h3>
                        <AuthForm
                            handleChange={this.handleChange}
                            handleSubmit={this.handleLogin}
                            username={this.state.username}
                            password={this.state.password}
                            btnText="Login" />

                        <p style={{color: 'firebrick'}}>{this.props.errMsg}</p>
                        <p onClick={this.toggler}>not a registered user</p>
                    </>
                }
            </div>
        )
    }
}


export default withUser(AuthContainer)