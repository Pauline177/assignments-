import React from 'react'

const AuthForm = props => {
    const {adminname, password, handleChange, handleSubmit, buttonText, placeholder} = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="adminname" 
                value={adminname} 
                onChange={handleChange} 
                required 
                placeholder={placeholder} />

                <input 
                type="text" 
                name="password" 
                value={password} 
                onChange={handleChange} 
                required 
                placeholder="password" />
                <button> {buttonText}</button>
            </form>
        </div>
    )
}

export default AuthForm