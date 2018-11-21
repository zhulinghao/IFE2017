import React from 'react';
import './index.less';
import HomeNav from './HomeNav/index';
import Index from './Index/index';
import Skill from './Skill/index';
import Project from './Project/index';
import Intro from './Intro/index';
import Experience from './Experience/index';
import ls from '@/services/LocalStorage';

// 获取当前时间戳
function _now() {
  return +new Date()
}
let preScrollTime = null;
const pageCount = 4;

class Home extends React.Component {
  state = {
    index: Number(ls.Get('home_index')) || 0,
    startY: null
  }
  componentDidMount() {
    this.handleLink(this.state.index);
    const items = this.refs.items;
    //  注册事件
    items.addEventListener('mousewheel', this.scrollFunc);
    items.addEventListener("touchstart", this.touchStart);
    items.addEventListener("touchend", this.touchEnd);
  }
  componentWillUnmount() {
    const items = this.refs.items;
    // 当组件销毁的时候，移除注册的事件
    items.removeEventListener('mousewheel', this.scrollFunc);
    items.removeEventListener("touchstart", this.touchStart);
    items.removeEventListener("touchend", this.touchEnd);
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
    let timer = 800, { index } = this.state;
    let canDo = _now() - preScrollTime > timer;
    if(!canDo) return;
    if(canDo) {
      e.wheelDelta > 0 ? this.handleLink(index - 1) : this.handleLink(index + 1);
      preScrollTime = _now();
    } 
  }
  // index发生变化时调用切换
  handleLink = (next) => {
    let pre = this.state.index;
    if ((pre > next && pre <= 0) || (pre < next && pre >= pageCount)) return;
    this.setState({ index: next });
    this.itemAnimate(next);
    ls.Set('home_index', next.toString());
  }
  itemAnimate(next) {
    const items = this.refs.items;
    items.style.transition = `0.4s ease-in`;
    items.style.top = `${- next * 100}vh`;
  }
  // totop
  toTop = () => {
    this.handleLink(0)
  }

  doThings() {
    console.log(this.state.index)
  }
  render() {
    const { index } = this.state;
    return (
      <div className="home_container">
        <HomeNav handleLink={this.handleLink} index={index}/>
        <div className="items" ref="items">
          <Index />
          <Intro doSomeThing={this.doThings.bind(this)}/>
          <Experience />
          <Project />
          <Skill />
        </div>
        { index === pageCount ? <div className="home_to_top" onClick={this.toTop}><span className="text pink">TOP</span></div> : null }
      </div>
    )
  }
}

export default Home
