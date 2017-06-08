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
            <Route path="/a" component={ItemA}/>
            <Route path="/b" component={ItemB}/>
            <Route path="/c" component={ItemC}/>
            <Route path="/d" component={ItemD}/>
            <Route path="/e" component={ItemE}/>
        </div>
    </Router>
)