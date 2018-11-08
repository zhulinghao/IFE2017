import React from 'react';
import './index.less';
import school from '@/assets/images/university.svg'
import birthday from '@/assets/images/birthday.svg'
import location from '@/assets/images/phone.svg'
import phone from '@/assets/images/location.svg'

const Project = () => {
  return (
    <div className="intro">
      <section>
        <div className="title">个人简介</div>
        <div className="intro_description">前端开发，熟练掌握JavaScript~</div>
        <div className="intro_row">
          <div className="item">
            <img className="icon" alt="icon" src={school}></img>
            <div>大连东软信息学院</div>
          </div>
          <div className="item">
            <img className="icon" alt="icon" src={birthday}></img>
            <div>1996.11</div>
          </div>
        </div>
        <div className="intro_row">
          <div className="item">
            <img className="icon" alt="icon" src={location}></img>
            <div>18045443563</div>
          </div>
          <div className="item">
            <img className="icon" alt="icon" src={phone}></img>
            <div>中国·大连</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project;
