import React, { useState } from 'react';
import { useHistory, useLocation, useParams} from 'react-router-dom';
import { GlobalState } from '../utils'
import './AppMenu.css';
import { Layout, Menu, Icon, Avatar, Row, Col } from 'antd';

function AppMenu(props) {
  const globalState = GlobalState.useContainer();
  const location = useLocation();
  console.log(location)
  const [current, setCurrent] = useState('iam');
  const handleClick = e => setCurrent(e.key);
  return (
    <Row type="flex" justify="space-between" className="utils-center-vertically">
      <Col style={{marginLeft: 16}}>
        <Avatar size={36} shape="square" icon="user" style={{marginRight: 10}} />
        {globalState._config.siteTitle}
      </Col>
      <Col>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="home"><Icon type="iam" />I.am</Menu.Item>
          <Menu.Item key="development"><Icon type="ido" />I.do</Menu.Item>
          <Menu.SubMenu
            title={<span><Icon type="setting" />I.enjoy</span>}
          >
            <Menu.Item key="hobby">Hobby</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="doru.uk">
            <a href="https://doru-moraru.com" target="_blank" rel="noopener noreferrer">I.web</a>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
}

export default AppMenu;
