import React from 'react';
// import logo from './logo.svg';
import './App.css';
import XAvatar from './components/avatar';
import 'antd/dist/antd.css';
import { DatePicker, Button } from 'antd';

function App() {
  const str: string = '你好,世界';

  return (
    <div className="App">
      <span>{str.slice(0, 3)}</span>
      <XAvatar
        name="中"
        size={32}
      />
      <XAvatar
        name="中本"
        size={64}
      />
      <XAvatar
        name="中本聪"
        size={128}
      />
      <XAvatar
        name="V神"
        img="/v.jpeg"
        size={100}
      />
      <DatePicker size="small" />
      <Button size="small" type="primary">主要按钮</Button>
    </div>
  );
}

export default App;
