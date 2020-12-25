import React from 'react'
import Apply from './Apply'
import Admin from './Admin'
import {Link,Route} from 'react-router-dom'
import Homepage from './Home'
import 'bootstrap/dist/css/bootstrap.css'


const App=(props)=>{
    return (<div>
        <nav class="navbar navbar-light" style={{"background-color": "#e3f2fd"}}>
 

        <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link " aria-current="page" href="/home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="/apply">Apply</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="/admin">Admin</a>
  </li>
  
</ul>
</nav>



        {/* <Link to="/home">Home</Link> | <Link to="/apply">Apply</Link> | <Link to="/admin">Admin Page</Link> */}
       

        
        <Route path="/home" component={Homepage} exact={true}/>
        <Route path="/apply" component={Apply} exact={true}/>
        <Route path="/admin" component={Admin} exact={true}/>
        
        </div>)
}

export default App