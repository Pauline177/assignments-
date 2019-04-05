import React, { Component } from 'react'
import { storage } from '../firebase'


class ImageUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null,
            url: "",
            progress: 0,
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0]
            this.setState(() => ({ image }))
        }
    }

    handleUpload = () => {
        const { image } = this.state
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on('state_changed', (snapshot) => {
            const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            this.setState({progress})
             
            },(error) => { 
                console.log(error)

            },() => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url)
                    this.setState({url})
                })
            })
    }
  

    render() {
        return ( 
            <div> 
                <progress value={this.state.progress} max="100" />
                <input type="file" onChange={this.handleChange} ref={fileInput => this.fileInput = fileInput} />
                <button onClick={this.handleUpload}> Upload</button>
                <img src={this.state.url || "https://via.placeholder.com/200x200" } height="300" width="300" alt="uploaded image"  />
            </div>
        )
    }
}

export default ImageUpload 