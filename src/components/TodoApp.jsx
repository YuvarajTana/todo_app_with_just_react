import React, { Component } from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import VisibilityFilter from './VisibilityFilter';

class TodoApp extends Component{
	constructor(props){
		super(props);
		this.state = {
			todos:[],
			visbilityFilter:"all"
		}
		this.onTodoSubmit = this.onTodoSubmit.bind(this);
		this.onToggleTodo = this.onToggleTodo.bind(this);
		this.updateFilter = this.updateFilter.bind(this);
	}

	onTodoSubmit(todo){
		let {todos} = this.state;
		todos.push({
			id:todos.length + 1,
			text:todo,
			status:"active"
		});

		this.setState((prevState,props) => {
			return {
				todos:todos
			}
		});
		console.log("On todo submit", todo);
		// this.setState(())
	}

	onToggleTodo(todo){
		let {todos} = this.state;
		todos.map((todoItem) => {
			if(todoItem.id == todo.id){
				todoItem['status'] = (todo.status == 'active') ? "completed" : "active";
			}
		});
			
		this.setState((prevState,props) => {
			return {
				todos:todos
			}
		});
		console.log("on toggle todo", todo);
	}
	updateFilter(filter){
		this.setState((prevState,props) => {
			return {
				visbilityFilter:filter 
			}
		});	
	}

	render(){
		let { todos, visbilityFilter } = this.state; 

		let filterTodos = todos.filter((todo) => {

			if(visbilityFilter == "all"){
				return true
			}else if(visbilityFilter == "active"){
				return todo.status == 'active';
			}else if(visbilityFilter == "completed"){
				return todo.status == 'completed';
			}
		});


		console.log("this", todos, "visbilityFilter", visbilityFilter, "filterTodos", filterTodos);
		
		return(
			<div> 
				<AddTodo submitTodo={this.onTodoSubmit} />
				<TodoList onToggleTodo={this.onToggleTodo} todos={filterTodos}/>
				<VisibilityFilter updateFilter = {this.updateFilter}/>
			</div>
		)
	}
}

export default TodoApp;
