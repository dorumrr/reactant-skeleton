import React, { useState } from 'react';
import { GlobalState } from './utils'
import './App.css';
import { Row, Col} from 'antd';
import { AppMenu } from './components';

function App(props) {
  const globalState = GlobalState.useContainer();
  const [current, setCurrent] = useState('mail');
  const handleClick = e => setCurrent(e.key);
  return (
    <div className="app-wrapper">
      <AppMenu />
    </div>
  );
}

export default App;
