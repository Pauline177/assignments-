import React from 'react'
import axios from 'axios'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            peopleList: []
        }
    }

    componentDidMount() {
        axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json").then(response => {
            this.setState({
                peopleList: response.data
            })
        }).catch(error => console.log(error))
    }

    render() {
        const mappedPeopleList = this.state.peopleList.map((item) => {
            return (
                <div>
                    <div className="box" key={item.id} style={{ backgroundImage: `url(${item.image})` }}>
                        <h1>{item.name} </h1>
                    </div>
                </div>
            )
        })

        return (
            <div className="container" >
                {mappedPeopleList}
            </div>
        )
    }


}

export default App