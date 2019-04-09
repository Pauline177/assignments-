import React, { Component } from 'react'
import PlacesForm from './PlacesForm.js'
import OnePlace from './OnePlace.js'
import { withAdmin } from '../context/adminProvider.js'
import { storage } from '../firebase'
import moment from 'moment'
class Places extends Component {
    constructor() {
        super()
        this.state = {
            vacinity: "",
            image1: null,
            image2: null,
            image3: null,
            imgUrl1: "",
            imgUrl2: "",
            imgUrl3: "",

            price: "",
            placeFormToggle: false,

        }
    }

   PostedAt= () => {
    moment().startOf('hour').fromNow()
   } 

    placeFormToggler = () => {
        this.setState(prevState => ({ placeFormToggle: !prevState.placeFormToggle }))
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
            const image1 = e.target.files[0]
            const image2 = e.target.files[0]
            const image3 = e.target.files[0]
            this.setState(() => ({ 
                image1: image1,
                image2: image2, 
                image3: image3 }), () => console.log(this.state.image1))
        }
    }



    handleSubmit = e => {
        e.preventDefault()
        const { image1, image2, image3 } = this.state
        this.props.addPlace(this.state)
        console.log(image1)

        
        const uploadTask = storage.ref(`images/${image1.name}`).put(image1)
        uploadTask.on('state_changed', (snapshot) =>  {
            const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            this.setState({ progress })

        }, (error) => {
            console.log(error)

        }, () => {
            storage.ref('images').child(image1.name).getDownloadURL().then(imgUrl1 => {
                console.log(imgUrl1)
                this.setState({ imgUrl1})
            })
        })

        this.setState({
            vacinity: "",
            imgUrl1: "",
            imgUrl2: "",
            imgUrl3: "",
            price: "",
            PostedAt: ""
        })
    }


    render() {
        
        const { vacinity, image, imgUrl1,imgUrl2, imgUrl3, price } = this.state

        
        return (
            <div className="places">
                upload pictures  of the available rooms.
                <button onClick={this.props.logout} className="logout"> Logout ☒</button>
                <div>
                    <button onClick={this.placeFormToggler} className="upload">Upload a new space ⇫</button>
                </div>
                <PlacesForm
                    vacinity={vacinity} imgUrl1={imgUrl1}  imgUrl2={imgUrl2}  imgUrl3={imgUrl3} price={price} image={image}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    placeFormToggle={this.state.placeFormToggle}
                    placeFormToggler={this.placeFormToggler}
                    handleUploadChange={this.handleUploadChange}
                    handleUploadSubmit={this.handleUploadSubmit}
                />
                <div className="mapping-div">
                {this.props.places.map(place => <OnePlace
                    vacinity={place.vacinity} imgUrl1={place.imgUrl1}  imgUrl2={place.imgUrl2}  imgUrl3={place.imgUrl3} price={place.price} PostedAt={this.PostedAt}
                    key={place._id} />)}

                </div>
                
            </div>
        )
    }
}

export default withAdmin(Places)