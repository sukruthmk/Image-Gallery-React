import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import ImageThumbnail from './ImageThumbnail';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: null,
    };
  }

  async componentDidMount() {
    const images = (await axios.get('https://jsonplaceholder.typicode.com/photos')).data;
    this.setState({
      images,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
        {this.state.images === null && <p>Loading Images...</p>}
        <div className="col-md-12">
            <div className="row">
                {
                    this.state.images && this.state.images.map((imageData, index) => (
                        <div className="col-sm-4 col-md-3 col-lg-2">
                            <ImageThumbnail imageData={imageData} />
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Gallery;
