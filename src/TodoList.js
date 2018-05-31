import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import {addTodo, removeTodo} from './actionCreators';
import {Route} from 'react-router-dom';
import NewEventForm from './NewEventForm'; 

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(val) {
        this.props.addTodo(val);
    }
    removeTodo(id) {
        this.props.removeTodo(id)
    }
    render() {
        let todos = this.props.todos.map((val, index) => 
            <Todo 
                removeTodo={this.removeTodo.bind(this, val.id)} 
                task={val.task} 
                key={index} 
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
  return {
      todos: state.todos 
  };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: task => dispatch(addTodo(task)),
        removeTodo: id => dispatch(removeTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);