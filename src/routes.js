import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import DataEngenieer from "./pages/Services/dataEngenieer";
import Cloud from "./pages/Services/cloud";
import IOT from "./pages/Services/IOT";
import IA from "./pages/Services/IA";

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/Lunadata' component={Home} />
            <Route exact path='/' component={Home} />
            <Route path='/articles' component={Articles} />

            <Route path='/dataEngenieer' component={DataEngenieer} />
            <Route path='/cloud' component={Cloud} />
            <Route path='/iot' component={IOT} />
            <Route path='/ia' component={IA} />
        </Switch>
    )
}

export default Routes;