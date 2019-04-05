import React, {Component} from 'react'
import axios from 'axios'

const PostContext = React.creactContext()

postAxios.interceptors.request.use((config) => {
    const token = localStorage.token
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class PostProvider extends Component{
    constructor(){
        super()
        this.state = {
            posts: [],
        }
    }

    createPost = newPost => {
        postAxios.post("/api/posts", newPost).then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <PostContext.Provider 
            value={{
                ...this.state,
                createPost: this.createPost,
            }}>
                {this.props.children}
            </PostContext.Provider>
        )
    }
}

export default PostProvider

export const withPost = C => props => {
    <PostContext.Consumer>
        {value => <C  {...props} {...value}/>} 
    </PostContext.Consumer>
}