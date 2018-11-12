import React from 'react';
import { Col, Row, Popconfirm, message, Icon } from 'antd';
import ImageWithDefault from '@/components/ImageWithDefault/index';
import PropTypes from 'prop-types';

const HomeSectionList = ({ list, deleteItem, type }) => {
  function confirm(id, type) {
    deleteItem({ id: id, type: type });
    message.success('Click on Yes');
  }
  
  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }  
  return (
    <Row gutter={40}>
      {list.map(item =>
        <Col xs={{ span: 12 }} lg={{ span: 4 }} key={item.id} className="item">
          <a href={item.url} target="_blank">
            <Popconfirm title="你确定要删除吗？" onConfirm={() => confirm(item.id, type) } onCancel={cancel} okText="Yes" cancelText="No">
              <Icon type="close" className="delete" theme="outlined" />
            </Popconfirm>
            <div className="pic">
              <ImageWithDefault imageUrl={`${item.url}/favicon.ico`} />
            </div>
            <div className="title">{item.name}</div>
          </a>
        </Col>
      )}
    </Row>
  )
}

HomeSectionList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
}
export default HomeSectionList;


