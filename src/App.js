import { useEffect, useState } from 'react';
import './App.css';
import Info from './Info';

const App = () => {
	const [ info, setInfo ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ query, setQuery ] = useState('prefix:10.5517');

	useEffect(
		() => {
			getInformation();
		},
		[ query ]
	);

	const getInformation = async () => {
		const response = await fetch(`https://api.test.datacite.org/dois?query=${query}`);
		const data = await response.json();
		setInfo(data.data);
		console.log(data.data);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};

	return (
		<div className="App">
			<form onSubmit={getSearch} className="search-form">
				<input className="search-bar" type="text" value={search} onChange={updateSearch} />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			<div className="information">
				{info.map((information) => (
					<Info
						key={information.id}
						id={information.id}
						publisher={information.attributes.publisher}
						year={information.attributes.publicationYear}
						url={information.attributes.url}
					/>
				))}
			</div>
		</div>
	);
};
export default App;
