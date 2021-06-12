import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Dashboard from '../Container/Dashboard';

export default function RouteContainer() {
    return (
        <main>
        <div className="sections">
        <Switch>
            <Route exact path="/" ><Dashboard/></Route>
            {/* <Route  path="/event/:id"></></Route> */}
        </Switch>
        </div>
        </main>

    )
}
