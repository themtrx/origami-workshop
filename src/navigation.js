import React from 'react'
import { 
    BrowserRouter, 
    Switch, 
    Route 
} from 'react-router-dom'

import PublicationsPage from './pages/publications'
import ShareToughts from './pages/shareThoughts'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import ProfilePage from './pages/profile'
import ErrorPage from './pages/error'

const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={PublicationsPage}/>
                <Route path='/share' component={ShareToughts}/>
                <Route path='/register' component={RegisterPage}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/profile/:userid' component={ProfilePage}/>
                <Route component={ErrorPage}/>
            </Switch>
        </BrowserRouter>
    )

}

export default Navigation