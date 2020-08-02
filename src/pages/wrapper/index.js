import React from 'react';
import style from'./index.module.css';
import Header from '../../components/header'
import Aside from '../../components/aside'
import Footer from '../../components/footer'

function Wrapper(props) {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.container}>
        <Aside />
          <div className={style['publication-container']}>
            {props.children}
          </div>
      </div>
        <Footer />
    </div>
  );
}

export default Wrapper;
