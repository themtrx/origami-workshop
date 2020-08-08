import React, { Component } from 'react'
import Wrapper from '../wrapper'
import style from './index.module.css'
import Title from '../../components/title'
import SubmitButton from '../../components/buttons/submitButton'
import Input from '../../components/inputs'

class LoginPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    render () {
        const {
            email,
            password,
        } = this.state

        return (
            <Wrapper>
                <div className={style['login-form']}>
                    <Title title='Login Page'/>
                    <Input
                        label='Email'
                        type='text'
                        name='email'
                        value={email}
                        onChange={(e)=> this.onChange(e, 'email')}
                    />
                    <Input
                        label='Password'
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e)=> this.onChange(e, 'password')}
                    />
                    <SubmitButton type='submit' name='Login'/>
                </div>
            </Wrapper>
        )
    }
}

export default LoginPage