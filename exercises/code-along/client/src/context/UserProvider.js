import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const UserContext = React.createContext()

class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.token || "",
            errMsg: "",
        } 
    }

    signup = credentials => {
        axios.post("/auth/signup", credentials).then(res => {
            const { user, token } = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            this.setState({user, token, errMsg: ""}, this.props.history.push("/home"))
        })
        .catch(err => this.handleErr(err.response.data.errMsg))

    }

    login = credentials => {
        axios.post("/auth/login", credentials).then(res => {
            const { user, token } = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            this.setState({user, token, errMsg: ""}, this.props.history.push("/home"))
        })
        .catch(err => this.handleErr(err.response.data.errMsg))
    }

    handleErr = errMsg => this.setState({ errMsg })
    

    render(){
        return(
            <UserContext.Provider 
            value={{
               ...this.state,
               signup: this.signup,
               login: this.login
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default withRouter(UserProvider)

export const withUser = C => props => (
    <UserContext.Consumer>
        {value => <C {...props} {...value} /> }
    </UserContext.Consumer>
)