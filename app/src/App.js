// import dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import pages:
import { Home } from './pages/Home'
import { List } from './pages/List'
import { Register } from "./pages/Register";
import { ToView } from './pages/ToView'
import { Edit } from './pages/Edit'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/list" component={List}/>
                <Route exact path="/toview" component={ToView}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/edit" component={Edit}/>
            </Switch>
        </Router>
    );
}

export default App;
