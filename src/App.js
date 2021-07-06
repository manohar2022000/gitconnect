import React from "react";
import "./App.css";
import { Layout, Menu, Button } from "antd";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Logo from './more/logo.png';
import Signup from "./more/register";
import Login from './more/login';
import Languages from './more/languages';
import Post from './more/post';
import Profileedit from './more/addpost';
import Store from './store';
import { Provider } from 'react-redux'


const path = window.location.pathname;

// let end='?page=2&limit=1&dateFrom=2000-06-03T17:18:19.907Z';
const { Header, Content, Footer } = Layout;
window.$login = false;
let loginbutton;
if (window.$login) {
  loginbutton = <Profileedit />
}
else {
  loginbutton = <Login />
}

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // handleClick() {
  // <Login /> }
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <Layout className="layout">

            <BrowserRouter>
              <Header className="topbar">
                <div className="logo" ><a href="http://localhost:3000/"><img src={Logo} alt="logo"></img></a></div>
                <Menu mode="horizontal" defaultSelectedKeys={["2"]}>

                  <Menu.Item key="1" >
                    <Link to="/news">News</Link>
                  </Menu.Item>
                  <Menu.Item key="2" >
                    <Link to="/">Posts</Link>
                  </Menu.Item>
                  {/* 
                <BellOutlined className="bell"/> */}


                  <Button type="primary" key="4" className="btn success">
                    <Link to="/register">Signup</Link>
                  </Button>
                  <Button type="primary" key="3" className="btn">
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
                      <Post for="home" />
                    </Route>
                    <Route path="/login">
                      {loginbutton}
                    </Route>
                    <Route path="/register">
                      <Signup />
                    </Route>
                    <Route path="/languages/">
                      <Post for="language" />
                    </Route>
                  </Switch>
                </div>
                <div className="rightsider"><Languages /></div>
              </Content>
            </BrowserRouter>
            <Footer className="foot" style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </div>
      </Provider>
    );
  }
}
export default App;