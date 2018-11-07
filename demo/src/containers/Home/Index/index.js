import React from 'react';
import { Link } from 'react-router-dom';
import PrintText from '@/components/PrintText/index';
import { resumeIndex } from '@/util/resume';
import avatar from '@/assets/images/avatar.jpg';

import './index.less';

const Index = () => {
  return (
    <section className="index">
      <span>
        <div className="index_avatar">
          <span>{resumeIndex.name}</span>
          <img src={avatar} alt="avatar"/>
        </div>
        <div className="index_title"><span className="des">{resumeIndex.title}<span role="img" aria-label="Summer">☀️</span></span></div>
        <div className="index_nav">
          <Link to="/todoredux" rel="noopener noreferrer">TodoList</Link>
          <Link to="/websites" rel="noopener noreferrer">常用网站</Link>
          <Link to="/chat" rel="noopener noreferrer">Chat</Link>
          { resumeIndex.blog ? <a href={resumeIndex.blog} target="_blank" rel="noopener noreferrer">Blog</a> : null }
          { resumeIndex.github ? <a href={resumeIndex.github} target="_blank" rel="noopener noreferrer">github</a> : null }
        </div>
        <div className="index_description">
          <PrintText text={["I will be better ~", "~~~~~~~~~~~~~", "~~~~~~~~~~~~~"]} speed={100}/>
          {/* <PrintText text={"~~~~~~~~~~~~~~~ ~"} speed={100} delayTime={1900}/>
          <PrintText text={"~~~~~~~~~~~~~~~ ~"} speed={100} delayTime={4000}/> */}
        </div>
      </span>
    </section>
  )
}

export default Index;
