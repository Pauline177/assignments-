import React, { Component } from 'react'
import PlacesForm from './PlacesForm.js'
import OnePlace from './OnePlace.js'
import {withAdmin} from '../context/adminProvider.js'
import {storage} from '../firebase'

class Places extends Component {
    constructor() {
        super()
        this.state = {
            vacinity: "",
            image: null,
            imgUrl: "",

            price: "",
            PostedAt: "",
            placeFormToggle: false,

        }
    }

    placeFormToggler = () => {
        this.setState(prevState => ({placeFormToggle: !prevState.placeFormToggle}))
    }

    componentDidMount = () => {
        this.props.getAdminPlace()
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleUploadChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0]
            this.setState(() => ({ image }))
        }
    }

    

    handleSubmit = e => {
        e.preventDefault()

        this.props.addPlace(this.state)
        this.setState({
            vacinity: "",
            // imgUrl: "",
            price: "",
            PostedAt: ""
        })

        const { image } = this.state
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on('state_changed', (snapshot) => {
            const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            this.setState({progress})
             
            },(error) => { 
                console.log(error)

            },() => {
                storage.ref('images').child(image.name).getDownloadURL().then(imgUrl => {
                    console.log(imgUrl)
                    this.setState({imgUrl})
                })
            })
    }


    render() {
        const {vacinity,image, imgUrl, price, PostedAt} = this.state
        return (
            <div>
                upload pictures  of the available rooms.
                <PlacesForm 
                vacinity={vacinity} imgUrl={imgUrl} price={price} PostedAt={PostedAt} image={image}
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit} 
                placeFormToggle={this.state.placeFormToggle}
                placeFormToggler={this.placeFormToggler} 
                handleUploadChange={this.handleUploadChange}
                handleUploadSubmit={this.handleUploadSubmit}
                /> 

                {this.props.places.map(place => <OnePlace 
                vacinity={place.vacinity} imgUrl={place.imgUrl} price={place.price} PostedAt={place.PostedAt}
                key={place._id} />)}

            </div>
        )
    }
}

export default withAdmin(Places)