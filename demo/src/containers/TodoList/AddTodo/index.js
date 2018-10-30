import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '@/actions/todo';
import { Input, Button, Form  } from 'antd';
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class AddTodo extends React.Component {
  

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch(addTodo(values.todoValue));
      }
    });
    // 清空
    this.props.form.resetFields();
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const todoValueError = isFieldTouched('userName') && getFieldError('userName');
    return (
      <div>
        <Form layout="inline" 
              onSubmit={this.handleSubmit}>
          <FormItem
            validateStatus={todoValueError ? 'error' : ''}
            help={todoValueError || ''}>
            {getFieldDecorator('todoValue', {
              rules: [{ required: true, message: '不能为空哦' }],
            })(
              <Input placeholder="todo value"/>
            )}
            
          </FormItem>
          <FormItem>
            <Button 
              type="submit"
              htmlType="submit"
              disabled={hasErrors(getFieldsError())}>
              Add Todo
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
  
}

const WrappedRegistrationForm = Form.create()(AddTodo)
export default connect()(WrappedRegistrationForm)
