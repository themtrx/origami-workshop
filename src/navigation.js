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

const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={PublicationsPage}/>
                <Route path='/share' component={ShareToughts}/>
                <Route path='/register' component={RegisterPage}/>
                <Route path='/login' component={LoginPage}/>
            </Switch>
        </BrowserRouter>
    )

}

export default Navigation