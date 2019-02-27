import React from 'react'

const BlogPost = (props) => {
    return (
        <div>
            <div className="post">
                <h2>{props.title}</h2>
                <h4>{props.subTitle}</h4>
                <h6>{props.date} </h6>
            </div>
        </div>
    )
}
export default BlogPost