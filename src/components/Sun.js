import React, {Component} from "react";
//Data & Key to Access Flickr
import Config from "./Config";
import axios from "axios";

import PhotoContainer from './PhotoContainer';

export default class Stars extends Component{
  constructor(){
    super();
    this.state = {
      sunshine: [],
      uploading: true
    };
  }

componentDidMount(){
  this.findFlickrData("Sun+rise+set"); //Initial image display
}

findFlickrData = (query) => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Config}&tags=${query}&safe_search=&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        sunshine: response.data.photos.photo,
        uploading: false
      })
      console.log("Here Comes the Sun"); //Testing123
    })
    .catch(error => {
      console.log(error);
    })
}

  render(){
    return (
        <div>
        <h2>"Keep your face to the sun and you will never see the shadows"</h2>
        
         {
           (this.state.uploading)
           ? <p>★Uploading Galaxy★</p>
           : <PhotoContainer data={this.state.sunshine} />
         }          
        </div>     
    );
  }
}