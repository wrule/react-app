import React from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import ViewIndex from './views/index';
import ViewBTC from './views/btc';
import ViewETH from './views/eth';
import ViewUSDT from './views/usdt';
import ViewEOS from './views/eos';
import ViewADA from './views/ada';
const { Header, Content, Footer } = Layout;


export default () => {
  return <ConfigProvider
    locale={zhCN}>
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['index']}>
            <Menu.Item key="index">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="btc">
              <Link to="/btc">BTC</Link>
            </Menu.Item>
            <Menu.Item key="eth">
              <Link to="/eth">ETH</Link>
            </Menu.Item>
            <Menu.Item key="usdt">
              <Link to="/usdt">USDT</Link>
            </Menu.Item>
            <Menu.Item key="eos">
              <Link to="/eos">EOS</Link>
            </Menu.Item>
            <Menu.Item key="ada">
              <Link to="/ada">ADA</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>BTC</Breadcrumb.Item>
            <Breadcrumb.Item>某区块</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <Switch>
              <Route exact path="/">
                <ViewIndex />
              </Route>
              <Route path="/btc">
                <ViewBTC />
              </Route>
              <Route path="/eth">
                <ViewETH />
              </Route>
              <Route path="/usdt">
                <ViewUSDT />
              </Route>
              <Route path="/eos">
                <ViewEOS />
              </Route>
              <Route path="/ada">
                <ViewADA />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>BTCView ©2020 Created by Jimao</Footer>
      </Layout>
    </Router>
  </ConfigProvider>
};
