import React from 'react';
import { Modal, Button, Input } from 'antd';
import uuidv1 from 'uuid/v1';

class HomeModal extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      visible: false,
      name: '',
      url: ''
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (data) => {
    this.props.addItem(data);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  onChangeUrl = (e) => {
    this.setState({
      url: e.target.value
    });
  }

  onChangeName = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    const { type } = this.props;
    const { url, name } = this.state;
    const data = {  type: type, item: { url: url, name: name, id: uuidv1() } };
    return (
      <div>
        <Button type="default" size="small" onClick={this.showModal}>
          添加
        </Button>
        <Modal
          title="Basic Modal"
          destroyOnClose={true}
          visible={this.state.visible}
          onOk={() => this.handleOk(data)}
          onCancel={this.handleCancel}
        >
          <Input placeholder="填写url" value={url} onChange={this.onChangeUrl} />
          <br /><br />
          <Input placeholder="填写name" value={name} onChange={this.onChangeName} />
        </Modal>
      </div>
    );
  }
}

export default HomeModal;


