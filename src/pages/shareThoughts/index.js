import React from 'react';
import style from'./index.module.css';
import Wrapper from '../wrapper'
import Title from '../../components/title'
import SubmitButton from '../../components/buttons/submitButton'
import Posts from '../../components/posts'

function ShareToughts() {
  return (
    <Wrapper>
      <div className={style.container}>
        <Title title='Share yout thoughts...'/>
        <textarea className={style.textArea} defaultValue='Write something here ...'></textarea>
        <SubmitButton name='Post'/>
        <Posts count={3}/>
      </div>
    </Wrapper>
  );
}

export default ShareToughts;
