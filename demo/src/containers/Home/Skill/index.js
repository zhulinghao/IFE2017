import React from 'react';
import './index.less';
import { resumeSkill } from '@/util/resume';

const items = resumeSkill.items;

const Skill = () => {
  return (
    <section className="work">
      <span>
        <div className="title">{resumeSkill.title}</div>
        {items.map(item => 
          <div className="skill_item" key={item.name}>
            <div className="head"><span className="name">{item.name}</span><span className="time">{item.time}</span></div>
            <div className="position">{item.position}</div>
            <div className="description">{item.description}</div>
          </div>
        )}
      </span>
    </section>
  )
}

export default Skill;
