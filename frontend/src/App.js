import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddPeople from './AddPeople';
import AddRelationship from './AddRelationship';
import AddTags from './AddTags';
import Home from './Home';
import ViewPeople from './ViewPeople';

export default function App(){
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/addpeople" component={AddPeople} />
        <Route path="/viewpeople" component={ViewPeople } />
        <Route path="/addrelationship/:id" component={AddRelationship} />
        <Route path="/addtags" component={AddTags} />
      </Switch>
    </Router>
  )
}
