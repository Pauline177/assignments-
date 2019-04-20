import React from 'react'
const me = require('./me.png')

const Contact = () => {

    return (
        <div className="window">
            <div>
                <img src={me} />
            </div>

            <p>
                I love swimming, summer is my favorite season and I watch alot of movies.
                i have developed such a passion for coding to the level i would have never imagined.
            </p>
            <div>
                {/* <h1>Web developer</h1> */}
            </div>

        </div>
    )
}

export default Contact