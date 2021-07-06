import { Form, Input, Button} from 'antd';
import axios from 'axios';
import React,{useState} from 'react';
import Modal from 'react-modal';
import {Link} from "react-router-dom";
import '../App.css';
import {useDispatch} from 'react-redux';
import * as userActions from '../store/action/user';
import store from '../store';
const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 10,
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 9,
    span: 10,

    
  },
};

const Demo = () => {
  const dispatch=useDispatch();
 
 
  const [open,setOpen]=useState(true);
  const onFinish = (values) => {
    axios.post('http://ec2-13-127-228-126.ap-south-1.compute.amazonaws.com/auth/login', {
        email: values.email,
        password:values.password,
    })
    .then(function (response) {
      setOpen(false);
      window.alert(response.data.message)
      dispatch(userActions.addstatus(true));
      const state =store.getState();
      const loggedinstatus=state.islogin;
      // console.log(dispatch(userActions.addtoken(response.data.data.token)))
      localStorage.setItem('userid',values.email);
      localStorage.setItem('token',response.data.data.token);
      // console.log(localStorage.getItem('token'))
      console.log(localStorage.getItem('userid'));
      console.log(loggedinstatus)
    })
    .catch(function (error) {
      console.log(error);
    }); 
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
   <Modal isOpen={open}>
    <Form
      {...layout}
      name="basic"
      initialValues={{
      }}
      style={{padding:130}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
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
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
      <Button type="primary" >
         <Link to="/">Cancel</Link> 
        </Button>
      
        <Button type="primary" htmlType="submit" className="success">
          Login
        </Button>
      </Form.Item>
    </Form>
 
    </Modal> 
  );
  

};

export default Demo;