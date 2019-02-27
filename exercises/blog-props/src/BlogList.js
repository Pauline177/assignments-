import React from "react"
import BlogPost from './BlogPost.js'
import data from './Post.json'

class BlogList extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        const mappedPost = data.postInfo.map((post, i) => 
        <BlogPost 
            key={i}
            title={post.title} 
            subTitle={post.subTitle}
            date={post.date}    /> )

        return (
            <div>
            <div className="postList">
                {mappedPost}
            </div>
            </div>
        )
    }
}

export default BlogList