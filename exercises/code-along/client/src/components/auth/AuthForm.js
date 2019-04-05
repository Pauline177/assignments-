import React from 'react'

const AuthForm = props => {
    const { handleSubmit, handleChange, username, password, btnText } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    placeholder="Username"
                    required />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Password"
                    required />
                <button>{btnText}</button>
            </form>

        </div>
    )
}

export default AuthForm