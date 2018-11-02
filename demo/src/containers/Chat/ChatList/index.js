import React from 'react';
import { List, Avatar } from 'antd';
import './index.less';

const TheList = ({ chatList }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={chatList}
      renderItem={item => (
        item.type !== 'message' ?
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=390947329,3335162149&fm=26&gp=0.jpg" />}
            title={item.name}
            description={item.content}
          />
        </List.Item>
        : <div className="chat_message"><span>{item.message}</span></div>
      )}
    />
  )
}

const ChatList = ({ notJoin, chatList }) => {
  return (
    <div className="chat_list">
      {notJoin ? <div style={{ marginTop: '15px' }}>加入后即可发言</div> : <TheList chatList={chatList} />}
    </div>
  )
}

export default ChatList;