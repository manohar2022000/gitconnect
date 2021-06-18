import { Form, Input, Button} from 'antd';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Redirect} from 'react-router-dom';
const login=false;

const layout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 6,
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 11,
    span: 16,

    
  },
};

const Demo = () => {
  const [logineduser,setLogineduser]=useState("");
  function setusername(props)
  {
    setLogineduser(props);
    console.log({logineduser});
  }
  useEffect(()=>{
    if(login){
      <Redirect to ="./Applogin"/>
    }

  })
 

  const onFinish = (values) => {
    axios.post('http://ec2-13-127-228-126.ap-south-1.compute.amazonaws.com/auth/login', {
        email: values.email,
        password:values.password,
    })
    .then(function (response) {
      console.log(response.data);
      window.alert(response.data.message);
      setusername(values.email);
    
      <Redirect to ="http://localhost:3000/nav2"/>
      console.log({logineduser});
    })
    .catch(function (error) {
      console.log(error);
    }); 
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    
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
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
  

};

export default Demo;