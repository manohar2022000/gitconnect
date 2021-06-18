import React from "react";
import "./App.css";
import { Layout, Menu, Button } from "antd";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Logo from './logo.png';
import {SignupModal,LoginModal} from "./modals";
import Languages from './languages';
import Post from './post';
let clicklink='http://ec2-13-127-228-126.ap-south-1.compute.amazonaws.com/posts?dateTo=2020-12-31';

const { Header, Content, Footer } = Layout;
class App extends React.Component{  
  render(){
    return (
      <div className="App">
        <Layout className="layout">
        
          <BrowserRouter>
            <Header className="topbar">
              <div className="logo" ><a href="http://localhost:3000/language"><img src={Logo} alt="logo"></img></a></div>
              <Menu  mode="horizontal" defaultSelectedKeys={["3"]}>
                
                <Menu.Item key="1" >
                  <Link to="/">News</Link>
                </Menu.Item>
                <Menu.Item key="2" >
                  <Link to="/language">Language</Link>
                </Menu.Item>
{/* 
                <BellOutlined className="bell"/> */}
                <Button type="primary"key="3" className="btn">
                  <Link to="/login">Login</Link>
                </Button>

                <Button type="primary" key="4"className="btn">
                  <Link to="/register">Signup</Link>
                </Button>
              </Menu>
            </Header>
            
            <Content>
              <div className="site-layout-content">
                <Switch>
                  <Route path="/" exact>
                  
                  </Route>
                  <Route path="/language">
                  <Post link={clicklink}/>
                  </Route>
                  <Route path="/login">
                    <LoginModal />
                  </Route>
                  <Route path="/register">
                    <SignupModal /> 
                  </Route>
                </Switch>
              </div>
              <div className="rightsider"><Languages /></div>
              
            </Content>
            
            
          </BrowserRouter>
          <Footer className="foot"style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
          
        </Layout>
        
      </div>
    );
              }}
export default App;