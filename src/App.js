import React from 'react';
import style from'./app.module.css';
import Header from './components/header'
import Aside from './components/aside'
import Main from './components/main'

function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.container}>
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
