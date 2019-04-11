import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import './styling/app.css'
import Me from './components/Me.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Resume from './components/Resume.js'
import Zen from './components/Zen.js'
import Car from './components/Car.js'
import Park from './components/Park.js'
import WhereWork from './components/WhereWork.js'
import Todo from './components/Todo.js'
import { SocialIcon} from 'react-social-icons'

const App = () => {

    return (
        <div className="app">
            <div className="all">

                <div className="name">
                    <h1> PAULINE MAKOMA</h1>
                </div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Me} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Resume" component={Resume} />
                    <Route path="/Zen" component={Zen} />
                    <Route path="/Car" component={Car} />
                    <Route path="/Park" component={Park} />
                    <Route path="/Todo" component={Todo} />
                    <Route path="/WhereWork" component={WhereWork} />
                </Switch>
                <div className="icons">
                    <SocialIcon className="icon" url="https://www.linkedin.com/in/pauline-makoma/" />
                    <SocialIcon className="icon" url="https://github.com/Pauline177" />
                    <SocialIcon className="icon" url="https://www.instagram.com/paldym/" />
                </div>
            </div>
        </div>
    )
}

export default App