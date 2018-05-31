import React from 'react';

export default class NewEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state.task);
        e.target.reset();
        this.props.history.push('/todos');//after submitting a new event, to redirect to the '/events'
    }
    handleChange(e) {
        this.setState({
            task: e.target.value
        })
    }
   
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">Task</label>
                <input
                type="text"
                name="task"
                id="task"
                onChange={this.handleChange} 
                />
                <button>Add a Todo!</button>
            </form>
        )
    }
}