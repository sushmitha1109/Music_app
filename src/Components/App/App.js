import logo from './logo.svg';
import './App.css';

import React from 'react';
import Playlist from './Playlist';
import Searchbar from './Searchbar';
import SearchResults from './SearchResults';
import Spotify from './Spotify';

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
  Spotify.search(term).then(SearchResults=>
    this.setState({
      SearchResults:SearchResults
    })
  );
}
addtrack(track){
let tracks = this.state.PlaylistTracks;
if(tracks.find(savedtrack.id === track.id)){
  return;
}
else
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
    Playlist:tracks
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
  saveplaylist(){
    const trackerUris=this.state.PlaylistTracks.map(track => trackerUris)
    Spotify.saveplaylist(this.playlistname,trackerUris).then(()=>
    this.setState({
      updateplaylistname:"New list",
      PlaylistTracks:[]
    })
    )
  }

  render() {
    return <div></div>;
  }
}


function App() {
  return (
    <div>
    <h1>
      <a href="https://localhost:3000">MusicApp</a>
      
    </h1>
    <div className='App'>
     <Searchbar onScearch={this.search}/>
     <div className='App-playlist'>
       <SearchResults searchResults={this.state.searchResults} onadd={this.dothese}/>
       <Playlist PlaylistTracks = {this.state.PlaylistTracks} onNamechange ={this.updateplaylistname} onRemove={this.removetrack} onSave={this.saveplaylist}/>

     </div>
    </div>
    </div>
  );
}

export default App;
