import React from 'react';
import './App.css';

import Playlist from '../PlayList/PlayList';
import Searchbar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../util/Spotify';

class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    SearchResults : [],
    Playlist :"new playlist",
    PlaylistTracks :[]

  };
  this.search = this.search.bind(this);
  this.addtrack = this.addtrack.bind(this);
  this.removetrack = this.removetrack.bind(this)
  this.updateplaylist = this.updateplaylist.bind(this);
  this.saveplaylist = this.saveplaylist.bind(this);
  this.removetracksearch = this.removetracksearch.bind(this);
  this.dothese = this.dothese.bind(this);
}
search(term){
  Spotify.search(term).then(SearchResults=>{
    this.setState({SearchResults:SearchResults})
  });
}
addtrack(track){
let tracks = this.state.PlaylistTracks;
if(tracks.find(savedTrack => savedTrack.id === track.id)){
  return;
}
  tracks.push(track)
  this.setState({
    PlaylistTracks:tracks
  })
}
removetrack(track)
{
  let tracks = this.state.PlaylistTracks;
  let trackSearch = this.state.SearchResults
  tracks = tracks.filter(currenttrack => currenttrack.id!==track.id)
  trackSearch.unshift(track)
  this.setState({
    PlaylistTracks:tracks
  })
}
removetracksearch(track){
  let tracks = this.state.SearchResults
  tracks=tracks.filter(currenttrack=>currenttrack.id !==track.id)
  this.setState({
    SearchResults:tracks
  })
}
  dothese(track){
    this.addtrack(track)
    this.removetracksearch(track)
  }
  updateplaylistname(name){
    this.setState({
      updateplaylistname : name
    })
  }
  savePlaylist(){
    const trackeUris=this.state.PlaylistTracks.map(track => track.uri)
    Spotify.savePlaylist(this.state.playlistName,trackeUris).then(()=>{
      this.setState({
        updatePlaylistName:"New list",
        PlaylistTracks:[]
      })
    }
    )
  }

}


function aspp() {
  return (
    <div>
    <h1><a href="https://localhost:3000">MusicApp</a></h1>
    <div className='App'>
     <Searchbar onScearch={this.search}/>
     <div className='App-playlist'>
       <SearchResults searchResults={this.state.searchResults} onAdd={this.dothese}/>
       <Playlist PlaylistTracks = {this.state.PlaylistTracks} onNamechange ={this.updateplaylistname} onRemove={this.removetrack} onSave={this.savePlaylist}/>

     </div>
    </div>
    </div>
  );
}

export default App;
