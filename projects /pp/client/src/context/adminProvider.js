import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const AdminContext = React.createContext()

const dataAxios = axios.create()

dataAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class AdminProvider extends Component{
    constructor(){
        super()
        this.state = {
           admin: JSON.parse(localStorage.getItem("admin")) || {},
           token: localStorage.getItem("token") || "",
           errMsg: "",
           places: []


        }
    }
    
    signup = credentials => {
        console.log(credentials)
        axios.post("/adminauth/signup", credentials)
            .then(response => {
                const {admin, token, errMsg } = response.data

                localStorage.setItem("admin", JSON.stringify(admin))
                localStorage.admin = JSON.stringify(admin)
                localStorage.setItem("token", token)
                this.setState({
                    admin, 
                    token,
                    errMsg
                }, () => this.props.history.push("/places"))
            })
            .catch(err => this.setState({errMsg: err.response.data.errMsg}))
    }
    
    login = credentials => {
        console.log(credentials)
        axios.post("/adminauth/login", credentials)
            .then(response => {
                console.log(response)
                const {admin, token } = response.data

                localStorage.setItem("admin", JSON.stringify(admin)) 
                localStorage.setItem("token", token)
                this.setState({
                    admin, 
                    token
                }, () => this.props.history.push("/places"))
            })
            .catch(err => this.setState({errMsg: err.response.data.errMsg}))
    }

    logout = () =>{
        localStorage.removeItem("token")
        localStorage.removeItem("admin")
        this.setState({
            admin: {},
            token: "",
            places: []
        })

    }
   

    addPlace = newPlace => {
         console.log(newPlace)
        dataAxios.post("/api/places", newPlace)
        .then(response => {
            console.log(response.data)
            this.setState(prevState => ({
                places: [response.data, ...prevState.places]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    getAdminPlace = () => {
        dataAxios.get("/api/places")
        .then(response => {
            this.setState({
                places: response.data
            })
        })
        .catch(err => console.log(err.response.data.errMsg))
    }
    
    // deletePlace = () => {
    //     dataAxios.delete("/api/places/:_id").then(res => {
    //         event.target.p
    //     })
    // }

    render(){
        return(
            <AdminContext.Provider value={{
                ...this.state,
                signup: this.signup,
                login: this.login,
                addPlace: this.addPlace,
                getAdminPlace: this.getAdminPlace,
                logout: this.logout,  
            }} >
                {this.props.children}
            </AdminContext.Provider>
        )
    }
}

export default withRouter(AdminProvider)

export const withAdmin = C => props => (
    <AdminContext.Consumer>
        { value => <C {...props} {...value} />}
    </AdminContext.Consumer>
)