import React from 'react'

const AuthForm = props => {
    const {adminname, password, handleChange, handleSubmit, buttonText, placeholder} = props
    return (
        <div >
            <form onSubmit={handleSubmit} className="authForm">
                <input 
                type="text" 
                name="adminname" 
                value={adminname} 
                onChange={handleChange} 
                required 
                placeholder={placeholder} />

                <input 
                type="password" 
                name="password" 
                value={password} 
                onChange={handleChange} 
                required 
                placeholder="password" />
                <button id="authFormButton"> {buttonText}</button>
            </form>
        </div>
    )
}

export default AuthForm