import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import {getTodos, addTodo, removeTodo} from './actionCreators';
import {Route} from 'react-router-dom';
import NewEventForm from './NewEventForm'; 

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    componentDidMount() {
        this.props.getTodos();
    }

    handleAdd(val) {
        this.props.addTodo(val);
    }
    removeTodo(id) {
        this.props.removeTodo(id)
    }
    render() {
        let todos = this.props.todos.map(val => 
            <Todo 
                removeTodo={this.removeTodo.bind(this, val._id)} 
                task={val.task} 
                key={val._id} 
            /> )
        return (
            <div>
              <Route 
                path='/events/new' 
                component={props => (
                  <NewEventForm {...props} handleSubmit={this.handleAdd} />
              )}/>
              <Route 
                exact path='/events' 
                component={() => 
                  <div>{todos}</div>
              }/>
            </div>
        )
    }


}

function mapStateToProps(state) {
    debugger
  return {
      todos: state.todos 
  };
}

function mapDispatchToProps(dispatch) {
    debugger
    return {
        addTodo: task => dispatch(addTodo(task)),
        removeTodo: id => dispatch(removeTodo(id)),
        getTodos: () => dispatch(getTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);