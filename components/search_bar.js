import React, {Component} from 'react'; //this needs to go into all components that have JS

//functional component:

// const SearchBar = () => {
// 	return <input /> //
// }; 

//class component:

class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = {term: ''};
	}

	render(){
		// return <input onChange={this.onInputChange} />;

		//shorthand to call events
		return (
			<div>
				<input 
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	//this 'event' is the object that the event is attached to
	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }
}

export default SearchBar; //exporting to be used in other places