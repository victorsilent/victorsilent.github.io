import React from 'react'
import {Router, Route} from 'react-router'
import HashHistory from 'history/createHashHistory'

import Home from './layout/home'
import ItemA from './components/twitter/itemA'
import ItemB from './components/twitter/itemB'
import ItemC from './components/twitter/itemC'
import ItemD from './components/twitter/itemD'
import ItemE from './components/twitter/itemE'
const newHistory = HashHistory();

export default props => (
    <Router history={newHistory}>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/1a" component={ItemA}/>
            <Route path="/1b" component={ItemB}/>
            <Route path="/1c" component={ItemC}/>
            <Route path="/1d" component={ItemD}/>
            <Route path="/1e" component={ItemE}/>
        </div>
    </Router>
)