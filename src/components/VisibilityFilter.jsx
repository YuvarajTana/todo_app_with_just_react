class VisibilityFilter extends Component{
	constructor(props){
		super(props)
	}
	handleFilter(f){
		this.props.updateFilter(f);
	}
	render(){
		let filters = ['all', 'active', "completed"];
		return (
			<div className="filter-links">
				{
					filters.map((filter,i) => {
						return <span key={i} onClick={this.handleFilter.bind(this,filter)}> { filter }</span>
					})
				}
			</div>
		)
	}
}
