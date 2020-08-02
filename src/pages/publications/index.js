import React from 'react'
import style from './index.module.css'
import Wrapper from '../wrapper'
import Title from '../../components/title'
import Posts from '../../components/posts'

const PublicationsPage = () => {
      return (
        <Wrapper>
            <Title title='Publications'/>
            <Posts />
        </Wrapper>
      )
}

export default PublicationsPage
