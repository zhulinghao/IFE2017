import { connect } from 'react-redux'
import React from 'react';
import { Card } from 'antd';
import Modal from './Modal'
import SectionList from './SectionList'
import PropTypes from 'prop-types'
import { addItem, deleteItem } from '@/actions/website';
import './index.less';

const Websites = ({ data, addItem, deleteItem }) => (
  <div className="websites_wrapper">
    <h2 className="current_title">经常访问的网站~</h2>
    {data.map(section =>
      <Card className="home_section"
        key={section.id}
        title={section.type}
        style={{ marginTop: '20px' }}
        extra={<Modal type={section.type} addItem={addItem} />}>
        <SectionList list={section.list} deleteItem={deleteItem} type={section.type} />
      </Card>
    )}
  </div>
)

Websites.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired).isRequired
  }).isRequired).isRequired
}

const mapStateToProps = state => ({
  data: state.website
})

const mapDispatchToProps = dispatch => ({
  addItem: data => dispatch(addItem(data)),
  deleteItem: data => dispatch(deleteItem(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Websites)
