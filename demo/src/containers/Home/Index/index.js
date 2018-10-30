import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '@/assets/images/avatar.jpg';
import PrintText from '@/components/PrintText/index'
import './index.less';

const Index = () => {
  return (
    <section className="index">
      <span>
        <div className="index_avatar">
          <span>zlh</span>
          <img src={avatar} alt="avatar"/>
        </div>
        <div className="index_title"><span className="des">小前端一枚 ️️️<span role="img" aria-label="Summer">☀️</span></span></div>
        <div className="index_nav">
          <Link to="/todoredux" rel="noopener noreferrer">TodoList</Link><span>\</span>
          <Link to="/websites" rel="noopener noreferrer">常用网站</Link><span>\</span>
          <Link to="/chat" rel="noopener noreferrer">Chat</Link><span>\</span>
          <a href="https://zhu8191553.github.io/" target="_blank" rel="noopener noreferrer">Blog</a><span>\</span>
          <a href="https://github.com/zhu8191553" target="_blank" rel="noopener noreferrer">github</a>
        </div>
        <div className="index_description">
          <PrintText text={"I will be better ~"} speed={100} delayTime={0}/>
          <PrintText text={"DADADADADADADAD ~"} speed={100} delayTime={1900}/>
          <PrintText text={"DADADADADADADAD ~"} speed={100} delayTime={4000}/>
        </div>
      </span>
    </section>
  )
}

export default Index;
