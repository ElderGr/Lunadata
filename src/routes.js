import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./pages/Home";
import Articles from "./pages/Articles";

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/Lunadata' component={Home} />
            <Route exact path='/' component={Home} />
            <Route path='/articles' component={Articles} />
        </Switch>
    )
}

export default Routes;