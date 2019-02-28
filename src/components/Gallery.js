import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import ImageThumbnail from './ImageThumbnail';
import Pagination from './Pagination';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      currentImages: [],
      currentPage: null,
      totalPages: null
    };
  }

  async componentDidMount() {
    const images = (await axios.get('https://jsonplaceholder.typicode.com/photos')).data;
    this.setState({
      images,
    });
  }

  onPageChanged = data => {
    const { images } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentImages = images.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentImages, totalPages });
  }

  render() {
        const { images, currentImages, currentPage, totalPages } = this.state;
        const totalImages = images.length;

        if (totalImages === 0) return null;

        const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();

        return (
            <div className="container mb-5">
                <div className="row d-flex flex-row py-5">

                 <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
                   <div className="d-flex flex-row align-items-center">

                     <h2 className={headerClass}>
                       <strong className="text-secondary">{totalImages}</strong> Images
                     </h2>

                     { currentPage && (
                       <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                         Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                       </span>
                     ) }

                   </div>

                   <div className="d-flex flex-row py-4 align-items-center">
                     <Pagination totalRecords={totalImages} pageLimit={30} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                   </div>
                 </div>
                 {this.state.images === null && <p>Loading Images...</p>}
                 {currentImages && currentImages.map(imageData => <ImageThumbnail key={imageData.id} imageData={imageData} />) }

                </div>
            </div>
        )
  }
}

export default Gallery;
