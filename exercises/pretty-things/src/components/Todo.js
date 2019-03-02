import React from 'react'

const Todo = (props) => {
    const { title, description, imgUrl } = props
    return (
        <div className="todoBox">
            <div>
                <h1>{title} </h1>
                <h3>{description}</h3>
            </div>
            <img className="image" src={imgUrl} alt="various content" />
        </div>
    )
}

export default Todo