import React, { Component } from 'react' 
import mapbox from 'mapbox-gl'

class PlaceItem extends Component {

    goTo() {
        const app = this.props.app
        const map = app.state.map
        const place = this.props.place

        map.flyTo({
            center: [place.longidute, place.latitude],
            zoom: 10
        })
    }

    render() {
        const app = this.props.app
        const map = app.state.map
        
        const place = this.props.place

        if (map) {
            const popup = new mapbox.Popup({
                closeButton: false
            })

            popup.setHTML(place.name)

            const marker = new mapbox.Marker({
                color: '#2727e6'
            })

            marker.setLngLat([place.longidute, place.latitude])
            marker.setPopup(popup)

            marker.addTo(map)
        }

        return (
            <div className="place-item" onClick={() => this.goTo()}>
                {place.name} ({place.latitude} {place.longidute})
            </div>
        )
    }
}

export default PlaceItem   