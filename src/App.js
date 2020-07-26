import React from 'react';
import style from'./app.module.css';
import Header from './components/header'
import Aside from './components/aside'

function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.container}>
        <Aside />
      </div>
    </div>
  );
}

export default App;
