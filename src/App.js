import React from "react";
import "./App.css";
import { Layout, Menu, Button } from "antd";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Api from "./api";
import {BellOutlined  
} from '@ant-design/icons';
import Logo from './logo.png';
import Apif from './apif';
import Form from './functions';
const { Header, Content, Footer } = Layout;
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <BrowserRouter>
            <Header>
              <div className="logo" ><img src={Logo} alt="logo"></img></div>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" >
                  <Link to="/">Tutorial</Link>
                </Menu.Item>
                <Menu.Item key="2" >
                  <Link to="/nav2">News</Link>
                </Menu.Item>
                <Menu.Item key="3" >
                  <Link to="/nav3">Blog</Link>
                </Menu.Item>

                <BellOutlined className="bell"/>
                <Button type="primary" className="btn">
                  <Link to="/login">Login</Link>
                </Button>
              </Menu>
            </Header>
            <Content>
              <div className="site-layout-content">
                {/*content */}
                <Switch>
                  <Route path="/" exact>
                    <Api />
                  </Route>
                  <Route path="/nav2">
                    <Apif />
                  </Route>
                  <Route path="/nav3">
                    <p>Blog</p>
                  </Route>
                  <Route path="/login">
                    <Form />
                  </Route>
                </Switch>
              </div>
            </Content>
          </BrowserRouter>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    );
  }
}
export default App;
