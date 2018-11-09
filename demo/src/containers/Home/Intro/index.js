import React from 'react';
import './index.less';
import school from '@/assets/images/university.svg'
import birthday from '@/assets/images/birthday.svg'
import location from '@/assets/images/phone.svg'
import phone from '@/assets/images/location.svg'
import { resumeIntro } from '@/util/resume';

const Project = () => {
  return (
    <section className="intro">
      <span>
        <div className="title">{resumeIntro.title}</div>
        <div className="intro_description">{resumeIntro.description}</div>
        <div className="intro_row">
          <div className="item">
            <img className="icon" alt="icon" src={school}></img>
            <div>{resumeIntro.university}</div>
          </div>
          <div className="item">
            <img className="icon" alt="icon" src={birthday}></img>
            <div>{resumeIntro.birthday}</div>
          </div>
        </div>
        <div className="intro_row">
          <div className="item">
            <img className="icon" alt="icon" src={location}></img>
            <div>{resumeIntro.phone}</div>
          </div>
          <div className="item">
            <img className="icon" alt="icon" src={phone}></img>
            <div>{resumeIntro.location}</div>
          </div>
        </div>
      </span>
    </section>
  )
}

export default Project;
