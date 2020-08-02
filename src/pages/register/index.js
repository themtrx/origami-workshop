import React, { Component } from 'react'
import Wrapper from '../wrapper'
import style from './index.module.css'
import Title from '../../components/title'
import SubmitButton from '../../components/buttons/submitButton'
import Input from '../../components/inputs'

class RegisterPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            rePassword: ''
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
            rePassword
        } = this.state

        return (
            <Wrapper>
                <div className={style['register-form']}>
                    <Title title='Register Page'/>
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
                    <Input
                        label='Re-Password'
                        type='password'
                        name='rePassword'
                        value={rePassword}
                        onChange={(e)=> this.onChange(e, 'rePassword')}
                    />
                    <SubmitButton type='submit' name='Register'/>
                </div>
            </Wrapper>
        )
    }
}

export default RegisterPage