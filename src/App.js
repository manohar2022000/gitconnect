import React from "react";
import "./App.css";
import { Layout, Menu, Button } from "antd";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Logo from './more/logo.png';
import Signup from "./more/register";
import Login from './more/login';
import Languages from './more/languages';
import Post from './more/post';
import Profileedit from './more/profileedit';
let clicklink='http://ec2-13-127-228-126.ap-south-1.compute.amazonaws.com/posts';
let start='http://ec2-13-127-228-126.ap-south-1.compute.amazonaws.com/posts/languages';
// let end='?page=2&limit=1&dateFrom=2000-06-03T17:18:19.907Z';
const { Header, Content, Footer } = Layout;
const path=window.location.pathname;

window.$login=false;
let loginbutton;
if(window.$login){
loginbutton=<Profileedit/>
}
else{
loginbutton=<Login/>
}
class App extends React.Component{
  

  render(){
    return (
      <div className="App">
        <Layout className="layout">
        
          <BrowserRouter>
            <Header className="topbar">
              <div className="logo" ><a href="http://localhost:3000/"><img src={Logo} alt="logo"></img></a></div>
              <Menu  mode="horizontal" defaultSelectedKeys={["2"]}>
                
                <Menu.Item key="1" >
                  <Link to="/news">News</Link>
                </Menu.Item>
                <Menu.Item key="2" >
                  <Link to="/">Posts</Link>
                </Menu.Item>
{/* 
                <BellOutlined className="bell"/> */}
               

                <Button type="primary" key="4"className="btn success">
                  <Link to="/register">Signup</Link>
                </Button>
                 <Button type="primary"key="3" className="btn">
                  <Link to="/login">Login</Link>
                </Button>
              </Menu>
            </Header>
            
            <Content>
              <div className="site-layout-content">
                <Switch>
                  <Route path="/news">
                  <Profileedit />
                  </Route>
                  <Route path="/" exact>
                  <Post link={clicklink}/>
                  </Route>
                  <Route path="/login">
                    {loginbutton}
                  </Route> 
                  <Route path="/register">
                    <Signup /> 
                  </Route>
                  <Route path={path} >
                    <Post link={start+path} />
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