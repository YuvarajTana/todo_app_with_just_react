import React, Component from 'react';

class AddTodo extends Component{
	constructor(props){
		super(props);
		this.state = {
			value:""
		};
	}
	handleChange(e){
		let val = e.target.value;
		console.log("on change input", val);
		if(val){
			this.setState((prevState,props) => {
				return {value:val}
			});
		}
	}
	submitTodo(){
		this.state.value ? this.props.submitTodo(this.state.value) : "";
		this.setState((prevState,props) => {
			return {value:""}
		});
	}
	render(){
		return (
			<div>
				<input 
					type="text"
					value={this.state.value}
					onChange={this.handleChange.bind(this)}
					/>
				<button onClick={this.submitTodo.bind(this)}>AddTodo</button>
			</div>
		)
	}
}

export default AddTodo;
