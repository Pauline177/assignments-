import React from 'react'



const AddTodoForm = (props) => {
    const { title, description, imgUrl, handleChange, handleSubmit, text} = props
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={title} onChange={handleChange} placeholder="Name" />
            <input type="text" name="description" value={description} onChange={handleChange} placeholder="Describe how pretty it is" />
            <input type="text" name="imgUrl" value={imgUrl} onChange={handleChange} placeholder="Your image url" />
            <button> {text}</button>
        </form>


    )
}

export default AddTodoForm