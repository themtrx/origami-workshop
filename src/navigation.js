import React from 'react'
import { 
    BrowserRouter, 
    Switch, 
    Route 
} from 'react-router-dom'

import PublicationsPage from './pages/publications'
import ShareToughts from './pages/shareThoughts'

const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={PublicationsPage}/>
                <Route path='/share' component={ShareToughts}/>
            </Switch>
        </BrowserRouter>
    )

}

export default Navigation