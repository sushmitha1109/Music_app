import TrackList from "../TrackList/TrackList";

import React from 'react';

class SearchResults extends React.Component {


    render() {
        return (
        <div className="SearchResults">
        <h1>Results</h1>
        <TrackList tracks = {this.props.SearchResults} onAdd={this.props.onAdd}></TrackList>
        </div>
        )
    }
}


export default SearchResults;