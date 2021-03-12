import style from './info.module.css';

const Info = ({ id, publisher, year, url }) => {
	return (
		<div className={style.info}>
			<h1> {id}</h1>
			<p> {publisher}</p>
			<p> {year}</p>
			<p> {url}</p>
		</div>
	);
};

export default Info;
