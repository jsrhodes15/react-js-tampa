import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
		  term: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		// Declaratively set the state of the input field
		// (we tell the field what the state is, not the other way around)
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		// For form elements, use preventDefault() to override
		// default browser actions (in this case, would attempt a refresh the page)
		event.preventDefault();
		// We need to go and fetch weather data, call callback passed from parent
		this.props.fetchWeather(this.state.term);

		this.setState({ term: '' });
	}


	render() {
		return (
			<form
				onSubmit={this.onFormSubmit}
				className="input-group">
				<input
					placeholder="Get a five day forecast in your favorite U.S. city"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-primary">Submit</button>
				</span>
			</form>
		);
	}
}

export default SearchBar;
