import React from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider, Button } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

export default () => {
  return <ConfigProvider
    locale={zhCN}>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['index']}>
          <Menu.Item key="index">首页</Menu.Item>
          <Menu.Item key="btc">BTC</Menu.Item>
          <Menu.Item key="eth">ETH</Menu.Item>
          <Menu.Item key="usdt">USDT</Menu.Item>
          <Menu.Item key="ada">ADA</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>BTC</Breadcrumb.Item>
          <Breadcrumb.Item>某区块</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">区块内容</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>BTCView ©2020 Created by Jimao</Footer>
    </Layout>
  </ConfigProvider>
};
