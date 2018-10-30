import React from 'react';
import './index.less';


class Chat extends React.Component {
  state = {
    name: 'chart'
  }
  render() {
    const { name } = this.state;
    return (
      <div className="chat_container">
        {name}
      </div>
    )
  }
}

export default Chat
