import React from 'react';
import TrackList from "../TrackList/TrackList";


class PlayList extends React.Component {
    constructor(props) {
        super(props)
    
        this.handleNameChange = this.handleNameChange.bind(this)
    }
    handleNameChange(event){
        this.props.onNamechange(event.target.value)

    }
    

    render() {
        return (
        <div className="Playlist">
            <input onChange={this.handleNameChange} defaultValue={"NewPlayList"}></input>
            <TrackList tracks = {this.props.PlayListTracks}
            isRemoval ={true}
            onRemove ={this.props.onRemove}></TrackList>
            <button className="Playlist-save" onClick={this.props.onsave}>Save to spotify</button>
        </div>
        )
    }
}


export default PlayList;