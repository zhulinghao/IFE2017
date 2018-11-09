import React from 'react';
import './index.less';
import { Icon } from 'antd';
import { resumeProject } from '@/util/resume';

const items = resumeProject.items;

const Skill = () => {
  return (
    <section className="project">
      <span>
        <div className="title">我的项目</div>
        {items.map(item =>
          <div className="project_item" key={item.name}>
            <a href="https://console.mayibida.com" target="_blank" rel="noopener noreferrer" className="project_item_title"><Icon type="link" /> {item.name}</a>
            <div className="project_item_skill">{item.skill}</div>
            <div className="project_item_description">{item.description}</div>
          </div>
        )}

      </span>
    </section>
  )
}

export default Skill;
