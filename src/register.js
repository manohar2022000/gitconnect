import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';
import { useState } from 'react/cjs/react.development';
import Modal from 'react-modal';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 9,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 11,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    axios.post('http://ec2-13-127-228-126.ap-south-1.compute.amazonaws.com/auth/signup', {
      username: values.username,
       email: values.email,
       password:values.password,
   })
   .then(function (response) {
     console.log(response);
     window.alert(response.data.message);
   })
   .catch(function (error) {
     console.log(error);
   }); 
  };

  return (
    <div className="signup">
    {/* <Modal isOpen={true}> */}
    
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
       
        prefix: '86',
      }}
      style={{padding:100}}
      scrollToFirstError
    >
      <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
            message: 'Please input your Username',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      
    
      <Form.Item {...tailFormItemLayout}>
      
        <Button type="primary" htmlType="submit">
          Signup
        </Button>
      </Form.Item>
    </Form>
    {/* </Modal>  */}

    </div>
  );
  
};
export default RegistrationForm;