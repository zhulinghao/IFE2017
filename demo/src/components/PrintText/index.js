import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";

class PrintText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentWillMount() {
    const { speed, text } = this.props;
    this.handleDo(speed, text)
  }

  handleDo(speed, text) {
    let delayTime = 1000;
    text.forEach((item, index) => {
      setTimeout(() => {
        this.print(item, index);
      }, delayTime);
      delayTime = delayTime + speed * item.length;
    })
  }

  print(item, index) {
    const { speed } = this.props;
    let list = this.state.list;
    let n = 0;
    let clock = setInterval(() => {
      n += 1;
      list[index] = item.substring(0, n);
      this.setState({ list: list })
      if (n >= item.length) {
        window.clearInterval(clock);
      }
    }, speed);
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        {list.map((item, index) =>
          <div onClick={() => this.toSomeWhere()} style={{ fontFamily: 'STZhongsong', fontSize: '2.5vh' }} key={index}>
            ·{item}
          </div>
        )}
      </div>
    );
  }
}
PrintText.propTypes = {
  text: PropTypes.array.isRequired,
  delayTime: PropTypes.number,
  speed: PropTypes.number
}
export default withRouter(PrintText);