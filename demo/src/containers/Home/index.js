import React from 'react';
import './index.less';
import HomeNav from './HomeNav/index';
import Index from './Index/index';
import Skill from './Skill/index';
import Project from './Project/index';
import Intro from './Intro/index';

// 获取当前时间戳
function _now() {
  return +new Date()
}
let preScrollTime = null;

class Home extends React.Component {
  state = {
    index: 0,
    startY: null
  }
  componentDidMount() {
    this.handleLink(this.state.index);
    //  注册事件
    document.addEventListener('mousewheel', this.scrollFunc, false);
    document.addEventListener("touchstart", this.touchStart, false);
    document.addEventListener("touchend", this.touchEnd, false);
  }
  componentWillUnmount() {
    // 当组件销毁的时候，移除注册的事件
    document.removeEventListener('mousewheel', this.scrollFunc, false);
    document.removeEventListener("touchstart", this.touchStart, false);
    document.removeEventListener("touchend", this.touchEnd, false);
  }
  // 移动端 touch 翻页
  touchStart = (e) => {
    this.setState({ startY: e.touches[0].pageY })
  }
  touchEnd = (e) => {
    let { index, startY } = this.state;
    let endY = e.changedTouches[0].pageY;
    if (startY - endY > 50) {
      this.handleLink(index + 1);
    } else if (endY - startY > 50) {
      this.handleLink(index - 1);
    }
  }
  // 鼠标滚动方法
  scrollFunc = (e) => {   // 需要做防抖处理
    let timer = 1000, { index } = this.state;
    let canDo = _now() - preScrollTime > timer;
    if(!canDo) return;
    let changePage = () => e.wheelDelta > 0 ? this.handleLink(index - 1) : this.handleLink(index + 1);
    if(canDo) {
      changePage();
      preScrollTime = _now();
    } 
  }
  // index发生变化时调用切换
  handleLink = (next) => {
    let pre = this.state.index;
    if ((pre > next && pre <= 0) || (pre < next && pre >= 3)) return;
    this.setState({ index: next });
    this.itemAnimate(next);
  }
  itemAnimate(next) {
    const items = this.refs.items;
    items.style.transition = `0.6s ease-in`;
    items.style.top = `${- next * 100}vh`;
  }
  render() {
    const { index } = this.state;
    return (
      <div className="home_container">
        <HomeNav handleLink={this.handleLink} index={index}/>
        <div className="items" ref="items">
          <Index />
          <Intro />
          <Skill />
          <Project />
        </div>
      </div>
    )
  }
}

export default Home
