import React from 'react';
import './index.less';
import Circle from 'react-circle';
import { resumeSkill } from '@/util/resume'

const Skill = () => {
  return (
    <section className="skill">
      <div className="wrapper_skill">
      {resumeSkill.map(item => 
        <div className="skill_item" key={item.name}>
          <div className="name">{item.name}</div>
          <Circle
            progress={item.sorce}
            progressColor="#666"
          />
        </div>
      )}
        
      </div>
    </section>
  )
}

export default Skill;
