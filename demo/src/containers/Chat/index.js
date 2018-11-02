import React from 'react';
import './index.less';
import { Input, Row, Col, Button, message } from 'antd';
import ChatList from './ChatList/index';
import io from 'socket.io-client';
let socket = null;

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'chart',
      notJoin: true,
      userName: '',
      sendVal: '',
      chatList: [],
      users: []
    }
  }
  componentWillMount() {
    socket = io.connect('localhost:3000');
  }
  componentDidMount() {
    // chat list
    socket.on('getList', (data) => {
      this.setState({ chatList: data })
    });
    // user
    socket.on('getUser', (data) => {
      this.setState({ users: data })
    })
  }
  
  componentWillUnmount() {
    const { userName } = this.state;
    socket.emit('signOut', userName);
  }
  // join
  handleJoin = () => {
    const { userName } = this.state;
    if (userName === '') {
      message.error('用户名不能为空');
      return
    };
    this.setState({ userName: userName, notJoin: false })
    socket.emit('clientJoin', userName);
  }
  // search value chage
  handleSendValChange = (e) => {
    this.setState({ sendVal: e.target.value })
  }
  // send
  handleSend = () => {
    const { sendVal, userName } = this.state;
    if (sendVal === '') {
      message.error('sendVal不能为空');
      return
    };
    this.setState({sendVal: ''});
    socket.emit('sendItem', { name: userName, content: sendVal });
  }
  // user name change
  handleUserNameChange = (e) => {
    this.setState({ userName: e.target.value })
  }

  render() {
    const { notJoin, userName, chatList, users, sendVal } = this.state;
    return (
      <div className="chat_wrapper">
        <div className="chat_block">
          <div className="chat_users">当前在线人数: {users.length}</div>
          <div className="chat_users">user: { users.map(item => item)}</div>
          {
            notJoin ?
              <Row gutter={15}>
                <Col span={7}>
                  <Input placeholder="请输入用户名" onPressEnter={this.handleJoin} onChange={this.handleUserNameChange}></Input>
                </Col>
                <Col span={5}>
                  <Button type="primary" onClick={this.handleJoin}>加入</Button>
                </Col>
              </Row> : <div className="chat_user_name">{userName}</div>
          }
          <ChatList notJoin={notJoin} chatList={chatList} />
          <div className="chat_send">
            <Row gutter={15}>
              <Col span={7}>
                <Input disabled={notJoin} value={sendVal}  onChange={this.handleSendValChange} onPressEnter={this.handleSend} placeholder="输入发言"></Input>
              </Col>
              <Col span={5}>
                <Button disabled={notJoin} type="primary" onClick={this.handleSend}>发送</Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default Chat
