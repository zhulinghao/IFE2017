import React from 'react';
import './index.less';

const HomeNav = ({ handleLink, index }) => {
  return (
    <nav className="home_nav">
      <div className="item">
        {index === 0 ? <span className="emoji" role="img" aria-label="Index">🏳️‍🌈</span> : <span onClick={() => handleLink(0)} className="point"></span> }
      </div>
      <div className="item">
        {index === 1 ? <span className="emoji" role="img" aria-label="Intro">📇</span> : <span onClick={() => handleLink(1)} className="point"></span> }
      </div>
      <div className="item">
        {index === 2 ? <span className="emoji" role="img" aria-label="Experience">👨‍💻</span> : <span onClick={() => handleLink(2)} className="point"></span> }
      </div>
      <div className="item">
        {index === 3 ? <span className="emoji" role="img" aria-label="Project">📑</span> : <span onClick={() => handleLink(3)} className="point"></span> }
      </div>
      <div className="item">
        {index === 4 ? <span className="emoji" role="img" aria-label="Skill">🤹</span> : <span onClick={() => handleLink(4)} className="point"></span> }
      </div>
    </nav>
  )
}

export default HomeNav;
