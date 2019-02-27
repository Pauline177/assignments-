import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to='/'> /-----Main Body-----/ </Link>
            <Link to='/newbody'> \-----The New Body----\ </Link>
        </div>
    )
}

export default Header