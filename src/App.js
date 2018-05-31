import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import {Link, Route, Redirect} from 'react-router-dom';

class App extends Component {
    render() {
        return ( 
            <div className = "App" >
              <h1> Schedule Your Day </h1> 
              <p>
                <Link to="/events" >Events For Today:</Link>
              </p>
              <p>
                <Link to="/events/new">Add New Event</Link>
              </p>
              <Route path="/events" component={TodoList} />
              <Route exact path="/" render={() => <Redirect to="/events" />}/>
            </div>
        );
    }
}

export default App;