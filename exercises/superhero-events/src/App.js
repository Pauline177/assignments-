import React from 'react'
import Hero from './Hero.js'
import data from './superHeroes.json'

class App extends React.Component {
    constructor() {
        super()
    }

    handleClick = (phrase) => {
        alert(phrase)
    }
    

    render() {
        const mappedSuperHero = data.superHeroes.map((hero, i) =>
            <Hero
                key={i}
                phrase={hero.phrase}
                name={hero.name}
                image={hero.imgurl}
                handleClick={this.handleClick}
            />)
        return (
            <div>
                {mappedSuperHero}
            </div>
        )
    }
}

export default App