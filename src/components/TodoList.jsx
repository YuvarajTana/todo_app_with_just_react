import React, {Component} from 'react';

class TodoList extends Component {
	constructor(props) {
		super(props)
	}

	handleToggle(todo){
		this.props.onToggleTodo(todo);
	}

	render(){
		let {todos} = this.props;

		return (
			<div>
				{	
					todos.map((todo,i) => {

						return <p 
							key = {i} 
							className={(todo.status=="active") ? "" : "strike-through"} 
							onClick={this.handleToggle.bind(this,todo)}> 
							{ todo.text }
						</p>
					})
				}
			</div>
		)
	}
}

export default TodoList;