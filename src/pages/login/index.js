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
            username: '',
            password: '',
        }
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const {
            username,
            password
        } = this.state

        fetch('http://localhost:9999/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => 
                Promise.all([
                    res.json(),
                    res.headers.get('Authorization')
                ])
            )
            .then(([currentUser, auth]) => {

                if(currentUser && auth){
                    document.cookie = `x-auth-token=${auth}`
                    this.props.history.push('/')
                }
            })
            .catch((err) => console.log(err))
    }

    render () {
        const {
            username,
            password,
        } = this.state

        return (
            <Wrapper>
                <form className={style['login-form']} onSubmit={this.handleSubmit}>
                    <Title title='Login Page'/>
                    <Input
                        label='Username'
                        type='text'
                        name='username'
                        value={username}
                        onChange={(e)=> this.onChange(e, 'username')}
                    />
                    <Input
                        label='Password'
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e)=> this.onChange(e, 'password')}
                    />
                    <SubmitButton type='submit' name='Login'/>
                </form>
            </Wrapper>
        )
    }
}

export default LoginPage