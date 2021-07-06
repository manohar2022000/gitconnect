import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import Modal from "react-modal";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Select } from "antd";
import store from '../store';

const { Option } = Select;

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
  },
};
const Addpost = () => {
  const [form] = Form.useForm();
  const [update, setUpdate] = useState(true);
  const state = store.getState();
const authToken=state.tokenvariable;
const [token,setToken]=useState(localStorage.getItem('token'));

console.log(authToken);
  function handleChange(value) {
    console.log(value);
  }
  const onFinish = (values) => {
    console.log(values);
    axios
      .post(
        "http://ec2-13-127-228-126.ap-south-1.compute.amazonaws.com/posts",
        {
          title: values.title,
          content: values.content,
          language: values.language,
        },
        {
          headers: {
            authorization: 'Bearer '+token,
          }
        }
      )
      .then(function (response) {
        console.log(response);
        window.alert(response.data.message);
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
      style={{ padding: 80 }}
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[
          {
            required: true,
            message: "Please input Title",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="content"
        label="Content"
        rules={[
          {
            required: true,
            message: "Please input content",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="language"
        label="Language"
        rules={[
          {
            message: "Please input Language",
            whitespace: true,
          },
        ]}
      >
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a language"
          onChange={handleChange}
        >
          <Option value="5feddb71701237ab6f75db03">JAVA</Option>
          <Option value="5feddb7c701237ab6f75db04">PYTHON</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          <Link to="/">Cancel</Link>
        </Button>
        <Button type="primary" htmlType="submit" className="success">
          Post
        </Button>
      </Form.Item>
    </Form>
    //  </Modal>
  );
};

export default Addpost;
