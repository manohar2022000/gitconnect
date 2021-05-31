import React from 'react';
import BellOutlined from'@ant-design/icons';
import './App.css';import { Layout, Menu, Button } from 'antd';

const { Header, Content, Footer } = Layout;
class App extends React.Component{
    render(){
        return(
          <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
              <BellOutlined />
              <Button type="primary" className="btn">Login</Button>
            </Menu>
          </Header>
          <Content >
            

            <div className="site-layout-content">
              content {/*content */}
              </div>

          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>

        );

    }
}
export default App;