import React, {Component} from 'react';

class ImageThumbnail extends Component {
    render() {
        const { thumbnailUrl } = this.props.imageData
        return (
            <div className="col-sm-4 col-md-3 col-lg-2">
                <img src={thumbnailUrl} width="100" height="100" />
            </div>
        );
    }
}

export default ImageThumbnail;
