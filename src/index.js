import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCVxZ6MOb5D07T7WVoQnyWpbhBda79dKxg'

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	)
}

ReactDOM.render(
      <App />
    , document.querySelector('.container'));
