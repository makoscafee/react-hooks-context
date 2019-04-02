import React, { useState } from 'react';
import './App.css';
import { MENU_ITEMS } from '../config/menu-items.constant';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="page__container">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
          {MENU_ITEMS.map((item, index) => (
            <Menu.Item key={index}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon className="trigger" type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggle} />
        </Header>
        <Content
          style={{
            margin: '16px',
            padding: 24,
            background: '#fff',
            minHeight: 280
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
