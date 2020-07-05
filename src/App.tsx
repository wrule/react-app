import React from 'react';
// import logo from './logo.svg';
import './App.css';
import XAvatar from './components/avatar';

function App() {
  const str: string = '你好,世界';

  return (
    <div className="App">
      <span>{str.slice(0, 3)}</span>
      <XAvatar
        name="中本"
        size={64}
      />
    </div>
  );
}

export default App;
