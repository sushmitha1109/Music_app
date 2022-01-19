import React from "react";
 
class Track extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             term :""
        }
        this.addTrack = this.addTrack.bind(this)
        this.removeTrack = this.removeTrack.bind(this)
        
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
                <button className="Track_action" onClick={this.removeTrack}>-</button>
            )
        }
        return(
            <button className="Track_action" onClick={this.addTrack}>+</button>
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
                 allowTransparency="true"
                 allow="encrypted_media"
                 title="preview"

                 />
                 <div>
                    {this.renderAction()}
                 </div>
             </div>
            </div>
        )
    }
}
export default Track;