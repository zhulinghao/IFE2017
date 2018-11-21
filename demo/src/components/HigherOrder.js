import React, { Component } from 'react';


const LoadAndRefresh = (url) => (WrappedComponent) => {
  return class extends Component {
    state = {
      content: ''
    }
    componentWillMount() {
      this._loadData();
    }
    _loadData() {
      this.setState({ content: '数据加载中...' })
      setTimeout(() => {
        this.setState({ content: 'this.state.content' })
      }, 500);
    }
    render() {
      const { content } = this.state;
      const props = {
        content: content,
        refresh: this._loadData.bind(this),
        ...this.props
      }
      return <WrappedComponent {...props} />
    }
  }
}

class Post extends Component {
  render () {
    return (
      <div>
        <p>{this.props.content}</p>
        <button onClick={() => this.props.refresh()}>刷新</button>
      </div>
    )
  }
}

Post = LoadAndRefresh('/post')(Post)

export default Post;