import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; //importing my search bar component
import VideoList from './components/video_list'; //importing video list component
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBqjAqWS4KjaK5Q3SfrPTLjDzb19irK5Xg' //my youtube api key



// create a new component. this component should produce html

class App extends Component{
	constructor(props){
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
					videos: videos,
					selectedVideo: videos[0]
				}); //this works when key and property are the same name
			// this.setState({ videos: videos })
			// console.log(this)
		});
	}

	render(){

		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500)

		return (
			<div className = 'search-bar'>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}
	
	



//take this component's generated HTML and put it on the page ( in the DOM )

ReactDOM.render(
	<App />,
	document.querySelector('.container')
	);