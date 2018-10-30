import React from 'react';
import defaultPic from '@/assets/images/default.ico';

class ImageWithStatusText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageUrl: props.imageUrl };
  }
 
  handleImageLoaded() {
  }
 
  handleImageErrored() {
    this.setState({ imageUrl: defaultPic });
  }
 
  render() {
    const { imageUrl } = this.state;
    return (
      <img
        src={imageUrl}
        onLoad={this.handleImageLoaded.bind(this)}
        onError={this.handleImageErrored.bind(this)}
        alt="not found"
        />
    );
  }
}
export default ImageWithStatusText;