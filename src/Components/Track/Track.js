import React from "react";
 
class Track extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             term :""
        }
        this.addtrack = this.addtrack.bind(this)
        this.removetrack = this.removetrack.bind(this)
        
    }
    addtrack(event){
        this.props.onAdd(this.props.track)
    }
    removetrack(){
        this.props.onRemove(this.state.track)
    }
    renderAction(){
        if(this.track.isRemoval){
            return(
                <button className="Track_action" onClick={this.removetrack}>-</button>
            )
        }
        return(
            <button className="Track_action" onClick={this.addtrack}>+</button>
        )
    }
    
    render(){
        return(
            <div className="Track">
             <div className="Track-information">
                 <h3>
                     {this.props.track.name}
                 </h3>
                 <p>
                     {this.props.track.album} | {this.props.track.artist}
                 </p>
                 <iframe src={"https://open.spotify.com/embed/track"+this.props.id}
                 height="80"
                 width="300"
                 frameborder="0"
                 />
                 <div>
                    {this.renderAction()}
                 </div>
             </div>
            </div>
        )
    }
}
export default SearchBar;