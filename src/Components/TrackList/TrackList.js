import Track from "../Track/Track";

import React from 'react';

class TrackList extends React.Component {

    render() {
        return (
        <div className="Tracklist">
            {this.props.tracks.map(track=>{

           
        <track
        track={track}
        key={track.id}
        onAdd={this.props.onAdd}
        isRemoval ={this.props.isRemoval}
        onRemove ={this.props.onRemove}
        >
        </track>
         })}
        </div>
        )
    }
}


export default TrackList;