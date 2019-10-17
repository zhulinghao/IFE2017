import React from 'react';
import './index.less';
import Circle from 'react-circle';
import { resumeSkill } from '@/util/resume'
import { Button } from 'antd';

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
      <Button style={ {marginTop: '20px'} } type="primary">23333333333333</Button>
    </section>
  )
}

export default Skill;
