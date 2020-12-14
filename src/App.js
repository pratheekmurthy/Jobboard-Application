import React from 'react'
import Apply from './Apply'
import Admin from './Admin'
import {Link,Route} from 'react-router-dom'
import Homepage from './Home'
import 'bootstrap/dist/css/bootstrap.css'


const App=(props)=>{
    return (<div>
        <Link to="/home">Home</Link> | <Link to="/apply">Apply</Link> | <Link to="/admin">Admin Page</Link>
        <Homepage />

        
        <Route path="/" />
        <Route path="/apply" component={Apply} exact={true}/>
        <Route path="/admin" component={Admin} exact={true}/>
        
        </div>)
}

export default App