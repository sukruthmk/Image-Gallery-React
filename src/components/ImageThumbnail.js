import React, {Component} from 'react';

class ImageThumbnail extends Component {

    constructor(props) {
      super(props);

      this.state = {
         isOpen: false,
         liked: false,
      };
    }

    handleShowDialog = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleLike = () => {
        this.setState({ liked: !this.state.liked });
    }

    onlyLiked = () => {
        if(this.props.filterLiked) {
            if(this.state.liked) {
                return true;
            }

            return false;
        }

        return true;
    }

    render() {
        const { thumbnailUrl, url } = this.props.imageData;
        const { filterLiked } = this.props;
        return (
            <React.Fragment>
                {this.onlyLiked() && (
                    <div className="col-sm-4 col-md-3 col-lg-2 marginTop24">
                        <div className="thumbnail-card-container card">
                            <div className="card-body">
                                <img className="image" src={thumbnailUrl} onClick={this.handleShowDialog} />
                            </div>
                            <div className="card-footer">
                                <div className="marginAuto textAlignRight">
                                    <i className={(this.state.liked ? 'fas' : 'far') + " fa-heart"} onClick={this.handleLike}></i>
                                </div>
                            </div>
                        </div>
                        {this.state.isOpen && (
                           <dialog
                            className="dialog"
                            open
                            onClick={this.handleShowDialog}
                            >
                            <img
                              className="image"
                              src={url}
                              onClick={this.handleShowDialog}
                            />
                          </dialog>
                        )}
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default ImageThumbnail;
