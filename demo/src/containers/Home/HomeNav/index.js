import React from 'react';
import './index.less';

const HomeNav = ({ handleLink, index }) => {
  return (
    <nav className="home_nav">
      <div onClick={() => handleLink(0)} className="item">
        {index === 0 ? <span className="emoji" role="img" aria-label="Index">🏳️‍🌈</span> : <span className="point"></span> }
      </div>
      <div onClick={() => handleLink(1)} className="item">
        {index === 1 ? <span className="emoji" role="img" aria-label="Intro">📇</span> : <span className="point"></span> }
      </div>
      <div onClick={() => handleLink(2)} className="item">
        {index === 2 ? <span className="emoji" role="img" aria-label="Skill">🤹</span> : <span className="point"></span> }
      </div>
      <div onClick={() => handleLink(3)} className="item">
        {index === 3 ? <span className="emoji" role="img" aria-label="Project">📑</span> : <span className="point"></span> }
      </div>
    </nav>
  )
}

export default HomeNav;
