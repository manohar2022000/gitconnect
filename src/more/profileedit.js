import React, { useState,useEffect } from 'react';
import { Form, Input,Button } from 'antd';
import Modal from 'react-modal';
import '../App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 7,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 10,
    },
  },
  
};
const tailLayout = {
    wrapperCol: {
      offset: 9,
      span: 10,

    }}
const Profileedit = () => {
  const [form] = Form.useForm();
const [update,setUpdate]=useState(true);
  const onFinish = (values) => {
axios.put('http://ec2-13-127-228-126.ap-south-1.compute.amazonaws.com/users',{
    firstName:values.firstname,
    lastName:values.lastname,
    company:values.company,
})
.then(function (response){
    console.log(response)
    window.alert(response.data.message)
})
.catch(function (error) {
        console.log(error);
      });
  };

  return (
      // <Modal isOpen={update}>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      style={{padding:80}}
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="firstname"
        label="Firstname"
        rules={[
          {
            required: true,
            message: 'Please input your firstname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastname"
        label="Lastname"
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="company"
        label="Company"
        rules={[
          {
            required: true,
            message: 'Please input your Company name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit" >
          <Link to="/">Cancel</Link>
        </Button>
        <Button type="primary" htmlType="submit" className="success">
          Update
        </Button>
        
      
      </Form.Item>
     
    </Form>
//  </Modal> 
 );
};

export default Profileedit;