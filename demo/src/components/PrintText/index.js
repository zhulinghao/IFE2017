import React from 'react';
import PropTypes from 'prop-types';

class PrintText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  componentDidMount() {
    const delayTime = this.props.delayTime || 0;
    setTimeout(() => {
      this.print();
    }, delayTime + 1000);
  }

  print() {
    const { text, speed } = this.props;
    let n = 0;
    let clock = setInterval(() => {
      n += 1
      this.setState({ text: text.substring(0, n) })
      if (n >= text.length) {
        window.clearInterval(clock);
      }
    }, speed);
  }
 
  render() {
    const { text } = this.state;
    return (
      <div style={{fontFamily: 'STZhongsong', fontSize: '18px'}}>
        ·{text}
      </div>
    );
  }
}
PrintText.propTypes = {
  text: PropTypes.string.isRequired,
  delayTime: PropTypes.number,
  speed: PropTypes.number
}
export default PrintText;