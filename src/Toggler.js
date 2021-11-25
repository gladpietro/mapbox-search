import React, { Component } from 'react' 
import './Toggler.css'

class Toggler extends Component {

    setLayer(url) {
        this.props.app.setState({
            style: url
        })
    }

    render() {

        const styles = [
            { name: "satellite", url:"mapbox://styles/mapbox/satellite-streets-v11" },
            { name: "Dark", url: "mapbox://styles/mapbox/dark-v11" },
            { name: "Light", url: "mapbox://styles/mapbox/light-v11" }
        ]
    
        const buttons = styles.map((style, index) => {

            let className = ""

            if (style.url === this.props.app.state.style) {
                className = "selected"
            }

            return <button className={className} key={index} onClick={() => this.setLayer(style.url)}>
                {style.name}
                </button>
        })

        return(
            <div className="toggler">
                {buttons}
                {/* {this.props.app.state.style} */}
            </div>
        )
    }
}

export default Toggler