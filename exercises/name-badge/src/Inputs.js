import React from 'react'

const Input = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
            <div className="inputs">
            <input type="text" name="firstName"  value={props.firstName}   onChange={props.handleChange} placeholder="First Name" />
            <input type="text" name="lastName"   value={props.lastName}    onChange={props.handleChange} placeholder="Last Name" />
            <input type="text" name="email"      value={props.email}       onChange={props.handleChange} placeholder="Email" />
            <input type="text" name="birthPlace" value={props.birthPlace}  onChange={props.handleChange} placeholder="Place of Birth" />
            <input type="text" name="phone"      value={props.phone}       onChange={props.handleChange} placeholder="Phone" />
            <input type="text" name="favFood"    value={props.favFood}     onChange={props.handleChange} placeholder="Favorite Food" />
            </div>
            <input className="aboutBox" type="text" name="aboutYou"   value={props.aboutYou}    onChange={props.handleChange} placeholder="Tell us about yourself..." />
            <button className="button"> SUBMIT</button>
            </form>
            
        </div>
    )
}


export default Input