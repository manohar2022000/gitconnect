import { Form, Input, Button} from 'antd';
import axios from 'axios';
import React,{useState} from 'react';
import Modal from 'react-modal';
import {Link} from "react-router-dom";
import '../App.css';
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
  const [logineduser,setLogineduser]=useState("");
  const [open,setOpen]=useState(true);
  function setusername(props)
  {
    setLogineduser(props);
    console.log({logineduser});
  }
  const onFinish = (values) => {
    axios.post('http://ec2-13-127-228-126.ap-south-1.compute.amazonaws.com/auth/login', {
        email: values.email,
        password:values.password,
    })
    .then(function (response) {
      console.log(response.data);
      setOpen(false);
      setusername(values.email);
      window.$login=true;
      window.alert(response.data.message)
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