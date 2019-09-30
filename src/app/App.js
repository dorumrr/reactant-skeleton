import React, { useState } from 'react';
import { GlobalState } from './utils'
import './App.css';
import { Layout, Menu, Icon, Avatar, Row, Col } from 'antd';

const { SubMenu } = Menu;

function App(props) {
  const globalState = GlobalState.useContainer();
  const [current, setCurrent] = useState('mail');
  const handleClick = e => setCurrent(e.key);
  return (
    <Layout style={{background: '#ffffff', margin: '0 auto', padding: '0 20px'}}>
      <Row type="flex" justify="space-between">
        <Col style={{padding: 8}}>
          <Avatar size={36} icon="user" /> {globalState._config.siteTitle}
        </Col>
        <Col>
          <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="home"><Icon type="mail" />I.am</Menu.Item>
            <Menu.Item key="development"><Icon type="mail" />I.do</Menu.Item>
            {/* <Menu.Item key="app" disabled><Icon type="appstore" />Navigation Two</Menu.Item> */}
            <SubMenu
              title={<span /* className="submenu-title-wrapper" */><Icon type="setting" />I.enjoy</span>}
            >
              <Menu.Item key="photography">Hobby</Menu.Item>
              {/* <Menu.Item key="setting:2">Videography</Menu.Item> */}
            </SubMenu>
            <Menu.Item key="doru.uk">
              <a href="https://doru-moraru.com" target="_blank" rel="noopener noreferrer">I.web</a>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
