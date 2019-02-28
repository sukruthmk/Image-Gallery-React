import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: null,
    };
  }

  async componentDidMount() {
    const images = (await axios.get('https://jsonplaceholder.typicode.com/photos'));
    this.setState({
      images,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.images === null && <p>Loading Images...</p>}
        </div>
      </div>
    )
  }
}

export default Gallery;
