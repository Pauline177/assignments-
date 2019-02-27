import React from 'react'

const Box = (props) => {
    return (<div>
        {props.allInfo.map((all, i) =>
            <div className="badge">
                <h1>Badge:</h1>
                <div className="answerBox">
                    <box>Name: {all.firstName} {all.lastName}</box>
                    <box>Email: {all.email}</box>
                    <box>Phone: {all.phone}</box>
                    <box>Place of birth: {all.birthPlace}</box>
                    <box>Favorite food: {all.favFood}</box>
                </div>
                <box className="aboutAnswer">{all.aboutYou}</box>
            </div>)}
    </div>
    )
}

export default Box