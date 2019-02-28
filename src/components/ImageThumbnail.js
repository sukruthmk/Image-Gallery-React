import React, {Component} from 'react';

class ImageThumbnail extends Component {
    render() {
        const { thumbnailUrl } = this.props.imageData
        return (
            <img src={thumbnailUrl} width="100" height="100" />
        );
    }
}

export default ImageThumbnail;
