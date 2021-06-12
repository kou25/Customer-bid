import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Dashboard from '../Container/Dashboard';
import Profile from '../Container/Profile';

export default function RouteContainer() {
    return (
        <main>
        <div className="sections">
        <Switch>
            <Route exact path="/" ><Dashboard/></Route>
            <Route  path="/customer/:id"><Profile/></Route>
        </Switch>
        </div>
        </main>

    )
}
