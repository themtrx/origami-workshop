import React, { Component } from 'react'
import Wrapper from '../wrapper'
import Posts from '../../components/posts'
import style from './index.module.css'


class ProfilePage extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: null,
            posts: null
        }
    }

componentDidMount() {
    const id = this.props.match.params.userid
    this.getUser(id)
}

getUser = (id) => {
    fetch(`http://localhost:9999/api/user?id=${id}`)
    .then((user) => user.json())
    .then((user) => {

        this.setState({
            username: user.username,
            posts: user.posts.length ? user.posts.length: 0
        })
    })
    .catch((err) => this.props.history.push('/error'))
}
    render(){

        const { username, posts } = this.state

        if(!username) {
            return (
                <Wrapper>
                    <div>Loading...</div>
                </Wrapper>
            )
        }

        return (
            <Wrapper>
                <div className={style.profile}>
                    <p>
                        <span>Username:</span>
                        {username}
                    </p>
                    <p>
                        <span>Posts:</span>
                        {posts}
                    </p>
                </div>
                <Posts count={3}/>
            </Wrapper>  
        )
    }
}

export default ProfilePage