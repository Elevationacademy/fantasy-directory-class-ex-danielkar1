import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/fentity.css'


class Fentity extends Component {
    render() {
        const match = this.props.match
        
        const fentitiesCategory = match.params.fentities
        console.log(this.props)
        console.log(this.props.match)
        console.log(this.props.state)
        const name = match.params.name
        
        const fentity = this.props.state[fentitiesCategory].filter(f => {
            return f.name.toLowerCase() === name.toLowerCase()
        })[0]
        console.log(match)
        return (
            <div>
            <div id="creature-container">
                <h1>{fentity.name}</h1>
                <img src={fentity.imgUrl} alt=""/>
                <div className="title">Power:</div>
                <div className="power text"> {fentity.power}</div>
                <div className="other text">{fentity.other}</div>
            </div>
            <Link to={`/directory/${this.props.match.params.fentities}`}>Back</Link>
            </div>
        )
    }
}

export default Fentity;
